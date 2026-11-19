import heroBoardroomImg from '../assets/images/hero_boardroom_nile_1794562734507.jpg';
import legalContractsImg from '../assets/images/legal_contracts_advisory_1794562717929.jpg';
import financialResearchImg from '../assets/images/financial_audit_research_1794562718440.jpg';
import executiveLoungeImg from '../assets/images/executive_lounge_clean_1794562733965.jpg';
import cairoSkylineImg from '../assets/images/cairo_skyline_architecture_1794563295603.jpg';
import corporateLicensingImg from '../assets/images/corporate_licensing_permits_1794563295569.jpg';
import familyEstateImg from '../assets/images/family_estate_counsel_1794563295749.jpg';
import maBoardroomImg from '../assets/images/ma_boardroom_deal_1794563296777.jpg';
import securityClearanceImg from '../assets/images/security_clearance_egypt_1794563298022.jpg';
import executiveTeamImg from '../assets/images/executive_team_editorial_1794563297126.jpg';
import trademarkIpImg from '../assets/images/trademark_ip_protection_1795090703271.jpg';
import disputeCourtImg from '../assets/images/dispute_resolution_court_1795090704834.jpg';

import type {
  BlogArticle,
  CreatorProfile,
  DisciplineId,
  LocalizedText,
  ServiceItem,
  SpecialistRole,
} from '../types';

export const ASSETS = {
  logo: '/assets/aistudio/Minimal_CD_Consulting_Logo__1__f57d7873.png',
  heroBoardroom: heroBoardroomImg,
  legalContracts: legalContractsImg,
  financialResearch: financialResearchImg,
  executiveLounge: executiveLoungeImg,
  cairoSkyline: cairoSkylineImg,
  corporateLicensing: corporateLicensingImg,
  familyEstate: familyEstateImg,
  maBoardroom: maBoardroomImg,
  securityClearance: securityClearanceImg,
  executiveTeam: executiveTeamImg,
  trademarkIp: trademarkIpImg,
  disputeCourt: disputeCourtImg,
} as const;

export const DISCIPLINE_LABELS: Record<DisciplineId | 'all', LocalizedText> = {
  all: { ar: 'جميع التخصصات', en: 'All Practice Areas' },
  legal: { ar: 'المحاماة والشركات', en: 'Law & Corporate' },
  accounting: { ar: 'المحاسبة والضرائب', en: 'Accounting & Tax' },
  research: { ar: 'الأبحاث والتراخيص', en: 'Research & Licensing' },
};

export const SPECIALIST_ROLES: SpecialistRole[] = [
  {
    id: 'legal',
    title: { ar: 'محامون ومستشارون قانونيون', en: 'Corporate & Litigation Lawyers' },
    pluralTitle: { ar: 'اطلب محامياً', en: 'Request a Lawyer' },
    subtitle: {
      ar: 'تأسيس الشركات · العقود والدمج · فض المنازعات · العلامات التجارية',
      en: 'Formation · Contracts & M&A · Litigation · Trademarks',
    },
    description: {
      ar: 'نخبة من المحامين المقيدين أمام المحاكم الاقتصادية والمدنية والإدارية لتأسيس الشركات، صياغة العقود التجارية وعقود الفيديك، الترافع في المنازعات، وحماية الملكية الفكرية.',
      en: 'Senior attorneys admitted before Economic, Civil, and Administrative Courts handling corporate formation, FIDIC & commercial contracts, dispute resolution, and IP enforcement.',
    },
    image: disputeCourtImg,
    imageAlt: {
      ar: 'غرفة المداولة والتحكيم التجاري والمرافعات القانونية',
      en: 'Commercial arbitration chamber and law firm library',
    },
    capabilities: [
      { ar: 'التأسيس القانوني للشركات وتعديلات العقود التأسيسية وإقامات الأجانب', en: 'Company incorporation, charter amendments & foreigner residencies' },
      { ar: 'صياغة العقود التجارية، الفيديك، نقل الملكية، والتمثيل أمام القضاء والتحكيم', en: 'Commercial & FIDIC contracts, title transfers, litigation & arbitration' },
      { ar: 'تسجيل العلامات التجارية وحماية الملكية الفكرية ومكافحة التعدي', en: 'Trademark registration, IP defense & anti-counterfeiting actions' },
    ],
    typicalDeliverables: [
      { ar: 'عقد تأسيس أو عقد تجاري محكم الصياغة', en: 'Execution-Ready Legal Contract' },
      { ar: 'مذكرة دفاع أو فحص قانوني نافي للجهالة', en: 'Litigation Brief or Legal Due Diligence' },
      { ar: 'شهادة تسجيل علامة تجارية أو إقامة مستثمر', en: 'Trademark Certificate or Investor Residency' },
    ],
  },
  {
    id: 'accounting',
    title: { ar: 'محاسبون قانونيون وخبراء ضرائب', en: 'Certified Accountants & Tax Advisors' },
    pluralTitle: { ar: 'اطلب محاسباً', en: 'Request an Accountant' },
    subtitle: {
      ar: 'القوائم المالية · إعادة الهيكلة · الاستشارات الضريبية · مخاطر الائتمان',
      en: 'Financial Statements · Restructuring · Tax Advisory · Credit Risk',
    },
    description: {
      ar: 'محاسبون قانونيون متخصصون في إعداد القوائم المالية المعتمدة، إعادة الهيكلة المالية للشركات، التخطيط الضريبي وتقديم الإقرارات، وتقييم مخاطر الائتمان والديون.',
      en: 'Certified public accountants delivering EAS/IFRS financial statements, turnaround restructuring, corporate tax planning & filings, and credit risk evaluation.',
    },
    image: financialResearchImg,
    imageAlt: {
      ar: 'مكتب المحاسبة القانونية وإعداد القوائم المالية والتقارير الضريبية',
      en: 'Certified accounting and corporate tax advisory desk',
    },
    capabilities: [
      { ar: 'إعداد واعتماد القوائم المالية والميزانيات وفق EAS و IFRS', en: 'Statutory financial statements & balance sheets under EAS & IFRS' },
      { ar: 'إدارة الملفات الضريبية وفحص المأموريات ولجان الطعن الضريبي', en: 'Corporate tax compliance, VAT filings & tax dispute defense' },
      { ar: 'هيكلة المديونيات وتقييم الأصول في صفقات الاستحواذ والاندماج', en: 'Debt restructuring and valuation for M&A transactions' },
    ],
    typicalDeliverables: [
      { ar: 'قوائم مالية وميزانيات معتمدة', en: 'Certified Financial Statements' },
      { ar: 'خطة إعادة هيكلة وجدولة التزامات', en: 'Restructuring & Turnaround Plan' },
      { ar: 'تقرير فحص ضريبي ودراسة جدوى مالية', en: 'Tax Compliance & Financial Feasibility Report' },
    ],
  },
  {
    id: 'research',
    title: { ar: 'باحثون قانونيون وخبراء تراخيص', en: 'Legal Researchers & Licensing Specialists' },
    pluralTitle: { ar: 'اطلب باحثاً', en: 'Request a Researcher' },
    subtitle: {
      ar: 'هيئة الاستثمار · الموافقات الأمنية · دراسات الجدوى · الفحص التشريعي',
      en: 'GAFI Liaison · Security Clearances · Feasibility · Regulatory Research',
    },
    description: {
      ar: 'باحثون قانونيون وتنظيميون لإعداد ملفات التأسيس والتراخيص أمام هيئة الاستثمار والهيئات الحكومية، استيفاء الموافقات الأمنية في مصر، وإعداد دراسات الجدوى التشريعية والسوقية.',
      en: 'Legal and regulatory researchers managing GAFI and authority filings, statutory security clearances in Egypt, trademark searches, and legislative feasibility studies.',
    },
    image: securityClearanceImg,
    imageAlt: {
      ar: 'مجمع الهيئات الاستثمارية والإدارية في القاهرة',
      en: 'Egyptian investment and regulatory authority complex',
    },
    capabilities: [
      { ar: 'تمثيل الملفات أمام الهيئة العامة للاستثمار ومصلحة الشهر العقاري', en: 'Direct filings at GAFI, IDA, and Real Estate Notarization' },
      { ar: 'استيفاء الموافقات الأمنية للأنشطة والشركاء والمديرين الأجانب', en: 'Security clearances for regulated sectors and foreign partners' },
      { ar: 'بحوث السوابق القضائية وتشابه العلامات التجارية ودراسات الجدوى', en: 'Case-law research, trademark clearance searches & feasibility studies' },
    ],
    typicalDeliverables: [
      { ar: 'خارطة التراخيص والموافقات الأمنية', en: 'Licensing & Security Clearance Dossier' },
      { ar: 'دراسة جدوى قانونية واقتصادية متكاملة', en: 'Integrated Legal & Economic Feasibility Study' },
      { ar: 'تقرير فحص وتشابه العلامات التجارية', en: 'Trademark Registrability & Clearance Report' },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'company-formation',
    slug: 'company-formation',
    indexNumber: '01',
    discipline: 'legal',
    secondaryDisciplines: ['research'],
    title: {
      ar: 'تأسيس الشركات وإقامات الأجانب',
      en: 'Company Formation & Foreigner Residencies',
    },
    shortTagline: {
      ar: 'تأسيس كافة الكيانات القانونية · التعديلات والتراخيص · إقامات المستثمرين والموافقات الأمنية',
      en: 'Corporate Incorporation · Amendments & Permits · Investor Residencies & Security Clearances',
    },
    summary: {
      ar: 'التأسيس القانوني المتكامل للشركات في مصر بمختلف أشكالها، إجراء التعديلات على العقود التأسيسية، استخراج التراخيص والموافقات الأمنية، وتنظيم إقامات المستثمرين والمديرين الأجانب.',
      en: 'End-to-end corporate incorporation in Egypt across all legal structures, charter amendments, statutory permits, security clearances, and foreigner investor residencies.',
    },
    detailedExplanation: {
      ar: 'يبدأ نجاح أي مشروع استثماري باختيار الشكل القانوني السليم الذي يحمي الشركاء ويمنح الشركة مرونة التمويل والتوسع. يتولى محامو CD Consulting دراسة نشاطك واختيار الكيان الأنسب (شركة ذات مسؤولية محدودة، شركة شخص واحد، شركة مساهمة، أو منشأة فردية)، وصياغة النظام الأساسي، وإنهاء كافة الإجراءات أمام الهيئة العامة للاستثمار والسجل التجاري، مع تولي ملفات إقامات الأجانب وتصاريح العمل والموافقات الأمنية اللازمة للشركاء والأنشطة.',
      en: 'Sound legal architecture from day one shields founders from liability and tax friction. CD Consulting attorneys advise on optimal corporate vehicles (LLC, One-Person Company, Joint Stock Company, or Branch), draft tailored Articles of Association, handle GAFI and Commercial Registry filings, and secure foreigner investor residencies, work permits, and statutory security clearances in Egypt.',
    },
    image: corporateLicensingImg,
    imageAlt: {
      ar: 'ملفات تأسيس الشركات والتراخيص القانونية وإقامات المستثمرين',
      en: 'Corporate formation dossiers, official blueprints, and licensing folders',
    },
    subScopes: [
      {
        id: 'entity-incorporation',
        title: { ar: 'تأسيس الشركات بكافة أشكالها القانونية', en: 'Incorporation of All Corporate Entities' },
        description: {
          ar: 'تأسيس شركات ذات مسؤولية محدودة، شركات مساهمة، شركات شخص واحد، وشركات الأشخاص في أسرع وقت وبصياغة تحفظ حقوق المؤسسين.',
          en: 'Establishing LLCs, Joint Stock Companies (JSC), One-Person Companies, and Partnerships with founder-protective bylaws.',
        },
      },
      {
        id: 'foreign-residencies',
        title: { ar: 'إقامات الأجانب وتصاريح العمل والموافقات الأمنية', en: 'Foreigner Residencies, Work Permits & Security Clearances' },
        description: {
          ar: 'استخراج إقامات المستثمرين والمديرين الأجانب وتجديدها، استيفاء الموافقات الأمنية للشركاء غير المصريين والأنشطة المقيدة، وتوثيق التوكيلات.',
          en: 'Securing investor and executive residencies, work permits, statutory security clearances for foreign partners, and embassy legalizations.',
        },
      },
      {
        id: 'corporate-amendments',
        title: { ar: 'التعديلات القانونية والجمعيات العمومية', en: 'Corporate Amendments & General Assemblies' },
        description: {
          ar: 'زيادة أو تخفيض رأس المال، دخول وخروج الشركاء، تعديل الغرض أو المقر، فتح فروع جديدة، واعتماد محاضر الجمعيات العمومية لدى هيئة الاستثمار.',
          en: 'Capital increases/reductions, share transfers, adding branches, object amendments, and GAFI general assembly ratifications.',
        },
      },
      {
        id: 'activity-building-licenses',
        title: { ar: 'تراخيص الأنشطة والمباني والتعامل مع الهيئات', en: 'Activity & Building Permits & Authority Liaison' },
        description: {
          ar: 'استخراج التراخيص التشغيلية من التنمية الصناعية والمجتمعات العمرانية والجهات القطاعية ومتابعة التفتيشات والتجديدات.',
          en: 'Obtaining operating and building licenses from IDA, NUCA, and sector ministries with full regulatory representation.',
        },
      },
    ],
    deliverables: [
      { ar: 'عقد تأسيس ونظام أساسي محكم وموثق', en: 'Notarized Articles of Association & Bylaws' },
      { ar: 'السجل التجاري والبطاقة الضريبية وملف التأمينات', en: 'Commercial Register, Tax Card & Social Insurance File' },
      { ar: 'تأشيرات وإقامات المستثمرين والموافقات الأمنية الصادرة', en: 'Issued Investor Residencies & Security Approvals' },
    ],
    assignedSpecialists: ['legal', 'research'],
    estimatedTimeline: { ar: '3 إلى 7 أيام عمل للتأسيس الأساسي', en: '3–7 business days for core incorporation' },
    jurisdictionNote: { ar: 'قانون الشركات رقم 159 · قانون الاستثمار رقم 72 · هيئة الاستثمار (GAFI)', en: 'Companies Law 159 · Investment Law 72 · GAFI' },
  },
  {
    id: 'contracts-ma',
    slug: 'contracts-ma',
    indexNumber: '02',
    discipline: 'legal',
    secondaryDisciplines: ['accounting', 'research'],
    title: {
      ar: 'العقود والاستحواذ والاندماج',
      en: 'Contracts, Mergers & Acquisitions',
    },
    shortTagline: {
      ar: 'صياغة العقود التجارية والفيديك والعقارية · اتفاقيات الشراكة · صفقات الدمج والاستحواذ',
      en: 'Commercial, FIDIC & Real Estate Contracts · Shareholder Agreements · M&A Transactions',
    },
    summary: {
      ar: 'صياغة ومراجعة محكمة لكافة العقود التجارية والإنشائية والعقارية والإدارية، وإدارة صفقات الاستحواذ والاندماج والفحص القانوني النافي للجهالة.',
      en: 'Precision legal drafting for commercial, FIDIC construction, real estate, and administrative contracts alongside full-cycle M&A execution and legal due diligence.',
    },
    detailedExplanation: {
      ar: 'العقد هو خط الدفاع الأول عن أموال الشركة وحقوق المساهمين. يباشر محامو CD Consulting صياغة ومراجعة عقود المقاولات والفيديك، عقود نقل الملكية العقارية وتسليم الميراث، العقود الإدارية الحكومية، واتفاقيات الشركاء والمساهمين، كما نقود صفقات الاستحواذ والاندماج بدءاً من مذكرات التفاهم والفحص النافي للجهالة وحتى توقيع عقود نقل الحصص وموافقات جهاز حماية المنافسة.',
      en: 'Contracts are the primary shield protecting corporate equity and project margins. Our attorneys draft and negotiate FIDIC and local construction contracts, real estate title transfers, administrative procurement agreements, family estate deeds, and Shareholder Agreements—while leading M&A transactions from LOI and due diligence through closing.',
    },
    image: legalContractsImg,
    imageAlt: {
      ar: 'صياغة العقود القانونية وعقود الفيديك والاستحواذ والاندماج',
      en: 'Legal contract binders, FIDIC agreements, and transaction documents',
    },
    subScopes: [
      {
        id: 'commercial-shareholder',
        title: { ar: 'العقود التجارية واتفاقيات الشراكة والمساهمين', en: 'Commercial & Shareholder Agreements' },
        description: {
          ar: 'صياغة عقود التوزيع، الوكالة التجارية، الشراكات الاستراتيجية، شروط عدم المنافسة، وحقوق التصويت والتخارج بين الشركاء.',
          en: 'Distribution, agency, joint-venture, non-compete, drag/tag-along, and founder exit governance contracts.',
        },
      },
      {
        id: 'fidic-construction-realestate',
        title: { ar: 'عقود المقاولات والفيديك ونقل الملكية العقارية', en: 'FIDIC, Construction & Real Estate Title Transfers' },
        description: {
          ar: 'إعداد الشروط الخاصة لعقود الفيديك، عقود التطوير العقاري، فحص تسلسل الملكية، والشهر العقاري وعقود قسمة الميراث.',
          en: 'FIDIC Red/Yellow/Silver Particular Conditions, construction subcontracts, chain-of-title checks, and notary registration.',
        },
      },
      {
        id: 'ma-due-diligence',
        title: { ar: 'صفقات الاستحواذ والاندماج والفحص النافي للجهالة', en: 'M&A Execution & Legal Due Diligence' },
        description: {
          ar: 'تقييم المخاطر القضائية والتعاقدية للشركة المستهدفة، صياغة عقود شراء الأسهم والحصص (SPA)، وإخطارات جهاز حماية المنافسة.',
          en: 'Comprehensive legal due diligence, Share Purchase Agreements (SPAs), escrow mechanics, and ECA competition filings.',
        },
      },
      {
        id: 'administrative-family',
        title: { ar: 'العقود الإدارية وقانون الأسرة والوصايا', en: 'Administrative Contracts, Family Law & Estates' },
        description: {
          ar: 'مراجعة مناقصات وعقود التوريد الحكومية، إلى جانب صياغة عقود الزواج، تسويات الطلاق، الوصايا، وتوزيع التركات.',
          en: 'Public tender & procurement contracts plus confidential family status deeds, settlements, wills, and estate partition.',
        },
      },
    ],
    deliverables: [
      { ar: 'عقود ثنائية اللغة محكمة البنود ومحمية ضد الثغرات', en: 'Bilingual Ironclad Contracts & Addenda' },
      { ar: 'تقرير فحص قانوني ومالي نافي للجهالة (DD Report)', en: 'Legal & Financial Due Diligence Report' },
      { ar: 'ملف إغلاق الصفقة ونقل الملكية أمام هيئة الاستثمار', en: 'Transaction Closing & Ownership Transfer Pack' },
    ],
    assignedSpecialists: ['legal', 'accounting', 'research'],
    estimatedTimeline: { ar: '3 إلى 10 أيام للعقود · 4 إلى 8 أسابيع للصفقات', en: '3–10 days for contracts · 4–8 weeks for M&A' },
    jurisdictionNote: { ar: 'القانون المدني والتجاري المصري · معايير FIDIC · حماية المنافسة', en: 'Egyptian Civil & Commercial Law · FIDIC · ECA' },
  },
  {
    id: 'restructuring-financials',
    slug: 'restructuring-financials',
    indexNumber: '03',
    discipline: 'accounting',
    secondaryDisciplines: ['legal'],
    title: {
      ar: 'إعادة الهيكلة والقوائم المالية',
      en: 'Corporate Restructuring & Financial Statements',
    },
    shortTagline: {
      ar: 'إعادة الهيكلة القانونية والمالية · حوكمة الشركات · إعداد القوائم المالية المعتمدة',
      en: 'Legal & Financial Turnaround · Corporate Governance · Certified Financial Statements',
    },
    summary: {
      ar: 'إعادة هيكلة الشركات إدارياً وقانونياً ومالياً لتحسين الأداء والربحية، بالتوازي مع إعداد القوائم المالية الدورية والسنوية المعتمدة وفق المعايير المصرية والدولية.',
      en: 'Comprehensive legal, operational, and financial restructuring to restore profitability alongside certified financial statement preparation under EAS and IFRS.',
    },
    detailedExplanation: {
      ar: 'عندما تتوسع الشركة أو تواجه ضغوطاً تشغيلية ومالية، يصبح إعادة ترتيب البيت الداخلي ضرورة حتمية. يتكامل المحامون والمحاسبون في CD Consulting لإعادة بناء الهيكل القانوني والإداري، وتحديث لوائح الحوكمة ومصفوفة الصلاحيات، وإعادة جدولة الالتزامات، مع إصدار قوائم مالية وميزانيات دقيقة معتمدة تفتح أبواب التمويل البنكي والاستثماري.',
      en: 'Scaling or turning around an enterprise requires legal clarity backed by transparent numbers. Our lawyers and CPAs collaborate to reorganize corporate hierarchies, draft governance charters, restructure balance-sheet obligations, and produce audit-ready financial statements trusted by banks and institutional investors.',
    },
    image: maBoardroomImg,
    imageAlt: {
      ar: 'قاعة استراتيجية لإعادة هيكلة الشركات ومراجعة القوائم المالية',
      en: 'Executive restructuring boardroom with financial valuation volumes',
    },
    subScopes: [
      {
        id: 'corporate-turnaround',
        title: { ar: 'إعادة الهيكلة القانونية والتشغيلية للشركات', en: 'Legal & Operational Corporate Restructuring' },
        description: {
          ar: 'فصل أو دمج الأنشطة، تحويل الشكل القانوني للشركة، إعادة توزيع الحصص والديون، وتصحيح المسار الإداري.',
          en: 'Spin-offs, entity conversions, equity/debt reorganization, and management turnaround architecture.',
        },
      },
      {
        id: 'financial-statements-prep',
        title: { ar: 'إعداد القوائم المالية والميزانيات العمومية', en: 'Statutory Financial Statements & Balance Sheets' },
        description: {
          ar: 'إعداد قائمة المركز المالي، قائمة الدخل، التدفقات النقدية، والإيضاحات المتممة وفق معايير المحاسبة المصرية (EAS) و IFRS.',
          en: 'Preparing balance sheets, income statements, cash flows, and disclosure notes under EAS and IFRS.',
        },
      },
      {
        id: 'governance-internal-bylaws',
        title: { ar: 'حوكمة الشركات واللوائح الداخلية والصلاحيات', en: 'Corporate Governance & Internal Bylaws' },
        description: {
          ar: 'صياغة لوائح مجلس الإدارة، مصفوفة الصلاحيات المالية والتوقيعات البنكية، وضبط الامتثال الرقابي.',
          en: 'Board charters, financial delegation matrices, banking signatory rules, and statutory compliance audits.',
        },
      },
    ],
    deliverables: [
      { ar: 'حزمة قوائم مالية معتمدة باللغتين (EAS / IFRS)', en: 'Bilingual Certified Financial Statement Package' },
      { ar: 'خطة إعادة هيكلة قانونية ومالية قابلة للتنفيذ', en: 'Actionable Legal & Financial Restructuring Blueprint' },
      { ar: 'ميثاق حوكمة ومصفوفة صلاحيات داخلية', en: 'Corporate Governance & Authority Matrix' },
    ],
    assignedSpecialists: ['accounting', 'legal'],
    estimatedTimeline: { ar: '5 إلى 15 يوم عمل للقوائم · 4 إلى 10 أسابيع للهيكلة', en: '5–15 days for statements · 4–10 weeks for restructuring' },
    jurisdictionNote: { ar: 'معايير المحاسبة المصرية (EAS) · المعايير الدولية (IFRS) · حوكمة الشركات', en: 'Egyptian Accounting Standards (EAS) · IFRS' },
  },
  {
    id: 'feasibility-tax',
    slug: 'feasibility-tax',
    indexNumber: '04',
    discipline: 'accounting',
    secondaryDisciplines: ['research', 'legal'],
    title: {
      ar: 'دراسات الجدوى والاستشارات الضريبية',
      en: 'Feasibility Studies & Tax Advisory',
    },
    shortTagline: {
      ar: 'دراسات الجدوى القانونية والاقتصادية · التخطيط الضريبي · القيمة المضافة ولجان الطعن',
      en: 'Legal & Economic Feasibility · Tax Structuring · VAT & Tax Dispute Defense',
    },
    summary: {
      ar: 'إعداد دراسات جدوى متكاملة (قانونية، تنظيمية، ومالية) للمشروعات الجديدة، وتقديم الاستشارات الضريبية الشاملة والإقرارات والدفاع أمام لجان الطعن الضريبي.',
      en: 'Comprehensive legal, regulatory, and financial feasibility studies for new ventures alongside strategic corporate tax planning, filings, and tax dispute defense.',
    },
    detailedExplanation: {
      ar: 'الاستثمار الناجح يبدأ برؤية تشريعية وضريبية واضحة قبل ضخ رأس المال. نعد في CD Consulting دراسات جدوى تفحص الجدوى القانونية والتراخيص اللازمة والعائد المالي المتوقع، كما يتولى خبراؤنا الضريبيون ومحامو الضرائب إدارة الإقرارات الدورية (دخل، قيمة مضافة، خصم وتحصيل)، الفحص الضريبي، والتمثيل القانوني في الطعون والمنازعات الضريبية.',
      en: 'Every capital deployment demands clarity on permits, tax exposure, and return horizons. CD Consulting prepares multi-dimensional feasibility studies covering licensing roadmaps and cash-flow modeling, while our tax attorneys and accountants manage VAT and corporate tax filings, tax inspections, and appeals before tax dispute committees.',
    },
    image: financialResearchImg,
    imageAlt: {
      ar: 'تحليل دراسات الجدوى والاستشارات الضريبية والمالية',
      en: 'Feasibility analytics and corporate tax advisory workspace',
    },
    subScopes: [
      {
        id: 'feasibility-studies',
        title: { ar: 'دراسات الجدوى الاقتصادية والقانونية والتنظيمية', en: 'Economic, Legal & Regulatory Feasibility Studies' },
        description: {
          ar: 'تحديد التكاليف التأسيسية والتشغيلية، دراسة السوق والمنافسين، وحصر كافة التراخيص والحوافز الاستثمارية القانونية.',
          en: 'Capex/Opex modeling, market sizing, statutory licensing checklists, and Investment Law tax-incentive mapping.',
        },
      },
      {
        id: 'tax-compliance-planning',
        title: { ar: 'التخطيط الضريبي وإدارة الإقرارات الدورية', en: 'Tax Structuring & Periodic Return Filings' },
        description: {
          ar: 'تقديم الإقرارات الضريبية السنوية، ضريبة القيمة المضافة (VAT)، ضريبة كسب العمل، والالتزام بمنظومة الفاتورة الإلكترونية.',
          en: 'Annual corporate tax returns, monthly VAT compliance, payroll tax withholding, and e-invoicing governance.',
        },
      },
      {
        id: 'tax-disputes-committees',
        title: { ar: 'الفحص الضريبي والتمثيل أمام لجان الطعن', en: 'Tax Inspections & Dispute Defense' },
        description: {
          ar: 'تجهيز ملفات الفحص المأموري، تقديم الطعون في التقديرات الجزافية، وحضور اللجان الداخلية ولجان الطعن الضريبي.',
          en: 'Managing tax audits, filing statutory objections, and representing clients before internal and appeal committees.',
        },
      },
    ],
    deliverables: [
      { ar: 'دراسة جدوى معتمدة للبنوك والمستثمرين', en: 'Bankable & Investor-Ready Feasibility Study' },
      { ar: 'مصفوفة التزام ضريبي وتقويم إقرارات سنوي', en: 'Annual Tax Compliance & Filing Calendar' },
      { ar: 'مذكرات دفاع قانونية أمام مصلحة الضرائب', en: 'Legal Defense Briefs for Tax Disputes' },
    ],
    assignedSpecialists: ['accounting', 'research', 'legal'],
    estimatedTimeline: { ar: '2 إلى 4 أسابيع لدراسات الجدوى · متابعة ضريبية شهرية', en: '2–4 weeks for studies · Continuous tax advisory' },
    jurisdictionNote: { ar: 'قانون الإجراءات الضريبية الموحد · قانون الضريبة على الدخل والقيمة المضافة', en: 'Unified Tax Procedures Law · Income Tax & VAT Law' },
  },
  {
    id: 'disputes-debt',
    slug: 'disputes-debt',
    indexNumber: '05',
    discipline: 'legal',
    secondaryDisciplines: ['accounting'],
    title: {
      ar: 'فض المنازعات وإدارة الديون ومخاطر الائتمان',
      en: 'Dispute Resolution, Debt Management & Credit Risk',
    },
    shortTagline: {
      ar: 'التقاضي والتحكيم التجاري · تحصيل الديون والتسويات · الحماية من مخاطر الائتمان',
      en: 'Litigation & Commercial Arbitration · Debt Recovery · Credit Risk Legal Audits',
    },
    summary: {
      ar: 'التمثيل القضائي والتحكيمي في المنازعات التجارية والمدنية، إدارة ملفات تحصيل الديون المتعثرة والتسويات الودية، ووضع ضوابط قانونية للحد من مخاطر الائتمان.',
      en: 'Dedicated representation in commercial litigation and arbitration, structured recovery of distressed corporate receivables, and legal safeguards against credit defaults.',
    },
    detailedExplanation: {
      ar: 'تتطلب المنازعات التجارية وتحصيل المديونيات سرعة حسم وحماية استباقية لأصول الشركة. يباشر محامو CD Consulting الترافع أمام المحاكم الاقتصادية والمدنية وهيئات التحكيم التجاري (CRCICA)، إلى جانب إدارة مفاوضات التسوية وجدولة الديون، وتحصيل الشيكات والأوراق التجارية، وفحص الجدارة القانونية والائتمانية للعملاء والموردين قبل منح التسهيلات.',
      en: 'Protecting cash flow requires decisive legal enforcement and proactive credit structuring. CD Consulting litigators represent clients before Egyptian Economic Courts and commercial arbitration tribunals (CRCICA), execute amicable debt workouts and commercial-paper enforcement, and conduct legal credit-risk vetting prior to extending trade credit.',
    },
    image: disputeCourtImg,
    imageAlt: {
      ar: 'قاعة التحكيم والمرافعات القانونية وفض المنازعات التجارية',
      en: 'Commercial litigation and arbitration chamber',
    },
    subScopes: [
      {
        id: 'litigation-arbitration',
        title: { ar: 'التقاضي أمام المحاكم الاقتصادية والتحكيم التجاري', en: 'Economic Courts Litigation & Arbitration' },
        description: {
          ar: 'إدارة الدعاوى التجارية والعمالية والإنشائية، وتنفيذ الأحكام وأحكام التحكيم المحلية والدولية.',
          en: 'Representing corporate claimants and defendants in Economic Courts, construction DABs, and CRCICA arbitration.',
        },
      },
      {
        id: 'debt-recovery-settlements',
        title: { ar: 'إدارة الديون وتحصيل المستحقات والتسويات الودية', en: 'Debt Recovery & Structured Settlements' },
        description: {
          ar: 'الإنذارات القانونية، قضايا الشيكات وسندات الأمر، تحرير عقود التسوية وجدولة المديونيات بضمانات عينية.',
          en: 'Formal legal notices, check & promissory note enforcement, and collateralized settlement agreements.',
        },
      },
      {
        id: 'credit-risk-prevention',
        title: { ar: 'إدارة مخاطر الائتمان والضمانات التعاقدية', en: 'Credit Risk Legal Audits & Collateral Structuring' },
        description: {
          ar: 'فحص السجل القضائي والائتماني للأطراف المتعاقدة، وصياغة ضمانات الرهن والكفالات قبل البيع الآجل.',
          en: 'Counterparty litigation screening, personal/corporate guarantees, and secured-credit contract clauses.',
        },
      },
    ],
    deliverables: [
      { ar: 'استراتيجية تقاضي أو تحكيم ومذكرات مرافعة', en: 'Litigation Strategy & Court Pleadings' },
      { ar: 'اتفاقيات تسوية وجدولة ديون موثقة وقابلة للتنفيذ', en: 'Enforceable Debt Settlement & Collateral Deeds' },
      { ar: 'سياسة ائتمان قانونية ومصفوفة ضمانات للشركة', en: 'Corporate Credit Risk Policy & Guarantee Templates' },
    ],
    assignedSpecialists: ['legal', 'accounting'],
    estimatedTimeline: { ar: 'تدخل قانوني فوري خلال 24–48 ساعة للإنذارات والحجوزات', en: '24–48h immediate action on notices & attachments' },
    jurisdictionNote: { ar: 'المحاكم الاقتصادية المصرية · مركز القاهرة للتحكيم (CRCICA)', en: 'Egyptian Economic Courts · CRCICA Arbitration' },
  },
  {
    id: 'trademarks-ip',
    slug: 'trademarks-ip',
    indexNumber: '06',
    discipline: 'legal',
    secondaryDisciplines: ['research'],
    title: {
      ar: 'تسجيل العلامات التجارية وحماية الملكية',
      en: 'Trademark Registration & Intellectual Property Protection',
    },
    shortTagline: {
      ar: 'فحص التشابه وتسجيل العلامات · حماية حقوق المؤلف والبرمجيات · التصدي للتقليد',
      en: 'Clearance & Registration · Copyright & Software IP · Anti-Infringement Enforcement',
    },
    summary: {
      ar: 'فحص قانوني مسبق وتسجيل العلامات والأسماء التجارية محلياً ودولياً، حماية حقوق الملكية الفكرية والنماذج الصناعية، والتصدي القانوني لحالات التقليد والتعدي.',
      en: 'Pre-filing clearance searches, domestic and WIPO Madrid trademark registration, industrial design and copyright protection, and legal enforcement against infringement.',
    },
    detailedExplanation: {
      ar: 'العلامة التجارية هي الأصل غير الملموس الأعلى قيمة في شركتك. يتولى فريق الملكية الفكرية في CD Consulting إجراء الفحص الشامل للتأكد من عدم تشابه العلامة مع علامات مسجلة، وإيداع الطلبات لدى جهاز تنمية التجارة الداخلية ومكتب العلامات التجارية، وتقديم المعارضات والتظلمات، وصياغة عقود الامتياز التجاري (الفرنشايز) وترخيص استخدام البرمجيات.',
      en: 'Your brand identity is an irreplaceable corporate asset. CD Consulting’s IP lawyers execute similarity clearance searches, prosecute registrations before the Egyptian Trademark Office and WIPO Madrid System, file oppositions against copycats, draft franchise and software licensing agreements, and litigate trademark infringement.',
    },
    image: trademarkIpImg,
    imageAlt: {
      ar: 'شهادة تسجيل علامة تجارية بختم توثيق رسمي لحماية الملكية الفكرية',
      en: 'Embossed trademark registration certificate with notary seal',
    },
    subScopes: [
      {
        id: 'trademark-filing',
        title: { ar: 'فحص التشابه وتسجيل العلامات التجارية محلياً ودولياً', en: 'Trademark Clearance & Registration (Egypt & WIPO)' },
        description: {
          ar: 'البحث في فئات نيس الـ 45، إيداع طلب التسجيل، متابعة الفحص الفني والنشر، واستلام الشهادة النهائية وتجديدها.',
          en: 'Nice classification searches, official filing, examination responses, gazette publication, and 10-year renewals.',
        },
      },
      {
        id: 'copyright-designs',
        title: { ar: 'حماية حقوق المؤلف والبرمجيات والنماذج الصناعية', en: 'Copyright, Software & Industrial Designs' },
        description: {
          ar: 'توثيق ملكية الأكواد البرمجية، التصاميم المعمارية، المحتوى الإبداعي، والرسوم والنماذج الصناعية.',
          en: 'Legal registration of software code, architectural designs, creative works, and industrial patterns.',
        },
      },
      {
        id: 'ip-enforcement-franchise',
        title: { ar: 'المعارضات القضائية وعقود الفرنشايز والترخيص', en: 'Oppositions, Infringement Defense & Franchise Agreements' },
        description: {
          ar: 'رفع دعاوى التقليد والمنافسة غير المشروعة، وصياغة عقود الامتياز التجاري (Franchise) وحماية الأسرار التجارية.',
          en: 'Anti-counterfeiting lawsuits, unfair competition claims, NDA protection, and commercial franchise contracts.',
        },
      },
    ],
    deliverables: [
      { ar: 'تقرير فحص قانوني لتوافر العلامة قبل الإيداع', en: 'Pre-Filing Trademark Registrability Opinion' },
      { ar: 'إيصال إيداع فوري وشهادة تسجيل علامة معتمدة', en: 'Filing Receipt & Certified Registration Deed' },
      { ar: 'عقود حماية سرية (NDA) وترخيص علامة أو فرنشايز', en: 'NDA, Licensing & Franchise Agreements' },
    ],
    assignedSpecialists: ['legal', 'research'],
    estimatedTimeline: { ar: 'إيداع وحماية فورية خلال 48 ساعة من استلام التفويض', en: '48h official filing turnaround upon Power of Attorney' },
    jurisdictionNote: { ar: 'قانون حماية حقوق الملكية الفكرية رقم 82 · اتفاقية مدريد (WIPO)', en: 'Egyptian IP Law 82 · WIPO Madrid Protocol' },
  },
];

export const CREATORS: CreatorProfile[] = [
  {
    id: 'creator-1',
    name: { ar: 'المستشار كريم الدسوقي', en: 'Counsel Karim El-Desouky' },
    role: { ar: 'الشريك المؤسس ورئيس قطاع المحاماة والعقود', en: 'Founding Partner & Head of Legal Practice' },
    division: 'legal',
    divisionLabel: { ar: 'قيادة المحاماة والتقاضي · CD Consulting', en: 'Legal & Litigation Lead · CD Consulting' },
    experienceYears: '16+',
    initials: 'KD',
    bio: {
      ar: 'محامٍ بالنقض والدستورية العليا ومتخصص في تأسيس الشركات، عقود الفيديك والمقاولات، صفقات الاستحواذ والاندماج، والتحكيم التجاري.',
      en: 'Senior corporate litigator specializing in company formation, FIDIC construction contracts, M&A transactions, and commercial arbitration.',
    },
    specialties: [
      { ar: 'تأسيس الشركات والعقود', en: 'Formation & Contracts' },
      { ar: 'الاستحواذ والاندماج', en: 'Mergers & Acquisitions' },
      { ar: 'فض المنازعات والتحكيم', en: 'Disputes & Arbitration' },
    ],
  },
  {
    id: 'creator-2',
    name: { ar: 'أ. سلمى المنشاوي', en: 'Salma El-Menshawy, CPA' },
    role: { ar: 'الشريك المؤسس ورئيس قطاع المحاسبة والضرائب', en: 'Founding Partner & Head of Accounting & Tax' },
    division: 'accounting',
    divisionLabel: { ar: 'القيادة المالية والضريبية · CD Consulting', en: 'Accounting & Tax Lead · CD Consulting' },
    experienceYears: '14+',
    initials: 'SM',
    bio: {
      ar: 'محاسب قانوني معتمد تقود فرق إعداد القوائم المالية، إعادة هيكلة الشركات، دراسات الجدوى المالية، والاستشارات والطعون الضريبية.',
      en: 'Certified Public Accountant directing statutory financial statements, turnaround restructuring, feasibility modeling, and corporate tax defense.',
    },
    specialties: [
      { ar: 'إعادة الهيكلة والقوائم المالية', en: 'Restructuring & Statements' },
      { ar: 'دراسات الجدوى والضرائب', en: 'Feasibility & Tax' },
      { ar: 'تقييم مخاطر الائتمان', en: 'Credit Risk Advisory' },
    ],
  },
  {
    id: 'creator-3',
    name: { ar: 'د. طارق عبد الحليم', en: 'Dr. Tarek Abdelhalim' },
    role: { ar: 'الشريك المؤسس ورئيس قطاع الأبحاث والتراخيص', en: 'Founding Partner & Head of Regulatory Research' },
    division: 'research',
    divisionLabel: { ar: 'الهيئات والملكية الفكرية · CD Consulting', en: 'Authorities & IP Lead · CD Consulting' },
    experienceYears: '15+',
    initials: 'TA',
    bio: {
      ar: 'يقود التعامل المباشر مع هيئة الاستثمار والجهات الحكومية في ملفات إقامات الأجانب، الموافقات الأمنية، وفحص وتسجيل العلامات التجارية.',
      en: 'Directs GAFI and government authority filings for foreigner residencies, statutory security clearances, and trademark protection.',
    },
    specialties: [
      { ar: 'إقامات الأجانب والموافقات الأمنية', en: 'Residencies & Clearances' },
      { ar: 'العلامات التجارية والملكية', en: 'Trademarks & IP' },
      { ar: 'التراخيص والهيئات', en: 'Licensing & Authorities' },
    ],
  },
  {
    id: 'creator-4',
    name: { ar: 'المستشارة نورهان الشاذلي', en: 'Counsel Nourhan El-Shazly' },
    role: { ar: 'مدير إدارة المنازعات التجارية والائتمان', en: 'Director of Commercial Disputes & Credit Enforcement' },
    division: 'legal',
    divisionLabel: { ar: 'المحاكم الاقتصادية والديون · CD Consulting', en: 'Economic Courts & Debt Recovery' },
    experienceYears: '12+',
    initials: 'NS',
    bio: {
      ar: 'متخصصة في المرافعات أمام المحاكم الاقتصادية، تحصيل الديون التجارية، هيكلة الضمانات الائتمانية، ومنازعات العقود والملكية.',
      en: 'Leads Economic Court litigation, commercial receivable recovery, secured credit structuring, and contract dispute resolution.',
    },
    specialties: [
      { ar: 'فض المنازعات الاقتصادية', en: 'Economic Court Disputes' },
      { ar: 'إدارة الديون والائتمان', en: 'Debt & Credit Risk' },
      { ar: 'التسويات والتقاضي', en: 'Settlements & Litigation' },
    ],
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    slug: 'choosing-company-type-egypt',
    category: { ar: 'تأسيس الشركات', en: 'Company Formation' },
    readTime: { ar: '5 دقائق قراءة', en: '5 min read' },
    publishedDate: { ar: 'نوفمبر 2026', en: 'November 2026' },
    title: {
      ar: 'كيف تختار الشكل القانوني الأنسب لشركتك في مصر؟ (ذات مسؤولية محدودة أم شخص واحد أم مساهمة)',
      en: 'Choosing the Right Corporate Entity in Egypt: LLC vs. One-Person Company vs. JSC',
    },
    excerpt: {
      ar: 'دليل قانوني عملي يوضح الفروق الجوهرية في المسؤولية القانونية، الحد الأدنى لرأس المال، ضرائب الشركاء، وسهولة دخول مستثمرين جدد.',
      en: 'A practical legal breakdown comparing founder liability, capital thresholds, governance rules, and investor readiness across Egyptian corporate structures.',
    },
    image: corporateLicensingImg,
    imageAlt: {
      ar: 'وثائق ومقارنة أنواع الشركات في القانون المصري',
      en: 'Corporate incorporation blueprints and legal structures',
    },
    relatedServiceSlug: 'company-formation',
    sections: [
      {
        heading: { ar: '1. شركة الشخص الواحد (OPC)', en: '1. One-Person Company (OPC)' },
        body: {
          ar: 'مناسبة لرواد الأعمال والمؤسسين المنفردين الراغبين في فصل ذمتهم المالية الشخصية عن ذمة المشروع بحيث تقتصر المسؤولية على رأس المال المعلن، مع سهولة تحويلها لاحقاً إلى ذات مسؤولية محدودة عند دخول شركاء.',
          en: 'Ideal for solo founders seeking limited liability separation between personal assets and business exposure, with straightforward conversion into an LLC when adding partners.',
        },
      },
      {
        id: 'sec-2',
        heading: { ar: '2. الشركة ذات المسؤولية المحدودة (LLC)', en: '2. Limited Liability Company (LLC)' },
        body: {
          ar: 'الخيار الأكثر شيوعاً للشركات التجارية والخدمية والتقنية من شريكين فأكثر حتى 50 شريكاً؛ لا تشترط حداً أدنى مرتفعاً لرأس المال عند التأسيس وتمنح مرونة عالية في إدارة المديرين وصلاحيات الجمعية العمومية.',
          en: 'The standard vehicle for 2 to 50 partners across commercial, tech, and service sectors—featuring flexible manager powers and no high statutory minimum capital.',
        },
      } as { heading: LocalizedText; body: LocalizedText },
      {
        heading: { ar: '3. شركة المساهمة المصرية (JSC)', en: '3. Joint Stock Company (JSC)' },
        body: {
          ar: 'الأنسب للمشروعات الكبرى، الكيانات الصناعية والتمويلية، والشركات التي تستهدف جذب صناديق استثمار أو الطرح مستقبلاً، حيث تخضع لحوكمة مجلس إدارة ومراقب حسابات وتداول أسهم منظم.',
          en: 'Designed for capital-intensive ventures, industrial groups, and startups raising institutional rounds, governed by a board of directors and structured share transfers.',
        },
      },
    ],
  },
  {
    id: 'blog-2',
    slug: 'protecting-commercial-contracts-fidic',
    category: { ar: 'العقود والاستحواذ', en: 'Contracts & M&A' },
    readTime: { ar: '6 دقائق قراءة', en: '6 min read' },
    publishedDate: { ar: 'نوفمبر 2026', en: 'November 2026' },
    title: {
      ar: '7 بنود قانونية تحمي شركتك في العقود التجارية وعقود المقاولات والفيديك',
      en: '7 Critical Legal Clauses Every Commercial & FIDIC Contract Needs',
    },
    excerpt: {
      ar: 'لماذا تؤدي النماذج الجاهزة إلى خسائر التقاضي؟ تعرّف على البنود الحاسمة الخاصة بالتوازن المالي، القوة القاهرة، التحكيم، وضمانات التنفيذ.',
      en: 'Why generic templates fail in court—and how price-adjustment, force majeure, arbitration, and limitation-of-liability clauses protect your margins.',
    },
    image: legalContractsImg,
    imageAlt: {
      ar: 'عقود الفيديك ومذكرات الصياغة القانونية',
      en: 'FIDIC and commercial contract binders',
    },
    relatedServiceSlug: 'contracts-ma',
    sections: [
      {
        heading: { ar: 'تحديد نطاق العمل وآليات أوامر التغيير', en: 'Defining Scope & Variation Orders' },
        body: {
          ar: 'الغموض في مواصفات التسليم يفتح الباب لمطالبات مالية مفتوحة. يجب ربط كل تعديل فني أو إضافي بإجراء كتابي معتمد وتعديل مقابل في المدة الزمنية والقيمة.',
          en: 'Ambiguous deliverables trigger unpriced scope creep. Every technical change must tie directly to written variation approval, timeline extension, and fee adjustment.',
        },
      },
      {
        heading: { ar: 'بند الاختصاص القضائي والتحكيم التجاري', en: 'Governing Law & Dispute Forum' },
        body: {
          ar: 'تحديد المحكمة الاقتصادية المختصة أو اللجوء إلى التحكيم (مثل مركز القاهرة الإقليمي للتحكيم) يختصر سنوات من النزاع الإجرائي ويضمن سرية الخلافات التجارية.',
          en: 'Explicitly designating Economic Courts or institutional arbitration (such as CRCICA) prevents jurisdictional delays and keeps commercial disputes confidential.',
        },
      },
    ],
  },
  {
    id: 'blog-3',
    slug: 'trademark-registration-guide-egypt',
    category: { ar: 'الملكية الفكرية', en: 'Trademarks & IP' },
    readTime: { ar: '4 دقائق قراءة', en: '4 min read' },
    publishedDate: { ar: 'أكتوبر 2026', en: 'October 2026' },
    title: {
      ar: 'خطوات تسجيل العلامة التجارية في مصر وحمايتها من التقليد قبل إطلاق مشروعك',
      en: 'How to Register & Defend Your Trademark in Egypt Before Launch',
    },
    excerpt: {
      ar: 'متى تبدأ فحص التشابه؟ وما الفرق بين الحماية داخل فئة واحدة أو عدة فئات دولية؟ كل ما يحتاجه صاحب الشركة لحماية اسمه التجاري.',
      en: 'When to run clearance searches, selecting the right Nice classes, and enforcing exclusive brand rights under Egyptian IP Law No. 82.',
    },
    image: trademarkIpImg,
    imageAlt: {
      ar: 'وثيقة تسجيل العلامة التجارية والختم القانوني',
      en: 'Trademark registration deed and notary seal',
    },
    relatedServiceSlug: 'trademarks-ip',
    sections: [
      {
        heading: { ar: 'الفحص الفني المسبق قبل الترويج', en: 'Clearance Search Before Branding Spend' },
        body: {
          ar: 'الخطأ الأكثر كلفة هو طباعة الهوية البصرية وإطلاق الحملات التسويقية قبل التأكد من خلو العلامة من التشابه اللفظي أو البصري في الفئة المطلوبة بمكتب العلامات التجارية.',
          en: 'Launching marketing campaigns prior to a trademark clearance search risks forced rebranding and infringement liability.',
        },
      },
      {
        heading: { ar: 'أولوية الإيداع والحماية القانونية', en: 'Filing Priority & Statutory Protection' },
        body: {
          ar: 'بمجرد تقديم طلب الإيداع واستلام الرقم الرسمي، يثبت لك تاريخ الأسبقية القانونية لمدة عشر سنوات قابلة للتجديد، مع أحقية الاعتراض على أي علامة مشابهة.',
          en: 'Official filing establishes statutory priority across a renewable 10-year term and empowers formal oppositions against infringing applications.',
        },
      },
    ],
  },
  {
    id: 'blog-4',
    slug: 'debt-management-credit-risk-egypt',
    category: { ar: 'فض المنازعات والائتمان', en: 'Disputes & Credit Risk' },
    readTime: { ar: '5 دقائق قراءة', en: '5 min read' },
    publishedDate: { ar: 'أكتوبر 2026', en: 'October 2026' },
    title: {
      ar: 'كيف تحمي شركتك من مخاطر الائتمان والديون المتعثرة عبر الضمانات القانونية؟',
      en: 'Safeguarding Corporate Cash Flow Against Credit Risk & Defaults',
    },
    excerpt: {
      ar: 'دليل الإدارة القانونية للمديونيات التجارية، الفحص المسبق للعملاء، وإجراءات التسوية السريعة وتحريك المطالبات أمام المحاكم الاقتصادية.',
      en: 'Practical legal tools for counterparty vetting, collateralized credit terms, check enforcement, and structured commercial debt recovery.',
    },
    image: disputeCourtImg,
    imageAlt: {
      ar: 'استشارات إدارة الديون وفض المنازعات',
      en: 'Commercial disputes and credit risk legal chamber',
    },
    relatedServiceSlug: 'disputes-debt',
    sections: [
      {
        heading: { ar: 'الوقاية القانونية قبل منح الائتمان', en: 'Pre-Credit Legal Vetting' },
        body: {
          ar: 'مراجعة السجل التجاري الحديث وصلاحيات التوقيع والوضع القضائي للعميل قبل توقيع عقود التوريد الآجل يمنع 70% من حالات التعثر المقصود.',
          en: 'Verifying up-to-date Commercial Registry extracts, signatory powers, and litigation exposure before extending credit prevents most commercial defaults.',
        },
      },
      {
        heading: { ar: 'التسويات الموثقة مقابل التقاضي الطويل', en: 'Collateralized Workouts vs. Prolonged Suits' },
        body: {
          ar: 'عند ظهور بوادر تعثر، الجمع بين الإنذار القانوني الصارم وعرض جدولة مضمون بسندات تنفيذية أو رهون يحقق أعلى نسبة تحصيل بأقل تكلفة.',
          en: 'Combining decisive legal notices with notarized repayment schedules backed by enforceable instruments maximizes recovery rates.',
        },
      },
    ],
  },
];

export const OFFICE_INFO = {
  address: {
    ar: 'القاهرة — منطقة الأعمال المركزية، بجوار الهيئة العامة للاستثمار (GAFI)، جمهورية مصر العربية',
    en: 'Cairo — Central Business District, adjacent to GAFI Investment Complex, Egypt',
  },
  phone: '+20 100 000 0000',
  email: 'counsel@cdconsulting-eg.com',
  hours: {
    ar: 'الأحد إلى الخميس: 9:00 صباحاً – 5:30 مساءً',
    en: 'Sunday – Thursday: 9:00 AM – 5:30 PM',
  },
};

export interface SocialLinkItem {
  id: 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'twitter';
  name: LocalizedText;
  handle: string;
  url: string;
}

// حدّث روابط السوشيال ميديا الرسمية للشركة هنا بسهولة في مكان واحد
export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'facebook',
    name: { ar: 'فيسبوك', en: 'Facebook' },
    handle: '@CDConsultingEG',
    url: 'https://www.facebook.com/',
  },
  {
    id: 'instagram',
    name: { ar: 'إنستغرام', en: 'Instagram' },
    handle: '@cdconsulting.eg',
    url: 'https://www.instagram.com/',
  },
  {
    id: 'tiktok',
    name: { ar: 'تيك توك', en: 'TikTok' },
    handle: '@cdconsulting.eg',
    url: 'https://www.tiktok.com/',
  },
  {
    id: 'youtube',
    name: { ar: 'يوتيوب', en: 'YouTube' },
    handle: 'CD Consulting',
    url: 'https://www.youtube.com/',
  },
  {
    id: 'twitter',
    name: { ar: 'تويتر / X', en: 'Twitter / X' },
    handle: '@CDConsultingEG',
    url: 'https://x.com/',
  },
];

export const UI_COPY = {
  brandShort: 'CD Consulting',
  brandTagline: {
    ar: 'مؤسسة CD Consulting للمحاماة والاستشارات القانونية والمحاسبية',
    en: 'CD Consulting — Law Firm & Corporate Advisory',
  },
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'من نحن', en: 'About Us' },
    services: { ar: 'الخدمات', en: 'Services' },
    blog: { ar: 'المدونة القانونية', en: 'Legal Insights' },
    contact: { ar: 'تواصل معنا', en: 'Contact Us' },
    requestCta: { ar: 'احجز استشارة', en: 'Book Consultation' },
  },
  hero: {
    kicker: {
      ar: 'محاماة · تأسيس شركات · استشارات مالية وضريبية — القاهرة، مصر',
      en: 'Law Firm · Corporate Formation · Tax & Financial Advisory — Cairo, Egypt',
    },
    headline: {
      ar: 'مكتب CD Consulting للمحاماة وحلول الأعمال المتكاملة.',
      en: 'CD Consulting: Precision Legal Counsel & Corporate Advisory.',
    },
    subheadline: {
      ar: 'نرتكز على خبرة قانونية متخصصة في المحاماة وتأسيس الشركات وإقامات الأجانب، صياغة العقود والاستحواذ، إعادة الهيكلة والقوائم المالية، دراسات الجدوى والضرائب، فض المنازعات وإدارة الديون، وحماية العلامات التجارية.',
      en: 'Anchored in dedicated legal advocacy, we unify company formation & foreigner residencies, M&A contracts, restructuring & financial statements, feasibility & tax advisory, dispute & debt resolution, and trademark protection.',
    },
    primaryCta: { ar: 'احجز استشارة قانونية الآن', en: 'Book Legal Consultation' },
    secondaryCta: { ar: 'استكشف خدماتنا القانونية', en: 'Explore Legal Services' },
  },
  pillars: {
    heading: { ar: 'منظومة المحاماة والخبرة متعددة التخصصات', en: 'Multidisciplinary Legal & Corporate Divisions' },
    subheading: {
      ar: 'فريقنا القانوني يقود كل ملف بالتكامل مع المحاسبين والباحثين التنظيميين لحماية استثمارك.',
      en: 'Our attorneys lead every mandate in lockstep with certified accountants and regulatory researchers.',
    },
    requestRoleBtn: { ar: 'اطلب هذا التخصص', en: 'Request Specialist' },
  },
  homeServices: {
    heading: { ar: 'خدماتنا القانونية والمالية الأساسية', en: 'Core Legal & Corporate Practice Areas' },
    subheading: {
      ar: 'ست قطاعات استشارية متكاملة تغطي دورة حياة الشركة منذ التأسيس والحماية وحتى التوسع وفض المنازعات.',
      en: 'Six specialized practice divisions covering the entire corporate lifecycle from incorporation and IP protection to restructuring and dispute resolution.',
    },
    viewAll: { ar: 'تصفح جميع الخدمات (6)', en: 'Browse All 6 Services' },
    inspectService: { ar: 'تفاصيل الخدمة القانونية', en: 'Explore Service Scope' },
  },
  aboutPage: {
    pageTitle: { ar: 'من نحن — الرؤية والرسالة والقيادة القانونية', en: 'About Us — Vision, Mission & Legal Leadership' },
    pageIntro: {
      ar: 'تأسست مؤسسة CD Consulting لتكون الشريك القانوني والمالي الموثوق للشركات والمستثمرين في مصر، حيث نجمع بين قوة التمثيل القانوني ودقة المحاسبة المعتمدة وسرعة الإنجاز أمام الجهات الحكومية.',
      en: 'CD Consulting serves enterprises and investors in Egypt as a unified legal and financial partner—combining rigorous courtroom and transactional advocacy with certified accounting and regulatory execution.',
    },
    visionTitle: { ar: 'رؤيتنا (Vision)', en: 'Our Vision' },
    visionBody: {
      ar: 'أن نكون الخيار القانوني والاستشاري الأول للمستثمرين والشركات في مصر والمنطقة من خلال حلول تحمي الحقوق، تمنع المخاطر، وتدعم التوسع الآمن.',
      en: 'To serve as the premier legal and corporate advisory firm for businesses and investors in Egypt and the region—delivering clarity that safeguards rights and accelerates growth.',
    },
    missionTitle: { ar: 'رسالتنا (Mission)', en: 'Our Mission' },
    missionBody: {
      ar: 'تقديم خدمات المحاماة، تأسيس الشركات، العقود، إعادة الهيكلة، الاستشارات الضريبية، فض المنازعات، وحماية العلامات التجارية تحت مظلة واحدة بأعلى معايير السرية والانضباط.',
      en: 'To provide integrated corporate law, formation, contracts, restructuring, tax advisory, dispute resolution, and IP protection under one accountable roof.',
    },
    pillarsTitle: { ar: 'لماذا يختار الموكلون CD Consulting؟', en: 'Why Clients Choose CD Consulting' },
    principles: [
      {
        num: '01',
        title: { ar: 'تخصص قانوني عميق في المحاماة', en: 'Deep Legal & Courtroom Expertise' },
        desc: {
          ar: 'محامون متخصصون في قانون الشركات، العقود، الفيديك، المحاكم الاقتصادية، والتحكيم التجاري.',
          en: 'Attorneys specialized in corporate law, FIDIC & commercial contracts, Economic Courts, and arbitration.',
        },
      },
      {
        num: '02',
        title: { ar: 'سرعة التأسيس والتعامل مع الهيئات', en: 'Direct GAFI & Authority Execution' },
        desc: {
          ar: 'إلمام إجرائي كامل بمتطلبات هيئة الاستثمار، التراخيص، إقامات الأجانب، والموافقات الأمنية في مصر.',
          en: 'Hands-on mastery of GAFI, licensing ministries, foreigner residencies, and security clearance workflows.',
        },
      },
      {
        num: '03',
        title: { ar: 'تكامل القانون مع المحاسبة والضرائب', en: 'Law + Accounting & Tax Alignment' },
        desc: {
          ar: 'توافق كامل بين الصياغة القانونية للعقود وبين الموقف الضريبي والقوائم المالية وإدارة الائتمان.',
          en: 'Seamless alignment between legal contract terms, statutory financial statements, tax posture, and credit risk.',
        },
      },
      {
        num: '04',
        title: { ar: 'شفافية الأتعاب والمواعيد', en: 'Transparent Milestones & Scope' },
        desc: {
          ar: 'خطة عمل ومستندات واضحة وجدول تسليم محدد منذ الاستشارة الأولى دون أي مصاريف خفية.',
          en: 'Clear deliverables, document checklists, and fixed timelines communicated from the initial consultation.',
        },
      },
    ],
    teamHeading: { ar: 'الشركاء المؤسسون والمستشارون القانونيون', en: 'Founding Partners & Legal Leadership' },
    divisionsHeading: { ar: 'اطلب محامياً أو محاسباً أو باحثاً', en: 'Commission Legal, Tax or Research Specialists' },
    yearsLabel: { ar: 'سنة خبرة', en: 'Years Exp.' },
    consultBtn: { ar: 'احجز استشارة مع هذا القطاع', en: 'Consult This Division' },
  },
  servicesPage: {
    pageTitle: { ar: 'دليل الخدمات القانونية والاستشارية', en: 'Legal & Corporate Services Directory' },
    pageIntro: {
      ar: 'ست منظومات خدمات رئيسية مصممة لخدمة الشركات والمستثمرين في مصر، بدءاً من التأسيس والإقامات والعقود وحتى القوائم المالية وحماية العلامات التجارية.',
      en: 'Six comprehensive legal and corporate advisory practices built for companies and investors in Egypt—from formation and contracts to financial statements and IP protection.',
    },
    subScopesCount: { ar: 'نطاقات قانونية', en: 'legal scopes' },
    exploreBtn: { ar: 'عرض التفاصيل القانونية الكاملة', en: 'View Full Legal Scope' },
    requestThisBtn: { ar: 'اطلب الخدمة', en: 'Request Service' },
  },
  serviceDetail: {
    backToServices: { ar: 'العودة إلى دليل الخدمات', en: 'Back to All Services' },
    scopeHeading: { ar: 'التفاصيل القانونية والتنفيذية داخل هذه الخدمة', en: 'Detailed Legal & Advisory Scopes' },
    deliverablesHeading: { ar: 'المخرجات والوثائق القانونية المسلمة', en: 'Key Legal Deliverables' },
    specialistsHeading: { ar: 'فريق التنفيذ المختص', en: 'Assigned Legal & Advisory Teams' },
    timelineLabel: { ar: 'المدة التقديرية للتنفيذ', en: 'Estimated Timeline' },
    jurisdictionLabel: { ar: 'المرجعية القانونية والتشريعية', en: 'Statutory Framework' },
    ctaHeading: { ar: 'هل ترغب في بدء إجراءات هذه الخدمة لشركتك؟', en: 'Ready to initiate this legal mandate?' },
    ctaBtn: { ar: 'احجز استشارة لهذه الخدمة', en: 'Book Consultation for This Service' },
  },
  blogPage: {
    pageTitle: { ar: 'المدونة القانونية وأدلة الأعمال', en: 'Legal Insights & Corporate Guides' },
    pageIntro: {
      ar: 'مقالات وشروحات قانونية عملية لرواد الأعمال والمستثمرين حول تأسيس الشركات في مصر، صياغة العقود، حماية العلامات التجارية، وإدارة الديون.',
      en: 'Practical Egyptian legal and business guides for founders and investors covering company formation, contract protection, trademarks, and credit risk.',
    },
    readMore: { ar: 'اقرأ المقال كاملاً', en: 'Read Full Guide' },
    backToBlog: { ar: 'العودة إلى المدونة القانونية', en: 'Back to Legal Insights' },
  },
  contactPage: {
    pageTitle: { ar: 'تواصل معنا', en: 'Contact CD Consulting' },
    pageIntro: {
      ar: 'تواصل مباشرة مع مكتبنا الرئيسي في القاهرة أو احجز موعداً للاستشارة القانونية والمحاسبية مع أحد شركائنا.',
      en: 'Connect directly with our Cairo headquarters or schedule a legal and corporate advisory consultation with our partners.',
    },
    addressLabel: { ar: 'مقر المكتب الرئيسي', en: 'Headquarters Address' },
    phoneLabel: { ar: 'الهاتف والواتساب المباشر', en: 'Direct Phone & WhatsApp' },
    emailLabel: { ar: 'البريد الإلكتروني الرسمي', en: 'Official Email' },
    hoursLabel: { ar: 'ساعات العمل الرسمية', en: 'Working Hours' },
  },
  requestPage: {
    pageTitle: { ar: 'احجز استشارة أو اطلب خدمة قانونية', en: 'Book a Consultation or Request Service' },
    pageIntro: {
      ar: 'اختر الخدمة المطلوبة أو حدد التخصص الذي تحتاجه (محامٍ · محاسب · باحث)، وسيتواصل معك المستشار المختص لتحديد خطة التنفيذ والمستندات.',
      en: 'Select any of our six services or commission a dedicated lawyer, accountant, or researcher for your legal and corporate mandate.',
    },
    modeService: { ar: 'طلب خدمة محددة', en: 'Request Specific Service' },
    modeSpecialist: { ar: 'طلب خبير (محامي / محاسب / باحث)', en: 'Request Specialist Talent' },
    labels: {
      clientName: { ar: 'الاسم الكامل', en: 'Full Name' },
      organization: { ar: 'اسم الشركة أو المشروع (اختياري)', en: 'Company / Venture Name (Optional)' },
      phone: { ar: 'رقم الهاتف / واتساب', en: 'Phone / WhatsApp Number' },
      email: { ar: 'البريد الإلكتروني', en: 'Email Address' },
      selectService: { ar: 'اختر الخدمة المطلوبة', en: 'Select Primary Service' },
      selectSubScopes: { ar: 'حدد البنود التفصيلية داخل الخدمة', en: 'Select Specific Sub-Scopes' },
      selectSpecialist: { ar: 'اختر التخصص المطلوب', en: 'Select Required Specialist' },
      integratedTeam: { ar: 'فريق متكامل (محامي + محاسب + باحث)', en: 'Integrated Team (Lawyer + Accountant + Researcher)' },
      urgency: { ar: 'أولوية الاستشارة', en: 'Consultation Priority' },
      urgencyStandard: { ar: 'قياسي (خلال 2–3 أيام عمل)', en: 'Standard (Within 2–3 business days)' },
      urgencyPriority: { ar: 'أولوية متقدمة (خلال 24–48 ساعة)', en: 'Priority (Within 24–48 hours)' },
      urgencyUrgent: { ar: 'عاجل (تواصل قانوني في نفس اليوم)', en: 'Urgent (Same-day legal callback)' },
      notes: { ar: 'ملخص الموضوع القانوني أو الاستشارة', en: 'Brief Description of Your Legal / Business Matter' },
      submit: { ar: 'تأكيد وإرسال طلب الاستشارة', en: 'Submit Consultation Request' },
    },
    validation: {
      nameRequired: { ar: 'يرجى إدخال الاسم الكامل', en: 'Please enter your full name' },
      phoneRequired: { ar: 'يرجى إدخال رقم هاتف صحيح', en: 'Please enter a valid phone number' },
      emailInvalid: { ar: 'يرجى إدخال بريد إلكتروني صحيح', en: 'Please enter a valid email address' },
      notesRequired: { ar: 'يرجى كتابة نبذة مختصرة عن الاستشارة المطلوبة', en: 'Please summarize your consultation request' },
    },
    successTitle: { ar: 'تم تسجيل طلب الاستشارة بنجاح', en: 'Consultation Request Registered' },
    successDesc: {
      ar: 'تم توجيه ملفك إلى المستشار القانوني المختص في CD Consulting. احتفظ برقم المرجع أدناه.',
      en: 'Your request has been routed to the lead counsel at CD Consulting. Keep your reference number below.',
    },
    refLabel: { ar: 'رقم المرجع', en: 'Reference ID' },
    newRequestBtn: { ar: 'تقديم طلب استشارة جديد', en: 'Submit Another Request' },
    recentHeading: { ar: 'الطلبات المسجلة في هذه الجلسة', en: 'Requests Submitted in This Session' },
  },
  footer: {
    rights: {
      ar: '© 2026 CD Consulting للمحاماة والاستشارات القانونية والمحاسبية. جميع الحقوق محفوظة.',
      en: '© 2026 CD Consulting — Law Firm & Corporate Advisory. All rights reserved.',
    },
    tagline: {
      ar: 'المحاماة · تأسيس الشركات · العقود والاستحواذ · الضرائب وحماية الملكية — القاهرة، مصر',
      en: 'Corporate Law · Formation · Contracts & M&A · Tax & IP Protection — Cairo, Egypt',
    },
  },
} as const;
