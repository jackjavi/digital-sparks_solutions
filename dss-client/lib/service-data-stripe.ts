import { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string; // Store icon name as string for serialization
  downloadLink: string;
  features: string[];
  color: string;
  gradient: string;
  price_id: string;
  quantity: number;
  imageUrl: string;
  detailedContent: {
    overview: string;
    benefits: string[];
    whatYouGet: string[];
    whoIsThisFor: string[];
    process: {
      step: number;
      title: string;
      description: string;
    }[];
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "study-in-uk-education-guidance",
    title: "Study in the UK – Education Guidance",
    shortDescription:
      "Achieve your academic dreams in the UK with personalized university selection, application support, and scholarship guidance.",
    description:
      "Make your UK study dreams a reality with expert guidance through every step of your educational journey. From selecting the perfect university to securing funding and completing applications, we provide comprehensive support to ensure your success.",
    icon: "GraduationCap",
    downloadLink:
      "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/The_Human_Guide_to_Moving_to_the_UK_as_an_International_Student_lsrpv0.odt",
    features: [
      "University Selection",
      "Application Support",
      "Scholarship Guidance",
      "Visa Assistance",
    ],
    color: "from-violet-500 to-purple-600",
    gradient: "bg-linear-to-br from-violet-500/10 to-purple-600/10",
    price_id: "price_1SQvilBcFFRNjrpbGw8DfMbk",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    detailedContent: {
      overview:
        "Studying in the UK opens doors to world-class education, global career opportunities, and life-changing experiences. However, navigating the complex application process, understanding entry requirements, and securing funding can be overwhelming. Our Study in the UK - Education Guidance service provides personalized support to help you make informed decisions and successfully secure your place at your dream UK university.",
      benefits: [
        "Expert guidance on selecting the right university and course for your career goals",
        "Increased chances of acceptance with professionally crafted applications",
        "Access to scholarship and funding opportunities you might not find alone",
        "Save time and reduce stress with streamlined application processes",
        "Avoid costly mistakes in university selection and applications",
        "Student visa guidance to ensure smooth entry into the UK",
        "Ongoing support from application through to arrival in the UK",
      ],
      whatYouGet: [
        "Personalized university and course selection consultation",
        "Academic profile assessment and course suitability analysis",
        "Entry requirements breakdown for your chosen programs",
        "Personal statement writing guidance and review (3 revisions)",
        "Application form completion support for up to 5 universities",
        "Scholarship search and application assistance",
        "Reference letter guidance and templates",
        "Student visa application guidance and document checklist",
        "Interview preparation (for courses that require it)",
        "Accommodation search guidance and tips",
        "Pre-departure orientation covering UK student life",
        "Six one-on-one consultations (60 minutes each)",
        "Email support throughout your application journey",
      ],
      whoIsThisFor: [
        "International students planning to study in the UK",
        "High school graduates seeking undergraduate programs",
        "Professionals pursuing postgraduate degrees (Masters, PhD)",
        "Students looking to transfer to UK universities",
        "Parents wanting expert guidance for their children's education",
        "Anyone confused by UK university application requirements",
      ],
      process: [
        {
          step: 1,
          title: "Goal Setting & Assessment",
          description:
            "We discuss your academic background, career aspirations, budget, and preferences to understand your unique needs and goals for studying in the UK.",
        },
        {
          step: 2,
          title: "University & Course Selection",
          description:
            "Receive a personalized shortlist of universities and courses that match your profile, career goals, and budget, with detailed information about each option.",
        },
        {
          step: 3,
          title: "Application Preparation",
          description:
            "Craft compelling personal statements, gather required documents, and prepare strong applications that showcase your potential and stand out to admissions officers.",
        },
        {
          step: 4,
          title: "Funding & Scholarship Applications",
          description:
            "Identify scholarship opportunities and funding options, then prepare competitive applications to maximize your chances of financial support.",
        },
        {
          step: 5,
          title: "Submission & Visa Support",
          description:
            "Submit your applications with confidence, track responses, and receive guidance on accepting offers and completing your student visa application for a smooth transition to UK student life.",
        },
      ],
    },
  },

  {
    slug: "cv-tailoring-uk-jobs",
    title: "CV Tailoring for UK Jobs",
    shortDescription:
      "Stand out in the UK job market with professionally tailored CVs that highlight your skills and experience effectively.",
    description:
      "Navigate the competitive UK job market with confidence. Our expert CV tailoring service ensures your application passes ATS systems and impresses hiring managers.",
    icon: "FileText",
    downloadLink:
      "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/How_to_Find_UK_Companies_That_Can_Sponsor_Skilled_Workers_dzhzsb.odt",
    features: [
      "UK-Specific Formatting",
      "ATS Optimization",
      "Professional Review",
      "Cover Letter Writing",
    ],
    color: "from-purple-500 to-pink-600",
    gradient: "bg-linear-to-br from-purple-500/10 to-pink-600/10",
    price_id: "price_1SQe9XBcFFRNjrpbNeV4rJSV",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    detailedContent: {
      overview:
        "Landing your dream job in the UK requires more than just experience—it requires a CV that speaks the language of UK recruiters and passes through Applicant Tracking Systems (ATS). Our specialized CV tailoring service combines UK market expertise with proven strategies to position you as the ideal candidate.",
      benefits: [
        "Increased interview callbacks by up to 300%",
        "ATS-optimized formatting ensures your CV gets seen",
        "UK-compliant structure and terminology",
        "Professional presentation that showcases your unique value",
        "Targeted content that matches job requirements",
        "Expert guidance on what UK employers look for",
        "Stand out from hundreds of other applicants",
      ],
      whatYouGet: [
        "Comprehensive CV review and rewrite in UK format",
        "ATS optimization to pass automated screening systems",
        "Customized cover letter template",
        "LinkedIn profile optimization guide",
        "Industry-specific keyword integration",
        "Achievement-focused content highlighting measurable results",
        "Two rounds of revisions to perfect your CV",
        "One-on-one consultation (30 minutes) to discuss your career goals",
        "Lifetime access to CV templates and formatting guides",
      ],
      whoIsThisFor: [
        "International professionals relocating to the UK",
        "UK residents seeking career advancement",
        "Recent graduates entering the UK job market",
        "Career changers pivoting to new industries",
        "Professionals returning to work after a career break",
        "Anyone struggling to get interview callbacks",
      ],
      process: [
        {
          step: 1,
          title: "Initial Consultation",
          description:
            "We discuss your career goals, target roles, and review your current CV to identify areas for improvement and develop a tailored strategy.",
        },
        {
          step: 2,
          title: "Information Gathering",
          description:
            "You'll complete a detailed questionnaire about your experience, achievements, and career objectives. We may follow up with clarifying questions.",
        },
        {
          step: 3,
          title: "CV Transformation",
          description:
            "Our expert writers craft a compelling, UK-formatted CV that highlights your strengths and is optimized for both ATS systems and human recruiters.",
        },
        {
          step: 4,
          title: "Review & Refinement",
          description:
            "You receive your first draft for review. We incorporate your feedback and make revisions to ensure you're completely satisfied.",
        },
        {
          step: 5,
          title: "Final Delivery",
          description:
            "Receive your polished CV in multiple formats (Word, PDF), plus cover letter template and LinkedIn optimization guide. You're ready to apply with confidence!",
        },
      ],
    },
  },
  {
    slug: "social-media-management-website-development",
    title: "Social Media Management & Website Development",
    shortDescription:
      "Build your online presence with expert social media strategies and stunning, functional websites tailored to your brand.",
    description:
      "Transform your digital presence with our comprehensive social media management and website development services. We create cohesive brand experiences that engage your audience and drive business growth.",
    icon: "Globe",
    downloadLink:
      "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/Win_Clients_Land_Contracts_-The_Human_Blueprint_for_Your_UK_Care_Agency_byrosw.odt",
    features: [
      "Social Media Strategy",
      "Content Creation",
      "Website Design & Development",
      "Brand Consistency",
    ],
    color: "from-cyan-500 to-blue-600",
    gradient: "bg-linear-to-br from-cyan-500/10 to-blue-600/10",
    price_id: "price_1SQbl5BcFFRNjrpb9IaNB8Kw",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    detailedContent: {
      overview:
        "In today's digital-first world, your online presence is your business card, storefront, and reputation all rolled into one. Our Social Media Management & Website Development service provides a holistic approach to building and maintaining a powerful digital brand that resonates with your target audience and drives measurable results.",
      benefits: [
        "Increased brand visibility and recognition across multiple platforms",
        "Professional, conversion-optimized website that showcases your brand",
        "Consistent brand messaging across all digital touchpoints",
        "Data-driven social media strategies that engage and grow your audience",
        "Responsive design that works flawlessly on all devices",
        "SEO-optimized content that improves search rankings",
        "Time savings by outsourcing your digital management to experts",
      ],
      whatYouGet: [
        "Custom website design and development tailored to your brand",
        "Social media account setup and optimization (up to 3 platforms)",
        "Monthly content calendar with 20+ posts per platform",
        "Professional graphics and visual content creation",
        "Community management and engagement monitoring",
        "Monthly analytics reports with actionable insights",
        "Website hosting and maintenance for 12 months",
        "Basic SEO optimization and Google My Business setup",
      ],
      whoIsThisFor: [
        "Small business owners looking to establish their digital presence",
        "Entrepreneurs launching new ventures",
        "Established businesses needing a digital transformation",
        "Service providers wanting to attract more clients online",
        "Retail businesses expanding into e-commerce",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Strategy",
          description:
            "We start with an in-depth consultation to understand your brand, goals, target audience, and competitive landscape. We'll develop a comprehensive digital strategy tailored to your business.",
        },
        {
          step: 2,
          title: "Design & Development",
          description:
            "Our team creates stunning website designs and begins development while simultaneously setting up and optimizing your social media profiles for maximum impact.",
        },
        {
          step: 3,
          title: "Content Creation",
          description:
            "We develop engaging content calendars, create professional graphics, and prepare compelling copy that speaks directly to your target audience.",
        },
        {
          step: 4,
          title: "Launch & Optimization",
          description:
            "After rigorous testing, we launch your website and social media campaigns. We continuously monitor performance and optimize for better results.",
        },
        {
          step: 5,
          title: "Ongoing Management",
          description:
            "We provide ongoing management, updates, and improvements based on analytics and user feedback to ensure continued growth and success.",
        },
      ],
    },
  },
  {
    slug: "business-startup-growth-support",
    title: "Business Start-Up & Growth Support",
    shortDescription:
      "Launch and scale your business with comprehensive guidance, from business planning to growth strategies.",
    description:
      "Turn your business idea into reality with our comprehensive start-up and growth support program. From initial planning to scaling strategies, we guide you every step of the way.",
    icon: "TrendingUp",
    downloadLink:
      "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/Win_Clients_Land_Contracts_-The_Human_Blueprint_for_Your_UK_Care_Agency_byrosw.odt",
    features: [
      "Business Planning",
      "Market Research",
      "Financial Planning",
      "Growth Strategies",
    ],
    color: "from-green-500 to-emerald-600",
    gradient: "bg-linear-to-br from-green-500/10 to-emerald-600/10",
    price_id: "price_1SQeC8BcFFRNjrpb6smNUPBD",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    detailedContent: {
      overview:
        "Starting and growing a business in the UK doesn't have to be overwhelming. Our Business Start-Up & Growth Support program provides you with the expertise, tools, and guidance needed to build a sustainable and profitable business. Whether you're at the idea stage or ready to scale, we're here to help you succeed.",
      benefits: [
        "Avoid costly mistakes with expert guidance from day one",
        "Accelerate your path to profitability with proven strategies",
        "Access to UK-specific business resources and networks",
        "Comprehensive business plan that attracts investors",
        "Data-driven decision making with market research insights",
        "Financial planning that ensures sustainable growth",
        "Ongoing support as your business evolves",
      ],
      whatYouGet: [
        "Complete business plan development (30-40 pages)",
        "Market research and competitive analysis report",
        "Financial projections and cash flow modeling (3-year forecast)",
        "Legal structure and registration guidance",
        "Brand identity development and positioning strategy",
        "Marketing plan with customer acquisition strategies",
        "Operational procedures and systems setup",
        "Six monthly strategy sessions (90 minutes each)",
        "Email and phone support for 12 months",
        "Access to business templates, tools, and resources library",
      ],
      whoIsThisFor: [
        "Aspiring entrepreneurs with a business idea",
        "New business owners in their first year of operation",
        "Small businesses ready to scale and grow",
        "International entrepreneurs establishing UK businesses",
        "Side hustlers transitioning to full-time entrepreneurship",
        "Business owners seeking structure and strategic direction",
      ],
      process: [
        {
          step: 1,
          title: "Vision & Validation",
          description:
            "We explore your business idea, validate market demand, and refine your unique value proposition through comprehensive market research.",
        },
        {
          step: 2,
          title: "Business Planning",
          description:
            "Develop a detailed business plan covering your business model, target market, marketing strategy, operations, and financial projections.",
        },
        {
          step: 3,
          title: "Foundation Building",
          description:
            "Establish your legal structure, register your business, set up financial systems, and create your brand identity.",
        },
        {
          step: 4,
          title: "Launch Preparation",
          description:
            "Finalize your product/service offering, develop your go-to-market strategy, and prepare all necessary operational systems.",
        },
        {
          step: 5,
          title: "Growth & Scaling",
          description:
            "Implement growth strategies, optimize operations, and scale your business sustainably with ongoing strategic support and guidance.",
        },
      ],
    },
  },
  {
    slug: "cleaning-business-coaching",
    title: "Cleaning Business Coaching",
    shortDescription:
      "Start and grow a profitable cleaning business with specialized coaching and industry-specific insights.",
    description:
      "Break into the lucrative cleaning industry with expert coaching tailored specifically for cleaning business owners. Learn the secrets to building a profitable, scalable cleaning company.",
    icon: "Sparkles",
    downloadLink:
      "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/Scale_Your_Cleaning_Business_in_the_UK_-_A_Real_Human_Blueprint_t5bwfp.odt",
    features: [
      "Business Setup",
      "Client Acquisition",
      "Operations Management",
      "Pricing Strategies",
    ],
    color: "from-yellow-500 to-orange-600",
    gradient: "bg-linear-to-br from-yellow-500/10 to-orange-600/10",
    price_id: "price_1SQeExBcFFRNjrpblMLI3YtF",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    detailedContent: {
      overview:
        "The UK cleaning industry is worth billions and continues to grow year after year. Our specialized Cleaning Business Coaching program gives you insider knowledge and proven systems to build a profitable cleaning business from scratch or take your existing operation to the next level. No prior experience needed—just determination and drive.",
      benefits: [
        "Tap into a recession-proof industry with consistent demand",
        "Low start-up costs compared to other businesses",
        "Flexible working hours and work-life balance",
        "Scalable business model—grow at your own pace",
        "Multiple revenue streams (residential, commercial, specialized)",
        "Build a business that runs without you (systematized operations)",
        "Generate passive income through team expansion",
      ],
      whatYouGet: [
        "Complete cleaning business start-up blueprint",
        "Pricing calculator and profitability modeling tools",
        "Client acquisition system with proven marketing templates",
        "Operations manual with checklists and SOPs",
        "Staff recruitment and training programs",
        "Equipment and supply sourcing guide with supplier list",
        "Insurance and legal compliance checklist",
        "Client contracts and service agreements templates",
        "12 weekly group coaching calls (60 minutes each)",
        "Private community access with other cleaning business owners",
        "Lifetime access to course materials and updates",
      ],
      whoIsThisFor: [
        "Individuals looking to start a cleaning business with minimal investment",
        "Existing cleaning business owners wanting to scale",
        "People seeking a recession-proof business opportunity",
        "Stay-at-home parents wanting flexible income",
        "Anyone wanting to build a systematic, scalable service business",
        "Immigrants and entrepreneurs seeking UK business opportunities",
      ],
      process: [
        {
          step: 1,
          title: "Business Foundation",
          description:
            "Set up your cleaning business legally, choose your niche (residential, commercial, or specialized), and establish your brand identity.",
        },
        {
          step: 2,
          title: "Systems & Operations",
          description:
            "Develop operational systems, create service packages, establish pricing strategies, and set up quality control processes.",
        },
        {
          step: 3,
          title: "Client Acquisition",
          description:
            "Implement proven marketing strategies to attract your first clients, from local advertising to digital marketing and networking.",
        },
        {
          step: 4,
          title: "Service Delivery",
          description:
            "Master efficient cleaning techniques, manage client relationships, handle feedback, and ensure consistent quality service delivery.",
        },
        {
          step: 5,
          title: "Growth & Team Building",
          description:
            "Scale your business by hiring and training staff, automating operations, expanding services, and building a business that generates income without your direct involvement.",
        },
      ],
    },
  },
  {
    slug: "healthcare-consultancy",
    title: "Healthcare Consultancy",
    shortDescription:
      "Navigate the UK healthcare sector with expert advice for professionals and healthcare businesses.",
    description:
      "Whether you're a healthcare professional or running a healthcare business, our consultancy provides specialized guidance for navigating the complex UK healthcare landscape.",
    icon: "HeartPulse",
    downloadLink:
      "https://res.cloudinary.com/popit/raw/upload/v1762831152/DSS-EBOOKS/Start_Your_Care_Agency_in_the_UK_hkilur.odt",
    features: [
      "Career Guidance",
      "Registration Support",
      "Compliance Advice",
      "Professional Development",
    ],
    color: "from-red-500 to-rose-600",
    gradient: "bg-linear-to-br from-red-500/10 to-rose-600/10",
    price_id: "price_1SQeGpBcFFRNjrpbRxAqZv7D",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    detailedContent: {
      overview:
        "The UK healthcare sector offers incredible opportunities for qualified professionals and entrepreneurs, but navigating registration requirements, compliance regulations, and career pathways can be overwhelming. Our Healthcare Consultancy provides expert guidance to help you successfully establish your healthcare career or business in the UK.",
      benefits: [
        "Fast-track your healthcare career or business setup",
        "Avoid costly mistakes and regulatory pitfalls",
        "Expert guidance through complex registration processes",
        "Stay compliant with ever-changing healthcare regulations",
        "Access to industry connections and opportunities",
        "Maximize your earning potential with strategic career planning",
        "Peace of mind knowing you're following best practices",
      ],
      whatYouGet: [
        "Personalized career pathway consultation for healthcare professionals",
        "Professional registration guidance (NMC, GMC, HCPC, CQC, etc.)",
        "Compliance audit and regulatory guidance",
        "Business setup support for healthcare ventures",
        "CV and application review for NHS and private sector roles",
        "Interview preparation and coaching",
        "Continuing Professional Development (CPD) planning",
        "Networking opportunities with healthcare industry professionals",
        "Six one-on-one consultations (60 minutes each)",
        "Document review and application support",
        "Three months of follow-up email support",
      ],
      whoIsThisFor: [
        "International healthcare professionals relocating to the UK",
        "UK healthcare workers seeking career advancement",
        "Entrepreneurs starting healthcare businesses (care homes, clinics, etc.)",
        "Healthcare professionals navigating registration processes",
        "Nurses, doctors, therapists, and allied health professionals",
        "Anyone looking to transition into the UK healthcare sector",
      ],
      process: [
        {
          step: 1,
          title: "Initial Assessment",
          description:
            "We review your qualifications, experience, and career goals to create a customized roadmap for your healthcare journey in the UK.",
        },
        {
          step: 2,
          title: "Registration Planning",
          description:
            "Guide you through the specific registration requirements for your profession, including documentation, examinations, and timelines.",
        },
        {
          step: 3,
          title: "Application Support",
          description:
            "Assist with completing applications, preparing required documents, and ensuring everything meets regulatory standards.",
        },
        {
          step: 4,
          title: "Career Development",
          description:
            "Develop your professional profile, optimize your CV, prepare for interviews, and identify the best opportunities for your skills.",
        },
        {
          step: 5,
          title: "Ongoing Support",
          description:
            "Provide continued guidance as you navigate your career, including CPD planning, career progression advice, and regulatory compliance updates.",
        },
      ],
    },
  },
  {
    slug: "immigration-self-sponsorship-guidance",
    title: "Immigration & Self-Sponsorship Guidance",
    shortDescription:
      "Get expert support navigating UK immigration processes and self-sponsorship visa routes.",
    description:
      "Simplify your UK immigration journey with expert guidance on visa applications, self-sponsorship routes, and compliance requirements. Make your UK dreams a reality.",
    icon: "Plane",
    downloadLink:
      "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/The_Human_Guide_to_Moving_to_the_UK_as_an_International_Student_lsrpv0.odt",
    features: [
      "Visa Guidance",
      "Document Preparation",
      "Self-Sponsorship Routes",
      "Application Support",
    ],
    color: "from-indigo-500 to-blue-600",
    gradient: "bg-linear-to-br from-indigo-500/10 to-blue-600/10",
    price_id: "price_1SQeKbBcFFRNjrpbGOQzELJu",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    detailedContent: {
      overview:
        "Navigating UK immigration law can feel like an impossible maze, especially when it comes to self-sponsorship visa routes. Our Immigration & Self-Sponsorship Guidance service demystifies the process, providing you with expert support to successfully obtain your UK visa and build your life in Britain. We specialize in helping entrepreneurs and skilled professionals achieve their UK immigration goals.",
      benefits: [
        "Avoid costly application mistakes and rejections",
        "Understand complex immigration rules in plain English",
        "Maximize your chances of visa approval",
        "Save time with streamlined application processes",
        "Access self-sponsorship routes many people don't know about",
        "Stay compliant with Home Office requirements",
        "Expert guidance from start to settlement",
      ],
      whatYouGet: [
        "Comprehensive eligibility assessment for multiple visa routes",
        "Detailed self-sponsorship setup guidance (Skilled Worker, Innovator Founder)",
        "Company formation and sponsorship license application support",
        "Document checklist and preparation assistance",
        "Application form review and guidance",
        "Financial requirement calculations and planning",
        "Compliance monitoring and reporting guidance",
        "Interview preparation (if required)",
        "Four one-on-one consultations (90 minutes each)",
        "Email support throughout your application process",
        "Post-approval settlement pathway planning",
      ],
      whoIsThisFor: [
        "Entrepreneurs wanting to start a UK business and self-sponsor",
        "Skilled professionals seeking UK work opportunities",
        "International students transitioning to work visas",
        "Business owners expanding operations to the UK",
        "Individuals seeking alternative routes to UK residency",
        "Anyone confused by UK immigration requirements",
      ],
      process: [
        {
          step: 1,
          title: "Eligibility Assessment",
          description:
            "We review your circumstances, qualifications, and goals to identify the best visa route for your situation, including self-sponsorship options.",
        },
        {
          step: 2,
          title: "Strategy Development",
          description:
            "Create a detailed immigration strategy, including timelines, document requirements, and financial planning to meet all visa criteria.",
        },
        {
          step: 3,
          title: "Business & Sponsorship Setup",
          description:
            "For self-sponsorship routes, we guide you through company formation, sponsorship license application, and compliance setup.",
        },
        {
          step: 4,
          title: "Application Preparation",
          description:
            "Compile all required documents, complete application forms, and ensure everything meets Home Office standards before submission.",
        },
        {
          step: 5,
          title: "Submission & Follow-up",
          description:
            "Submit your application with confidence and receive ongoing support throughout the processing period, with guidance on next steps and settlement planning.",
        },
      ],
    },
  },
  {
    slug: "support-for-african-entrepreneurs",
    title: "Support for African Entrepreneurs in the UK",
    shortDescription:
      "Specialized support for African entrepreneurs establishing UK businesses—whether you're based in Africa or already in the UK.",
    description:
      "Comprehensive support for African entrepreneurs at any stage of their UK business journey. From company formation and visa sponsorship to scaling operations, we provide culturally-informed guidance to help you build successful UK businesses from anywhere in the world.",
    icon: "Users",
    downloadLink:
      "https://res.cloudinary.com/popit/raw/upload/v1762831153/DSS-EBOOKS/The_Complete_Guide_to_CQC_Registration_obxmp4.odt",
    features: [
      "Remote Business Setup",
      "UK Visa Pathways",
      "Cultural Navigation",
      "Network Building",
    ],
    color: "from-amber-500 to-orange-600",
    gradient: "bg-linear-to-br from-amber-500/10 to-orange-600/10",
    price_id: "price_1SQeNoBcFFRNjrpbWyYP7xTa",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    detailedContent: {
      overview:
        "Whether you're an African entrepreneur based on the continent or already in the UK, establishing and growing a British business comes with unique challenges. Our specialized support program is designed specifically for African entrepreneurs, providing comprehensive guidance on UK business setup, visa pathways, cultural navigation, and growth strategies. We help you build your UK business presence regardless of your current location or visa status.",
      benefits: [
        "Establish a legitimate UK business from anywhere in Africa",
        "Access UK visa pathways through business ownership (even without prior UK presence)",
        "Navigate UK business culture with culturally-informed guidance",
        "Connect with a supportive community of African entrepreneurs",
        "Learn from mentors who've successfully built UK businesses",
        "Leverage your unique African perspective as a competitive advantage",
        "Build authentic connections within UK and diaspora business networks",
      ],
      whatYouGet: [
        "UK company formation and registration support (LTD, LLP, etc.)",
        "Business bank account setup guidance for non-UK residents",
        "UK business address and registered office solutions",
        "Visa pathway consultation (Innovator Founder, Skilled Worker self-sponsorship)",
        "Remote business operations setup and management guidance",
        "Personalized mentorship from successful African UK entrepreneurs",
        "Cultural navigation toolkit for UK business environment",
        "Access to exclusive African entrepreneur network and community",
        "Marketing strategies that bridge African heritage with UK audiences",
        "UK compliance and tax obligations guidance",
        "Funding and investment opportunities (UK and international)",
        "12 group coaching sessions with African entrepreneur cohort",
        "Four one-on-one mentorship sessions (60 minutes each)",
        "Lifetime access to community platform and resources",
      ],
      whoIsThisFor: [
        "African entrepreneurs in Africa wanting to establish UK businesses",
        "Business owners seeking UK market expansion from African base",
        "Entrepreneurs exploring UK visa options through business ownership",
        "African diaspora professionals transitioning to entrepreneurship",
        "First-generation immigrants building their UK business dreams",
        "Anyone wanting culturally-aligned mentorship for UK business success",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Business Assessment",
          description:
            "We assess your current situation, business goals, visa needs (if applicable), and create a personalized roadmap for establishing your UK business presence.",
        },
        {
          step: 2,
          title: "UK Business Formation",
          description:
            "Set up your UK company structure, register with relevant authorities, establish business banking, and create the foundation for legitimate UK operations—all manageable remotely.",
        },
        {
          step: 3,
          title: "Visa Pathway Development (If Needed)",
          description:
            "If you require a UK visa, we guide you through available pathways including business immigration routes, helping you understand requirements and build a strong application.",
        },
        {
          step: 4,
          title: "Business Launch & Operations",
          description:
            "Implement systems for remote or on-ground operations, develop your UK market entry strategy, and launch your business with comprehensive support from our community.",
        },
        {
          step: 5,
          title: "Growth & Network Expansion",
          description:
            "Scale your UK business, expand your professional network, access funding opportunities, and become part of a thriving community of successful African entrepreneurs in the UK.",
        },
      ],
    },
  },
  {
    slug: "book-a-consultation",
    title: "Book A Consultation",
    shortDescription:
      "Schedule a personalized 1-hour Zoom consultation at your convenience. Pay once, then book your session anytime via Calendly.",
    description:
      "Get direct access to our expertise with a comprehensive one-on-one Zoom consultation. After payment, use our Calendly link to schedule your 1-hour session at a time that suits you. Whether you need guidance on any of our services or have a unique inquiry, we'll provide sharp, top-notch insights to help you get ahead of the game and make informed decisions for your UK journey.",
    icon: "Users",
    downloadLink: "",
    features: [
      "1-Hour Zoom Session",
      "Schedule Anytime via Calendly",
      "Personalized Expert Guidance",
      "Tailored Action Plan",
    ],
    color: "from-teal-500 to-cyan-600",
    gradient: "bg-linear-to-br from-teal-500/10 to-cyan-600/10",
    price_id: "price_1SSoMsBcFFRNjrpbOw7iQo7B",
    quantity: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    detailedContent: {
      overview:
        "Sometimes you need direct, personalized guidance to navigate your unique situation. Our Book A Consultation service gives you exclusive one-on-one access to our team of experts for a comprehensive 60-minute Zoom session. Pay once, receive your Calendly booking link, and schedule your consultation at any time that works for you. Whether you're exploring our services, have specific questions, or need strategic insights for your UK journey, this consultation provides the clarity and direction you need to move forward with confidence.",
      benefits: [
        "Convenient Zoom meeting from anywhere in the world",
        "Flexible scheduling—book your session at any time that suits you",
        "Get personalized advice tailored to your specific situation",
        "Discuss any of our services or explore multiple options",
        "Receive expert insights and strategic recommendations",
        "Ask questions in a judgment-free, supportive environment",
        "Leave with a clear action plan for your next steps",
        "Save time by getting focused guidance in one session",
      ],
      whatYouGet: [
        "60-minute one-on-one Zoom video consultation",
        "Calendly booking link sent immediately after payment",
        "Freedom to schedule your session at your preferred date and time",
        "Pre-consultation questionnaire to maximize session value",
        "Personalized discussion covering your specific needs and goals",
        "Expert insights and recommendations from experienced consultants",
        "Customized action plan with clear next steps",
        "Resource recommendations tailored to your situation",
        "Session notes and key takeaways sent after the meeting",
        "Follow-up email support for clarifying questions (48 hours post-call)",
        "Recording of the session available upon request",
      ],
      whoIsThisFor: [
        "Anyone exploring our services and wanting personalized guidance",
        "Professionals with unique situations requiring tailored advice",
        "Entrepreneurs needing strategic direction for UK business ventures",
        "Individuals wanting to validate their plans before taking action",
        "Anyone who values expert insights before making important decisions",
        "People seeking clarity on the best path forward for their goals",
        "Busy professionals who need flexible scheduling options",
      ],
      process: [
        {
          step: 1,
          title: "Complete Your Payment",
          description:
            "Purchase your consultation session securely through our payment system. Once payment is confirmed, you'll immediately receive your unique Calendly booking link.",
        },
        {
          step: 2,
          title: "Schedule at Your Convenience",
          description:
            "Use your personalized Calendly link to choose any available date and time that works for your schedule. Select a slot that fits your timezone and preferences—you have complete flexibility.",
        },
        {
          step: 3,
          title: "Complete Pre-Consultation Form",
          description:
            "After booking, fill out a brief questionnaire about your background, goals, and specific questions. This helps us prepare and ensure we maximize the value of your session.",
        },
        {
          step: 4,
          title: "Join Your Zoom Consultation",
          description:
            "At your scheduled time, join the Zoom meeting using the link provided. Have an in-depth, personalized discussion with our expert consultant who will address your questions and provide tailored guidance.",
        },
        {
          step: 5,
          title: "Receive Your Action Plan & Take Action",
          description:
            "After the session, receive a summary email with key takeaways, your personalized action plan, and recommended resources. You'll also have 48 hours of follow-up email support for any clarifying questions that arise.",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
