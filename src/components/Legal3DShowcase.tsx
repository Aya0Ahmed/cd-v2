import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import type { Language } from '../types';

type CameraPreset = 'equilibrium' | 'scales' | 'orbit';

interface Legal3DShowcaseProps {
  lang: Language;
}

const CAMERA_PRESETS: Record<CameraPreset, { pos: [number, number, number]; targetY: number }> = {
  equilibrium: { pos: [0, 1.85, 5.4], targetY: 1.45 },
  scales: { pos: [1.65, 2.35, 3.3], targetY: 2.05 },
  orbit: { pos: [-2.4, 3.1, 4.6], targetY: 1.55 },
};

export function Legal3DShowcase({ lang }: Legal3DShowcaseProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const presetRef = useRef<CameraPreset>('equilibrium');
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [preset, setPreset] = useState<CameraPreset>('equilibrium');

  useEffect(() => {
    presetRef.current = preset;
  }, [preset]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Software WebGL probe
    const isSoftwareGl = (() => {
      try {
        const probeCanvas = document.createElement('canvas');
        const gl = probeCanvas.getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param) || '');
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0C110D');
    scene.fog = new THREE.FogExp2('#0C110D', 0.055);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 60);
    camera.position.set(...CAMERA_PRESETS.equilibrium.pos);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Studio RoomEnvironment reflection map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    const envTarget = pmremGenerator.fromScene(roomEnv, 0.04);
    scene.environment = envTarget.texture;
    roomEnv.dispose();
    pmremGenerator.dispose();

    // 3-Point Warm/Cool Lighting + Illuminated Emerald Core Point Light
    const hemiLight = new THREE.HemisphereLight(0xd9f5c4, 0x0b0f0c, 0.75);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff3dc, 2.2);
    keyLight.position.set(4.5, 7, 5);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.left = -4;
    keyLight.shadow.camera.right = 4;
    keyLight.shadow.camera.top = 4;
    keyLight.shadow.camera.bottom = -4;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x65b307, 1.5);
    rimLight.position.set(-4, 4, -3.5);
    scene.add(rimLight);

    const coreLight = new THREE.PointLight(0x85df1a, 3.2, 8, 1.8);
    coreLight.position.set(0, 1.85, 0.2);
    scene.add(coreLight);

    // Procedural Textures & PBR Materials
    const obsidianMat = new THREE.MeshStandardMaterial({
      color: 0x151b16,
      roughness: 0.28,
      metalness: 0.4,
    });

    const brushedGoldMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4af5a,
      metalness: 0.94,
      roughness: 0.22,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2,
    });

    const emeraldCrystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x65b307,
      emissive: 0x3b7d05,
      emissiveIntensity: 0.95,
      metalness: 0.15,
      roughness: 0.1,
      clearcoat: 1.0,
      ior: 1.7,
    });

    const emeraldGlowRingMat = new THREE.MeshStandardMaterial({
      color: 0x85df1a,
      emissive: 0x65b307,
      emissiveIntensity: 1.2,
      roughness: 0.25,
      metalness: 0.8,
    });

    const disposables: Array<{ dispose: () => void }> = [
      obsidianMat,
      brushedGoldMat,
      emeraldCrystalMat,
      emeraldGlowRingMat,
    ];

    const addGeo = <T extends THREE.BufferGeometry>(g: T): T => {
      disposables.push(g);
      return g;
    };

    // Soft Ground Shadow Disc
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 124);
      grad.addColorStop(0, 'rgba(0,0,0,0.75)');
      grad.addColorStop(0.55, 'rgba(20,40,10,0.28)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.85,
    });
    disposables.push(shadowTex, shadowMat);
    const groundShadow = new THREE.Mesh(addGeo(new THREE.PlaneGeometry(4.2, 4.2)), shadowMat);
    groundShadow.rotation.x = -Math.PI / 2;
    groundShadow.position.y = 0.01;
    scene.add(groundShadow);

    // Composite 12-Part Scales of Justice Assembly (Grounded at y=0)
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1-2: Stepped Octagonal Plinth Base
    const baseLower = new THREE.Mesh(
      addGeo(new THREE.CylinderGeometry(1.15, 1.28, 0.16, 8)),
      obsidianMat,
    );
    baseLower.position.y = 0.08;
    baseLower.receiveShadow = true;
    baseLower.castShadow = true;
    sculptureGroup.add(baseLower);

    const baseUpper = new THREE.Mesh(
      addGeo(new THREE.CylinderGeometry(0.75, 0.92, 0.18, 8)),
      obsidianMat,
    );
    baseUpper.position.y = 0.25;
    baseUpper.castShadow = true;
    sculptureGroup.add(baseUpper);

    // 3: Gold Collar Ring
    const baseCollar = new THREE.Mesh(
      addGeo(new THREE.CylinderGeometry(0.32, 0.38, 0.12, 24)),
      brushedGoldMat,
    );
    baseCollar.position.y = 0.4;
    sculptureGroup.add(baseCollar);

    // 4: Central Fluted Pillar
    const centralPillar = new THREE.Mesh(
      addGeo(new THREE.CylinderGeometry(0.11, 0.16, 2.25, 16)),
      brushedGoldMat,
    );
    centralPillar.position.y = 1.56;
    centralPillar.castShadow = true;
    sculptureGroup.add(centralPillar);

    // 5: Crown Finial & Glowing Emerald Prism Core
    const crownCap = new THREE.Mesh(
      addGeo(new THREE.CylinderGeometry(0.22, 0.14, 0.16, 16)),
      brushedGoldMat,
    );
    crownCap.position.y = 2.74;
    sculptureGroup.add(crownCap);

    const coreCrystal = new THREE.Mesh(
      addGeo(new THREE.OctahedronGeometry(0.24, 0)),
      emeraldCrystalMat,
    );
    coreCrystal.position.y = 3.06;
    sculptureGroup.add(coreCrystal);

    // 6: Balance Beam Assembly (pivots gently)
    const beamPivot = new THREE.Group();
    beamPivot.position.y = 2.66;
    sculptureGroup.add(beamPivot);

    const beamCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.35, -0.08, 0),
      new THREE.Vector3(-0.65, 0.1, 0),
      new THREE.Vector3(0, 0.02, 0),
      new THREE.Vector3(0.65, 0.1, 0),
      new THREE.Vector3(1.35, -0.08, 0),
    ]);
    const beamMesh = new THREE.Mesh(
      addGeo(new THREE.TubeGeometry(beamCurve, 40, 0.048, 12, false)),
      brushedGoldMat,
    );
    beamMesh.castShadow = true;
    beamPivot.add(beamMesh);

    // Left & Right Pan Builders (LatheGeometry curved dishes + 3 suspension rods + glowing mini orb)
    const panPoints = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.26, 0.02),
      new THREE.Vector2(0.46, 0.1),
      new THREE.Vector2(0.5, 0.15),
    ];
    const panGeo = addGeo(new THREE.LatheGeometry(panPoints, 32));
    const rodGeo = addGeo(new THREE.CylinderGeometry(0.011, 0.011, 1.05, 8));
    const panOrbGeo = addGeo(new THREE.OctahedronGeometry(0.11, 0));

    const createPanAssembly = (sideX: number) => {
      const panGroup = new THREE.Group();
      panGroup.position.set(sideX, -0.08, 0);

      const hookRing = new THREE.Mesh(
        addGeo(new THREE.TorusGeometry(0.06, 0.018, 10, 20)),
        brushedGoldMat,
      );
      panGroup.add(hookRing);

      const dishY = -1.04;
      const dish = new THREE.Mesh(panGeo, brushedGoldMat);
      dish.position.y = dishY;
      dish.castShadow = true;
      panGroup.add(dish);

      // 3 suspension rods connecting hookRing to dish rim
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const rx = Math.cos(angle) * 0.44;
        const rz = Math.sin(angle) * 0.44;
        const rod = new THREE.Mesh(rodGeo, brushedGoldMat);
        rod.position.set(rx * 0.5, dishY * 0.5 + 0.05, rz * 0.5);
        rod.lookAt(
          new THREE.Vector3(rx, dishY + 0.12, rz).applyMatrix4(panGroup.matrixWorld),
        );
        // Compute direct orientation from top apex (0,0,0) to rim point
        const start = new THREE.Vector3(0, 0, 0);
        const end = new THREE.Vector3(rx, dishY + 0.12, rz);
        const dir = new THREE.Vector3().subVectors(end, start);
        const len = dir.length();
        rod.scale.set(1, len / 1.05, 1);
        rod.position.copy(start).addScaledVector(dir, 0.5);
        rod.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
        panGroup.add(rod);
      }

      const miniOrb = new THREE.Mesh(panOrbGeo, emeraldCrystalMat);
      miniOrb.position.y = dishY + 0.18;
      panGroup.add(miniOrb);

      beamPivot.add(panGroup);
      return panGroup;
    };

    const leftPan = createPanAssembly(-1.32);
    const rightPan = createPanAssembly(1.32);

    // 10-11: Illuminated Orbiting Architectural Rings around the Scales
    const outerRing = new THREE.Mesh(
      addGeo(new THREE.TorusGeometry(1.75, 0.018, 14, 72)),
      emeraldGlowRingMat,
    );
    outerRing.position.y = 1.65;
    outerRing.rotation.x = Math.PI * 0.36;
    outerRing.rotation.y = Math.PI * 0.12;
    sculptureGroup.add(outerRing);

    const innerRing = new THREE.Mesh(
      addGeo(new THREE.TorusGeometry(1.42, 0.012, 12, 64)),
      brushedGoldMat,
    );
    innerRing.position.y = 1.65;
    innerRing.rotation.x = -Math.PI * 0.32;
    innerRing.rotation.y = -Math.PI * 0.18;
    sculptureGroup.add(innerRing);

    // Subtle Floating Emerald Light Particles (InstancedMesh)
    const particleCount = 36;
    const particleGeo = addGeo(new THREE.OctahedronGeometry(0.03, 0));
    const particles = new THREE.InstancedMesh(particleGeo, emeraldGlowRingMat, particleCount);
    const pData: Array<{ r: number; y: number; speed: number; offset: number }> = [];
    const dummy = new THREE.Object3D();
    for (let i = 0; i < particleCount; i++) {
      const r = 1.5 + (i % 5) * 0.28;
      const y = 0.4 + ((i * 0.37) % 2.8);
      const speed = 0.25 + (i % 4) * 0.08;
      const offset = (i / particleCount) * Math.PI * 2;
      pData.push({ r, y, speed, offset });
      dummy.position.set(Math.cos(offset) * r, y, Math.sin(offset) * r);
      dummy.updateMatrix();
      particles.setMatrixAt(i, dummy.matrix);
    }
    particles.instanceMatrix.needsUpdate = true;
    particles.computeBoundingSphere();
    particles.frustumCulled = false;
    scene.add(particles);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointerRef.current = { x: nx, y: ny };
    };
    const handlePointerLeave = () => {
      pointerRef.current = { x: 0, y: 0 };
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cw = Math.max(entry.contentRect.width, 200);
        const ch = Math.max(entry.contentRect.height, 200);
        camera.aspect = cw / ch;
        camera.updateProjectionMatrix();
        renderer.setSize(cw, ch);
      }
    });
    resizeObserver.observe(container);

    const clock = new THREE.Clock();
    const lookTarget = new THREE.Vector3(0, 1.45, 0);
    let frameId = 0;
    let isDisposed = false;

    const afterDraw = (cb: () => void) => {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync ? gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0) : null;
      gl.flush();
      const poll = () => {
        if (isDisposed) return;
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (sync && state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    };

    const tick = () => {
      if (isDisposed) return;
      const delta = Math.min(clock.getDelta(), 0.08);
      const elapsed = clock.getElapsedTime();

      // Gentle equilibrium tilt on balance beam & counter-tilted pans
      const tilt = Math.sin(elapsed * 0.9) * 0.065;
      beamPivot.rotation.z = tilt;
      leftPan.rotation.z = -tilt;
      rightPan.rotation.z = -tilt;

      // Illuminated core & orbital rings
      coreCrystal.rotation.y = elapsed * 0.85;
      coreCrystal.position.y = 3.06 + Math.sin(elapsed * 1.6) * 0.04;
      coreLight.intensity = 2.8 + Math.sin(elapsed * 2.1) * 0.55;

      outerRing.rotation.z = elapsed * 0.18;
      innerRing.rotation.z = -elapsed * 0.24;

      // Pointer parallax rotation on main sculpture
      const targetRotY = elapsed * 0.18 + pointerRef.current.x * 0.35;
      const targetRotX = pointerRef.current.y * 0.1;
      sculptureGroup.rotation.y = THREE.MathUtils.damp(
        sculptureGroup.rotation.y,
        targetRotY,
        4.5,
        delta,
      );
      sculptureGroup.rotation.x = THREE.MathUtils.damp(
        sculptureGroup.rotation.x,
        targetRotX,
        4.5,
        delta,
      );

      // Update floating illuminated nodes
      for (let i = 0; i < particleCount; i++) {
        const p = pData[i];
        const angle = p.offset + elapsed * p.speed;
        dummy.position.set(
          Math.cos(angle) * p.r,
          p.y + Math.sin(elapsed * 1.3 + i) * 0.12,
          Math.sin(angle) * p.r,
        );
        dummy.rotation.y = elapsed + i;
        dummy.updateMatrix();
        particles.setMatrixAt(i, dummy.matrix);
      }
      particles.instanceMatrix.needsUpdate = true;

      // Smooth damped camera preset transitions
      const activePreset = CAMERA_PRESETS[presetRef.current];
      camera.position.x = THREE.MathUtils.damp(camera.position.x, activePreset.pos[0], 4, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, activePreset.pos[1], 4, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, activePreset.pos[2], 4, delta);
      lookTarget.y = THREE.MathUtils.damp(lookTarget.y, activePreset.targetY, 4, delta);
      camera.lookAt(lookTarget);

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    tick();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      disposables.forEach((d) => d.dispose());
      envTarget.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const presetLabels: { id: CameraPreset; label: string }[] = [
    { id: 'equilibrium', label: lang === 'ar' ? 'التوازن القانوني' : 'Equilibrium' },
    { id: 'scales', label: lang === 'ar' ? 'تفصيل الميزان' : 'Scales Focus' },
    { id: 'orbit', label: lang === 'ar' ? 'زاوية شاملة' : 'Wide Orbit' },
  ];

  return (
    <div className="bg-[#0C110D] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
      {/* Isolated WebGL Canvas Mount — zero backdrop-blur overlays */}
      <div
        ref={mountRef}
        className="w-full h-[360px] sm:h-[420px] cursor-grab active:cursor-grabbing"
        aria-label={
          lang === 'ar'
            ? 'مجسم ثلاثي الأبعاد تفاعلي لميزان العدالة والاتزان القانوني'
            : 'Interactive 3D Illuminated Scales of Justice Showcase'
        }
      />

      {/* Non-occluding Bottom Control Bar */}
      <div className="px-4 py-3 bg-[#131915] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-medium text-[#85DF1A]">
          {lang === 'ar'
            ? 'مجسم 3D تفاعلي · حرّك المؤشر للاستعراض'
            : 'Interactive 3D · Move cursor to inspect'}
        </span>

        <div className="flex items-center gap-1.5">
          {presetLabels.map((item) => {
            const active = preset === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPreset(item.id)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#65B307] text-[#0B0F0C] font-semibold'
                    : 'bg-[#0B0F0C] text-[#B2BFB4] hover:text-white border border-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
