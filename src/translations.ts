export type Language = 'en' | 'es' | 'ru' | 'ar' | 'fr' | 'vi' | 'hi' | 'th' | 'fa' | 'pt' | 'zh' | 'ja' | 'ko';

export interface TranslationContent {
  nav: {
    about: string;
    products: string;
    catalog: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    companyName: string;
    title: string;
    titleHighlight: string;
    description: string;
    viewProducts: string;
    contactSales: string;
  };
  about: {
    title: string;
    desc1: string;
    desc2: string;
    iso: string;
    ce: string;
    global: string;
  };
  features: {
    quality: { title: string; desc: string };
    tech: { title: string; desc: string };
    support: { title: string; desc: string };
  };
  stats: {
    years: string;
    clients: string;
    certified: string;
    support: string;
  };
  products: {
    title: string;
    desc: string;
    items: {
      abc: { name: string; desc: string };
      co2: { name: string; desc: string };
      water: { name: string; desc: string };
      foam: { name: string; desc: string };
      stainless: { name: string; desc: string };
      automatic: { name: string; desc: string };
    };
  };
  gallery: {
    title: string;
    desc: string;
  };
  contact: {
    title: string;
    desc: string;
    whatsapp: string;
    email: string;
    location: string;
    owner: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      placeholders: {
        name: string;
        email: string;
        subject: string;
        message: string;
      };
    };
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    followUs: string;
  };
  testimonials: {
    title: string;
    desc: string;
    readMore: string;
    readLess: string;
    items: {
      client1: { name: string; company: string; shortDesc: string; fullDesc: string };
      client2: { name: string; company: string; shortDesc: string; fullDesc: string };
      client3: { name: string; company: string; shortDesc: string; fullDesc: string };
    };
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      about: 'About',
      products: 'Products',
      catalog: 'Catalog',
      contact: 'Contact',
      getQuote: 'Get a Quote',
    },
    hero: {
      companyName: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd.',
      title: 'Protecting Lives with',
      titleHighlight: 'Advanced Fire Safety',
      description: 'Leading manufacturer of professional fire fighting equipment. We provide reliable solutions for industrial, commercial, and residential safety.',
      viewProducts: 'View Products',
      contactSales: 'Contact Sales',
    },
    about: {
      title: 'Excellence in Fire Safety Technology',
      desc1: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd. is a leading manufacturer and supplier of high-quality fire protection equipment. Based in Zhejiang, China, we specialize in the production of a wide range of fire extinguishers, hose reels, hydrants, and safety accessories.',
      desc2: 'Our mission is to protect lives and property through innovative technology and reliable safety solutions. With years of experience and a commitment to international standards, we serve clients globally, ensuring every product meets rigorous safety certifications.',
      iso: 'ISO 9001 Certified',
      ce: 'CE Approved Products',
      global: 'Global Export Network',
    },
    features: {
      quality: { title: 'Quality Certified', desc: 'Our products meet international safety standards and certifications.' },
      tech: { title: 'Advanced Technology', desc: 'Utilizing the latest fire fighting technology for maximum efficiency.' },
      support: { title: 'Expert Support', desc: 'Professional guidance and support for all your fire safety needs.' },
    },
    stats: {
      years: 'Years Experience',
      clients: 'Global Clients',
      certified: 'Safety Certified',
      support: 'Expert Support',
    },
    products: {
      title: 'Our Product Range',
      desc: 'Engineered for reliability and performance in critical situations.',
      items: {
        abc: { name: 'ABC Dry Powder Extinguisher', desc: 'Versatile fire protection for Class A, B, and C fires. Available in various sizes.' },
        co2: { name: 'CO2 Fire Extinguisher', desc: 'Ideal for electrical fires and flammable liquid risks. Leaves no residue.' },
        water: { name: 'Water-Based Extinguisher', desc: 'Effective cooling and extinguishing for Class A fires (wood, paper, textiles).' },
        foam: { name: 'Foam Fire Extinguisher', desc: 'Excellent for Class B flammable liquid fires. Creates a sealing film.' },
        stainless: { name: 'Stainless Steel Series', desc: 'Premium corrosion-resistant extinguishers for harsh environments.' },
        automatic: { name: 'Automatic Extinguisher', desc: 'Ceiling-mounted automatic suppression for unmanned areas.' },
      },
    },
    gallery: {
      title: 'Product Gallery',
      desc: 'A comprehensive look at our manufacturing excellence.',
    },
    contact: {
      title: 'Get in Touch',
      desc: 'Contact our sales team for inquiries, bulk orders, or technical support.',
      whatsapp: 'WhatsApp / Phone',
      email: 'Email Address',
      location: 'Location',
      owner: 'Owner',
      form: {
        name: 'Full Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        placeholders: {
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Product Inquiry',
          message: 'Tell us about your requirements...',
        },
      },
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      followUs: 'Follow Us',
    },
    testimonials: {
      title: 'Customer Testimonials',
      desc: 'See how we help organizations around the world stay safe.',
      readMore: 'Read More',
      readLess: 'Read Less',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: 'Gulf Industrial Group',
          shortDesc: 'Exceptional quality and reliability for our oil and gas facilities.',
          fullDesc: 'We have been using Anshun fire extinguishers for over 5 years. Their products are built to withstand harsh environments and have never failed us during safety drills. The stainless steel series is particularly impressive for its corrosion resistance.',
        },
        client2: {
          name: 'Elena Petrova',
          company: 'EuroLogistics Hub',
          shortDesc: 'The automatic suppression systems saved our warehouse from a potential disaster.',
          fullDesc: 'Last year, a small electrical fire started in our main distribution center. The ceiling-mounted automatic extinguishers from Anshun activated instantly, containing the fire before it could spread. Their technology is truly life-saving.',
        },
        client3: {
          name: 'Carlos Mendez',
          company: 'SafeBuild Construction',
          shortDesc: 'Professional support and high-standard certifications.',
          fullDesc: 'As a construction firm, we require strict adherence to safety standards. Anshun provides all necessary certifications (ISO, CE) which makes our compliance process much smoother. Their expert support team is always ready to help.',
        },
      },
    },
  },
  es: {
    nav: {
      about: 'Nosotros',
      products: 'Productos',
      catalog: 'Catálogo',
      contact: 'Contacto',
      getQuote: 'Presupuesto',
    },
    hero: {
      companyName: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd.',
      title: 'Protegiendo Vidas con',
      titleHighlight: 'Seguridad Contra Incendios Avanzada',
      description: 'Fabricante líder de equipos profesionales contra incendios. Brindamos soluciones confiables para la seguridad industrial, comercial y residencial.',
      viewProducts: 'Ver Productos',
      contactSales: 'Contactar Ventas',
    },
    about: {
      title: 'Excelencia en Tecnología de Seguridad Contra Incendios',
      desc1: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd. es un fabricante y proveedor líder de equipos de protección contra incendios de alta calidad. Con sede en Zhejiang, China, nos especializamos en la producción de una amplia gama de extintores, carretes de manguera, hidrantes y accesorios de seguridad.',
      desc2: 'Nuestra misión es proteger vidas y propiedades a través de tecnología innovadora y soluciones de seguridad confiables. Con años de experiencia y un compromiso con los estándares internacionales, servimos a clientes en todo el mundo, asegurando que cada producto cumpla con rigurosas certificaciones de seguridad.',
      iso: 'Certificado ISO 9001',
      ce: 'Productos Aprobados por la CE',
      global: 'Red de Exportación Global',
    },
    features: {
      quality: { title: 'Calidad Certificada', desc: 'Nuestros productos cumplen con los estándares y certificaciones internacionales de seguridad.' },
      tech: { title: 'Tecnología Avanzada', desc: 'Utilizando la última tecnología de extinción de incendios para la máxima eficiencia.' },
      support: { title: 'Soporte Experto', desc: 'Orientación y soporte profesional para todas sus necesidades de seguridad contra incendios.' },
    },
    stats: {
      years: 'Años de Experiencia',
      clients: 'Clientes Globales',
      certified: 'Seguridad Certificada',
      support: 'Soporte Experto',
    },
    products: {
      title: 'Nuestra Gama de Productos',
      desc: 'Diseñados para la confiabilidad y el rendimiento en situaciones críticas.',
      items: {
        abc: { name: 'Extintor de Polvo Seco ABC', desc: 'Protección versátil para incendios de Clase A, B y C. Disponible en varios tamaños.' },
        co2: { name: 'Extintor de CO2', desc: 'Ideal para incendios eléctricos y riesgos de líquidos inflamables. No deja residuos.' },
        water: { name: 'Extintor a Base de Agua', desc: 'Enfriamiento y extinción efectivos para incendios de Clase A (madera, papel, textiles).' },
        foam: { name: 'Extintor de Espuma', desc: 'Excelente para incendios de líquidos inflamables de Clase B. Crea una película selladora.' },
        stainless: { name: 'Serie de Acero Inoxidable', desc: 'Extintores premium resistentes a la corrosión para entornos hostiles.' },
        automatic: { name: 'Extintor Automático', desc: 'Supresión automática montada en el techo para áreas no tripuladas.' },
      },
    },
    gallery: {
      title: 'Galería de Productos',
      desc: 'Una mirada completa a nuestra excelencia en la fabricación.',
    },
    contact: {
      title: 'Póngase en Contacto',
      desc: 'Contacte a nuestro equipo de ventas para consultas, pedidos al por mayor o soporte técnico.',
      whatsapp: 'WhatsApp / Teléfono',
      email: 'Correo Electrónico',
      location: 'Ubicación',
      owner: 'Propietario',
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        placeholders: {
          name: 'Juan Pérez',
          email: 'juan@ejemplo.com',
          subject: 'Consulta de Producto',
          message: 'Cuéntenos sobre sus requerimientos...',
        },
      },
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      followUs: 'Síguenos',
    },
    testimonials: {
      title: 'Testimonios de Clientes',
      desc: 'Vea cómo ayudamos a organizaciones de todo el mundo a mantenerse seguras.',
      readMore: 'Leer Más',
      readLess: 'Leer Menos',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: 'Gulf Industrial Group',
          shortDesc: 'Calidad y confiabilidad excepcionales para nuestras instalaciones de petróleo y gas.',
          fullDesc: 'Hemos estado usando los extintores de Anshun por más de 5 años. Sus productos están diseñados para resistir entornos hostiles y nunca nos han fallado durante los simulacros de seguridad. La serie de acero inoxidable là particularmente impresionante por su resistencia a la corrosión.',
        },
        client2: {
          name: 'Elena Petrova',
          company: 'EuroLogistics Hub',
          shortDesc: 'Los sistemas de supresión automática salvaron nuestro almacén de un desastre potencial.',
          fullDesc: 'El año pasado, se inició un pequeño incendio eléctrico en nuestro centro de distribución principal. Los extintores automáticos montados en el techo de Anshun se activaron instantáneamente, conteniendo el fuego antes de que pudiera propagarse. Su tecnología realmente salva vidas.',
        },
        client3: {
          name: 'Carlos Mendez',
          company: 'SafeBuild Construction',
          shortDesc: 'Soporte profesional y certificaciones de alto estándar.',
          fullDesc: 'Como empresa de construcción, requerimos un cumplimiento estricto de las normas de seguridad. Anshun proporciona todas las certificaciones necesarias (ISO, CE), lo que hace que nuestro proceso de cumplimiento sea mucho más fluido. Su equipo de soporte experto siempre está listo para ayudar.',
        },
      },
    },
  },
  ru: {
    nav: {
      about: 'О нас',
      products: 'Продукция',
      catalog: 'Каталог',
      contact: 'Контакты',
      getQuote: 'Запросить цену',
    },
    hero: {
      companyName: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd.',
      title: 'Защита жизни с помощью',
      titleHighlight: 'Передовых технологий пожарной безопасности',
      description: 'Ведущий производитель профессионального противопожарного оборудования. Мы предлагаем надежные решения для промышленной, коммерческой и бытовой безопасности.',
      viewProducts: 'Посмотреть продукцию',
      contactSales: 'Связаться с отделом продаж',
    },
    about: {
      title: 'Совершенство в технологиях пожарной безопасности',
      desc1: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd. является ведущим производителем и поставщиком высококачественного противопожарного оборудования. Базируясь в провинции Чжэцзян, Китай, мы специализируемся на производстве широкого спектра огнетушителей, шланговых катушек, гидрантов и аксессуаров для обеспечения безопасности.',
      desc2: 'Наша миссия — защищать жизни и имущество с помощью инновационных технологий и надежных решений в области безопасности. Обладая многолетним опытом и приверженностью международным стандартам, мы обслуживаем клиентов по всему миру, гарантируя, что каждый продукт соответствует строгим сертификатам безопасности.',
      iso: 'Сертифицировано ISO 9001',
      ce: 'Продукция, одобренная CE',
      global: 'Глобальная экспортная сеть',
    },
    features: {
      quality: { title: 'Сертифицированное качество', desc: 'Наша продукция соответствует международным стандартам безопасности и сертификатам.' },
      tech: { title: 'Передовые технологии', desc: 'Использование новейших технологий пожаротушения для максимальной эффективности.' },
      support: { title: 'Экспертная поддержка', desc: 'Профессиональное руководство и поддержка для всех ваших потребностей в области пожарной безопасности.' },
    },
    stats: {
      years: 'Лет опыта',
      clients: 'Глобальных клиентов',
      certified: 'Сертифицированная безопасность',
      support: 'Экспертная поддержка',
    },
    products: {
      title: 'Наш ассортимент продукции',
      desc: 'Разработано для надежности и производительности в критических ситуациях.',
      items: {
        abc: { name: 'Порошковый огнетушитель ABC', desc: 'Универсальная противопожарная защита для пожаров классов A, B и C. Доступен в различных размерах.' },
        co2: { name: 'Углекислотный огнетушитель (CO2)', desc: 'Идеально подходит для тушения электроустановок и легковоспламеняющихся жидкостей. Не оставляет следов.' },
        water: { name: 'Водный огнетушитель', desc: 'Эффективное охлаждение и тушение пожаров класса A (дерево, бумага, текстиль).' },
        foam: { name: 'Воздушно-пенный огнетушитель', desc: 'Отлично подходит для тушения легковоспламеняющихся жидкостей класса B. Создает изолирующую пленку.' },
        stainless: { name: 'Серия из нержавеющей стали', desc: 'Высококачественные коррозионностойкие огнетушители для агрессивных сред.' },
        automatic: { name: 'Автоматический огнетушитель', desc: 'Потолочная система автоматического пожаротушения для необслуживаемых помещений.' },
      },
    },
    gallery: {
      title: 'Галерея продукции',
      desc: 'Всесторонний взгляд на наше производственное совершенство.',
    },
    contact: {
      title: 'Связаться с нами',
      desc: 'Свяжитесь с нашим отделом продаж для получения справок, оптовых заказов или технической поддержки.',
      whatsapp: 'WhatsApp / Телефон',
      email: 'Электронная почта',
      location: 'Местоположение',
      owner: 'Владелец',
      form: {
        name: 'Полное имя',
        email: 'Электронная почта',
        subject: 'Тема',
        message: 'Сообщение',
        send: 'Отправить сообщение',
        placeholders: {
          name: 'Иван Иванов',
          email: 'ivan@example.com',
          subject: 'Запрос по продукции',
          message: 'Расскажите нам о ваших требованиях...',
        },
      },
    },
    footer: {
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      followUs: 'Подписывайтесь на нас',
    },
    testimonials: {
      title: 'Отзывы клиентов',
      desc: 'Узнайте, как мы помогаем организациям по всему миру оставаться в безопасности.',
      readMore: 'Читать далее',
      readLess: 'Свернуть',
      items: {
        client1: {
          name: 'Ахмед Аль-Фарси',
          company: 'Gulf Industrial Group',
          shortDesc: 'Исключительное качество и надежность для наших нефтегазовых объектов.',
          fullDesc: 'Мы используем огнетушители Anshun уже более 5 лет. Их продукция создана для работы в суровых условиях и ни разу не подвела нас во время учений по технике безопасности. Серия из нержавеющей стали особенно впечатляет своей коррозионной стойкостью.',
        },
        client2: {
          name: 'Елена Петрова',
          company: 'EuroLogistics Hub',
          shortDesc: 'Автоматические системы пожаротушения спасли наш склад от потенциальной катастрофы.',
          fullDesc: 'В прошлом году в нашем главном распределительном центре возник небольшой пожар из-за неисправности электропроводки. Потолочные автоматические огнетушители Anshun сработали мгновенно, локализовав огонь до того, как он успел распространиться. Их технология действительно спасает жизни.',
        },
        client3: {
          name: 'Карлос Мендес',
          company: 'SafeBuild Construction',
          shortDesc: 'Профессиональная поддержка и сертификация по высоким стандартам.',
          fullDesc: 'Как строительной фирме, нам требуется строгое соблюдение стандартов безопасности. Anshun предоставляет все необходимые сертификаты (ISO, CE), что значительно упрощает процесс соблюдения требований. Их команда экспертов всегда готова помочь.',
        },
      },
    },
  },
  ar: {
    nav: {
      about: 'حول',
      products: 'المنتجات',
      catalog: 'الكتالوج',
      contact: 'اتصل بنا',
      getQuote: 'احصل على عرض سعر',
    },
    hero: {
      companyName: 'شركة تشجيانغ أنشون لتكنولوجيا مكافحة الحرائق المحدودة',
      title: 'حماية الأرواح باستخدام',
      titleHighlight: 'تقنيات السلامة المتقدمة من الحرائق',
      description: 'الشركة الرائدة في تصنيع معدات مكافحة الحرائق المهنية. نحن نقدم حلولاً موثوقة للسلامة الصناعية والتجارية والسكنية.',
      viewProducts: 'عرض المنتجات',
      contactSales: 'اتصل بالمبيعات',
    },
    about: {
      title: 'التميز في تكنولوجيا السلامة من الحرائق',
      desc1: 'تعد شركة تشجيانغ أنشون لتكنولوجيا مكافحة الحرائق المحدودة شركة رائدة في تصنيع وتوريد معدات الحماية من الحرائق عالية الجودة. يقع مقرنا في تشجيانغ، الصين، ونحن متخصصون في إنتاج مجموعة واسعة من طفايات الحريق، وبكرات الخراطيم، وصنابير الحريق، وملحقات السلامة.',
      desc2: 'مهمتنا هي حماية الأرواح والممتلكات من خلال التكنولوجيا المبتكرة وحلول السلامة الموثوقة. مع سنوات من الخبرة والالتزام بالمعايير الدولية، نخدم العملاء على مستوى العالم، مما يضمن تلبية كل منتج لشهادات السلامة الصارمة.',
      iso: 'حاصل على شهادة ISO 9001',
      ce: 'منتجات معتمدة من CE',
      global: 'شبكة تصدير عالمية',
    },
    features: {
      quality: { title: 'جودة معتمدة', desc: 'منتجاتنا تلبي معايير وشهادات السلامة الدولية.' },
      tech: { title: 'تكنولوجيا متقدمة', desc: 'استخدام أحدث تقنيات مكافحة الحرائق لتحقيق أقصى قدر من الكفاءة.' },
      support: { title: 'دعم الخبراء', desc: 'توجيه ودعم مهني لجميع احتياجات السلامة من الحرائق الخاصة بك.' },
    },
    stats: {
      years: 'سنوات الخبرة',
      clients: 'عملاء عالميون',
      certified: 'معتمد للسلامة',
      support: 'دعم الخبراء',
    },
    products: {
      title: 'مجموعة منتجاتنا',
      desc: 'مصممة للموثوقية والأداء في المواقف الحرجة.',
      items: {
        abc: { name: 'طفاية بودرة جافة ABC', desc: 'حماية متنوعة من الحرائق للفئات A و B و C. متوفرة بأحجام مختلفة.' },
        co2: { name: 'طفاية حريق ثاني أكسيد الكربون', desc: 'مثالية للحرائق الكهربائية ومخاطر السوائل القابلة للاشتعال. لا تترك أي بقايا.' },
        water: { name: 'طفاية حريق مائية', desc: 'تبريد وإطفاء فعال لحرائق الفئة A (الخشب والورق والمنسوجات).' },
        foam: { name: 'طفاية حريق رغوية', desc: 'ممتازة لحرائق السوائل القابلة للاشتعال من الفئة B. تخلق طبقة عازلة.' },
        stainless: { name: 'سلسلة الفولاذ المقاوم للصدأ', desc: 'طفايات حريق متميزة مقاومة للتآكل للبيئات القاسية.' },
        automatic: { name: 'طفاية حريق أوتوماتيكية', desc: 'نظام إخماد أوتوماتيكي مثبت في السقف للمناطق غير المأهولة.' },
      },
    },
    gallery: {
      title: 'معرض المنتجات',
      desc: 'نظرة شاملة على تميزنا في التصنيع.',
    },
    contact: {
      title: 'تواصل معنا',
      desc: 'اتصل بفريق المبيعات لدينا للاستفسارات أو الطلبات بالجملة أو الدعم الفني.',
      whatsapp: 'واتساب / هاتف',
      email: 'البريد الإلكتروني',
      location: 'الموقع',
      owner: 'المالك',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        placeholders: {
          name: 'أحمد محمد',
          email: 'ahmed@example.com',
          subject: 'استفسار عن منتج',
          message: 'أخبرنا عن متطلباتك...',
        },
      },
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      followUs: 'تابعنا',
    },
    testimonials: {
      title: 'شهادات العملاء',
      desc: 'تعرف على كيفية مساعدتنا للمؤسسات حول العالم في الحفاظ على سلامتها.',
      readMore: 'اقرأ المزيد',
      readLess: 'اقرأ أقل',
      items: {
        client1: {
          name: 'أحمد الفارسي',
          company: 'مجموعة الخليج الصناعية',
          shortDesc: 'جودة وموثوقية استثنائية لمرافق النفط والغاز لدينا.',
          fullDesc: 'نحن نستخدم طفايات الحريق من أنشون منذ أكثر من 5 سنوات. منتجاتهم مصممة لتحمل البيئات القاسية ولم تخذلنا أبداً خلال تدريبات السلامة. سلسلة الفولاذ المقاوم للصدأ رائعة بشكل خاص لمقاومتها للتآكل.',
        },
        client2: {
          name: 'إيلينا بتروفا',
          company: 'مركز يورو لوجيستيكس',
          shortDesc: 'أنظمة الإخماد الأوتوماتيكية أنقذت مستودعنا من كارثة محتملة.',
          fullDesc: 'في العام الماضي، اندلع حريق كهربائي صغير في مركز التوزيع الرئيسي لدينا. تم تفعيل طفايات الحريق الأوتوماتيكية المثبتة في السقف من أنشون على الفور، مما أدى إلى احتواء الحريق قبل أن ينتشر. تقنيتهم تنقذ الأرواح حقاً.',
        },
        client3: {
          name: 'كارلوس مينديز',
          company: 'سيف بيلد للإنشاءات',
          shortDesc: 'دعم احترافي وشهادات عالية المستوى.',
          fullDesc: 'بصفتنا شركة إنشاءات، نحن نتطلب التزاماً صارماً بمعايير السلامة. توفر أنشون جميع الشهادات اللازمة (ISO، CE) مما يجعل عملية الامتثال لدينا أكثر سلاسة. فريق دعم الخبراء لديهم مستعد دائماً للمساعدة.',
        },
      },
    },
  },
  fr: {
    nav: {
      about: 'À Propos',
      products: 'Produits',
      catalog: 'Catalogue',
      contact: 'Contact',
      getQuote: 'Devis',
    },
    hero: {
      companyName: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd.',
      title: 'Protéger des Vies avec',
      titleHighlight: 'une Sécurité Incendie Avancée',
      description: 'Premier fabricant d\'équipements de lutte contre l\'incendie professionnels. Nous fournissons des solutions fiables pour la sécurité industrielle, commerciale et résidentielle.',
      viewProducts: 'Voir les Produits',
      contactSales: 'Contacter les Ventes',
    },
    about: {
      title: 'Excellence en Technologie de Sécurité Incendie',
      desc1: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd. est un fabricant et fournisseur de premier plan d\'équipements de protection contre l\'incendie de haute qualité. Basés dans le Zhejiang, en Chine, nous nous spécialisons dans la production d\'une large gamme d\'extincteurs, de dévidoirs, d\'hydrants et d\'accessoires de sécurité.',
      desc2: 'Notre mission est de protéger les vies et les biens grâce à une technologie innovante et des solutions de sécurité fiables. Avec des années d\'expérience et un engagement envers les normes internationales, nous servons des clients dans le monde entier, garantissant que chaque produit répond à des certifications de sécurité rigoureuses.',
      iso: 'Certifié ISO 9001',
      ce: 'Produits Approuvés CE',
      global: 'Réseau d\'Exportation Mondial',
    },
    features: {
      quality: { title: 'Qualité Certifiée', desc: 'Nos produits répondent aux normes et certifications de sécurité internationales.' },
      tech: { title: 'Technologie Avancée', desc: 'Utilisation de la dernière technologie de lutte contre l\'incendie pour une efficacité maximale.' },
      support: { title: 'Support Expert', desc: 'Conseils et support professionnels pour tous vos besoins en sécurité incendie.' },
    },
    stats: {
      years: 'Années d\'Expérience',
      clients: 'Clients Mondiaux',
      certified: 'Sécurité Certifiée',
      support: 'Support Expert',
    },
    products: {
      title: 'Notre Gamme de Produits',
      desc: 'Conçus pour la fiabilité et la performance dans les situations critiques.',
      items: {
        abc: { name: 'Extincteur à Poudre Sèche ABC', desc: 'Protection incendie polyvalente pour les feux de classe A, B et C. Disponible en plusieurs tailles.' },
        co2: { name: 'Extincteur au CO2', desc: 'Idéal pour les feux électriques et les risques de liquides inflammables. Ne laisse aucun résidu.' },
        water: { name: 'Extincteur à Eau', desc: 'Refroidissement et extinction efficaces pour les feux de classe A (bois, papier, textiles).' },
        foam: { name: 'Extincteur à Mousse', desc: 'Excellent pour les feux de liquides inflammables de classe B. Crée un film d\'étanchéité.' },
        stainless: { name: 'Série en Acier Inoxydable', desc: 'Extincteurs haut de gamme résistants à la corrosion pour les environnements difficiles.' },
        automatic: { name: 'Extincteur Automatique', desc: 'Suppression automatique montée au plafond pour les zones non habitées.' },
      },
    },
    gallery: {
      title: 'Galerie de Produits',
      desc: 'Un aperçu complet de notre excellence en fabrication.',
    },
    contact: {
      title: 'Contactez-nous',
      desc: 'Contactez notre équipe de vente pour des demandes de renseignements, des commandes en gros ou un support technique.',
      whatsapp: 'WhatsApp / Téléphone',
      email: 'Adresse E-mail',
      location: 'Emplacement',
      owner: 'Propriétaire',
      form: {
        name: 'Nom Complet',
        email: 'E-mail',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le Message',
        placeholders: {
          name: 'Jean Dupont',
          email: 'jean@exemple.com',
          subject: 'Demande de Produit',
          message: 'Parlez-nous de vos besoins...',
        },
      },
    },
    footer: {
      rights: 'Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      followUs: 'Suivez-nous',
    },
    testimonials: {
      title: 'Témoignages Clients',
      desc: 'Découvrez comment nous aidons les organisations du monde entier à rester en sécurité.',
      readMore: 'Lire Plus',
      readLess: 'Lire Moins',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: 'Gulf Industrial Group',
          shortDesc: 'Qualité et fiabilité exceptionnelles pour nos installations pétrolières et gazières.',
          fullDesc: 'Nous utilisons les extincteurs Anshun depuis plus de 5 ans. Leurs produits sont conçus pour résister à des environnements difficiles et ne nous ont jamais fait défaut lors des exercices de sécurité. La série en acier inoxydable est particulièrement impressionnante pour sa résistance à la corrosion.',
        },
        client2: {
          name: 'Elena Petrova',
          company: 'EuroLogistics Hub',
          shortDesc: 'Les systèmes de suppression automatique ont sauvé notre entrepôt d\'une catastrophe potentielle.',
          fullDesc: 'L\'année dernière, un petit incendie électrique s\'est déclaré dans notre centre de distribution principal. Les extincteurs automatiques montés au plafond d\'Anshun se sont activés instantanément, contenant l\'incendie avant qu\'il ne puisse se propager. Leur technologie sauve véritablement des vies.',
        },
        client3: {
          name: 'Carlos Mendez',
          company: 'SafeBuild Construction',
          shortDesc: 'Support professionnel et certifications de haut niveau.',
          fullDesc: 'En tant qu\'entreprise de construction, nous exigeons un respect strict des normes de sécurité. Anshun fournit toutes les certifications nécessaires (ISO, CE), ce qui rend notre processus de conformité beaucoup plus fluide. Leur équipe d\'experts est toujours prête à aider.',
        },
      },
    },
  },
  vi: {
    nav: {
      about: 'Giới thiệu',
      products: 'Sản phẩm',
      catalog: 'Danh mục',
      contact: 'Liên hệ',
      getQuote: 'Nhận báo giá',
    },
    hero: {
      companyName: 'Công ty TNHH Công nghệ Phòng cháy Chữa cháy Chiết Giang Anshun',
      title: 'Bảo vệ cuộc sống bằng',
      titleHighlight: 'An toàn cháy nổ tiên tiến',
      description: 'Nhà sản xuất thiết bị phòng cháy chữa cháy chuyên nghiệp hàng đầu. Chúng tôi cung cấp các giải pháp đáng tin cậy cho an toàn công nghiệp, thương mại và dân dụng.',
      viewProducts: 'Xem sản phẩm',
      contactSales: 'Liên hệ bán hàng',
    },
    about: {
      title: 'Sự xuất sắc trong công nghệ an toàn cháy nổ',
      desc1: 'Công ty TNHH Công nghệ Phòng cháy Chữa cháy Chiết Giang Anshun là nhà sản xuất và cung cấp thiết bị phòng cháy chữa cháy chất lượng cao hàng đầu. Có trụ sở tại Chiết Giang, Trung Quốc, chúng tôi chuyên sản xuất nhiều loại bình chữa cháy, cuộn vòi, trụ nước và phụ kiện an toàn.',
      desc2: 'Sứ mệnh của chúng tôi là bảo vệ tính mạng và tài sản thông qua công nghệ tiên tiến và các giải pháp an toàn đáng tin cậy. Với nhiều năm kinh nghiệm và cam kết tuân thủ các tiêu chuẩn quốc tế, chúng tôi phục vụ khách hàng trên toàn cầu, đảm bảo mọi sản phẩm đều đáp ứng các chứng nhận an toàn nghiêm ngặt.',
      iso: 'Chứng nhận ISO 9001',
      ce: 'Sản phẩm được phê duyệt CE',
      global: 'Mạng lưới xuất khẩu toàn cầu',
    },
    features: {
      quality: { title: 'Chất lượng được chứng nhận', desc: 'Sản phẩm của chúng tôi đáp ứng các tiêu chuẩn và chứng nhận an toàn quốc tế.' },
      tech: { title: 'Công nghệ tiên tiến', desc: 'Sử dụng công nghệ phòng cháy chữa cháy mới nhất để đạt hiệu quả tối đa.' },
      support: { title: 'Hỗ trợ chuyên gia', desc: 'Hướng dẫn và hỗ trợ chuyên nghiệp cho tất cả các nhu cầu an toàn cháy nổ của bạn.' },
    },
    stats: {
      years: 'Năm kinh nghiệm',
      clients: 'Khách hàng toàn cầu',
      certified: 'Chứng nhận an toàn',
      support: 'Hỗ trợ chuyên gia',
    },
    products: {
      title: 'Danh mục sản phẩm của chúng tôi',
      desc: 'Được thiết kế để đảm bảo độ tin cậy và hiệu suất trong các tình huống quan trọng.',
      items: {
        abc: { name: 'Bình chữa cháy bột khô ABC', desc: 'Bảo vệ đa năng cho đám cháy loại A, B và C. Có sẵn nhiều kích cỡ.' },
        co2: { name: 'Bình chữa cháy CO2', desc: 'Lý tưởng cho đám cháy điện và rủi ro chất lỏng dễ cháy. Không để lại dư lượng.' },
        water: { name: 'Bình chữa cháy gốc nước', desc: 'Làm mát và dập tắt hiệu quả cho đám cháy loại A (gỗ, giấy, dệt may).' },
        foam: { name: 'Bình chữa cháy bọt', desc: 'Tuyệt vời cho đám cháy chất lỏng dễ cháy loại B. Tạo màng ngăn cách.' },
        stainless: { name: 'Dòng thép không gỉ', desc: 'Bình chữa cháy cao cấp chống ăn mòn cho môi trường khắc nghiệt.' },
        automatic: { name: 'Bình chữa cháy tự động', desc: 'Hệ thống dập tắt tự động gắn trần cho các khu vực không người trực.' },
      },
    },
    gallery: {
      title: 'Thư viện sản phẩm',
      desc: 'Cái nhìn toàn diện về sự xuất sắc trong sản xuất của chúng tôi.',
    },
    contact: {
      title: 'Liên hệ với chúng tôi',
      desc: 'Liên hệ với đội ngũ bán hàng của chúng tôi để được giải đáp thắc mắc, đặt hàng số lượng lớn hoặc hỗ trợ kỹ thuật.',
      whatsapp: 'WhatsApp / Điện thoại',
      email: 'Địa chỉ Email',
      location: 'Địa điểm',
      owner: 'Chủ sở hữu',
      form: {
        name: 'Họ và tên',
        email: 'Email',
        subject: 'Tiêu đề',
        message: 'Tin nhắn',
        send: 'Gửi tin nhắn',
        placeholders: {
          name: 'Nguyễn Văn A',
          email: 'nguyenvana@example.com',
          subject: 'Yêu cầu về sản phẩm',
          message: 'Hãy cho chúng tôi biết về yêu cầu của bạn...',
        },
      },
    },
    footer: {
      rights: 'Bảo lưu mọi quyền.',
      privacy: 'Chính sách bảo mật',
      terms: 'Điều khoản dịch vụ',
      followUs: 'Theo dõi chúng tôi',
    },
    testimonials: {
      title: 'Ý kiến khách hàng',
      desc: 'Xem cách chúng tôi giúp các tổ chức trên thế giới giữ an toàn.',
      readMore: 'Đọc thêm',
      readLess: 'Thu gọn',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: 'Gulf Industrial Group',
          shortDesc: 'Chất lượng và độ tin cậy đặc biệt cho các cơ sở dầu khí của chúng tôi.',
          fullDesc: 'Chúng tôi đã sử dụng bình chữa cháy Anshun trong hơn 5 năm. Sản phẩm của họ được chế tạo để chịu được môi trường khắc nghiệt và chưa bao giờ làm chúng tôi thất vọng trong các buổi diễn tập an toàn. Dòng thép không gỉ đặc biệt ấn tượng về khả năng chống ăn mòn.',
        },
        client2: {
          name: 'Elena Petrova',
          company: 'EuroLogistics Hub',
          shortDesc: 'Hệ thống dập tắt tự động đã cứu kho hàng của chúng tôi khỏi một thảm họa tiềm tàng.',
          fullDesc: 'Năm ngoái, một đám cháy điện nhỏ đã bùng phát tại trung tâm phân phối chính của chúng tôi. Bình chữa cháy tự động gắn trần của Anshun đã kích hoạt ngay lập tức, khống chế đám cháy trước khi nó kịp lan rộng. Công nghệ của họ thực sự cứu mạng người.',
        },
        client3: {
          name: 'Carlos Mendez',
          company: 'SafeBuild Construction',
          shortDesc: 'Hỗ trợ chuyên nghiệp và chứng nhận tiêu chuẩn cao.',
          fullDesc: 'Là một công ty xây dựng, chúng tôi yêu cầu tuân thủ nghiêm ngặt các tiêu chuẩn an toàn. Anshun cung cấp tất cả các chứng nhận cần thiết (ISO, CE) giúp quy trình tuân thủ của chúng tôi diễn ra suôn sẻ hơn nhiều. Đội ngũ hỗ trợ chuyên gia của họ luôn sẵn sàng giúp đỡ.',
        },
      },
    },
  },
  hi: {
    nav: {
      about: 'हमारे बारे में',
      products: 'उत्पाद',
      catalog: 'कैटलॉग',
      contact: 'संपर्क',
      getQuote: 'कोट प्राप्त करें',
    },
    hero: {
      companyName: 'झेजियांग अनशुन फायर फाइटिंग टेक्नोलॉजी कंपनी लिमिटेड',
      title: 'जीवन की रक्षा',
      titleHighlight: 'उन्नत अग्नि सुरक्षा के साथ',
      description: 'पेशेवर अग्नि शमन उपकरणों के अग्रणी निर्माता। हम औद्योगिक, वाणिज्यिक और आवासीय सुरक्षा के लिए विश्वसनीय समाधान प्रदान करते हैं।',
      viewProducts: 'उत्पाद देखें',
      contactSales: 'बिक्री से संपर्क करें',
    },
    about: {
      title: 'अग्नि सुरक्षा तकनीक में उत्कृष्टता',
      desc1: 'झेजियांग अनशुन फायर फाइटिंग टेक्नोलॉजी कंपनी लिमिटेड उच्च गुणवत्ता वाले अग्नि सुरक्षा उपकरणों की एक अग्रणी निर्माता और आपूर्तिकर्ता है। झेजियांग, चीन में स्थित, हम अग्निशामक यंत्रों, होज़ रील, हाइड्रेंट और सुरक्षा सहायक उपकरणों की एक विस्तृत श्रृंखला के उत्पादन में विशेषज्ञ हैं।',
      desc2: 'हमारा मिशन नवीन तकनीक और विश्वसनीय सुरक्षा समाधानों के माध्यम से जीवन और संपत्ति की रक्षा करना है। वर्षों के अनुभव और अंतरराष्ट्रीय मानकों के प्रति प्रतिबद्धता के साथ, हम विश्व स्तर पर ग्राहकों की सेवा करते हैं, यह सुनिश्चित करते हुए कि प्रत्येक उत्पाद कठोर सुरक्षा प्रमाणपत्रों को पूरा करता है।',
      iso: 'ISO 9001 प्रमाणित',
      ce: 'CE अनुमोदित उत्पाद',
      global: 'वैश्विक निर्यात नेटवर्क',
    },
    features: {
      quality: { title: 'गुणवत्ता प्रमाणित', desc: 'हमारे उत्पाद अंतरराष्ट्रीय सुरक्षा मानकों और प्रमाणपत्रों को पूरा करते हैं।' },
      tech: { title: 'उन्नत तकनीक', desc: 'अधिकतम दक्षता के लिए नवीनतम अग्नि शमन तकनीक का उपयोग करना।' },
      support: { title: 'विशेषज्ञ सहायता', desc: 'आपकी सभी अग्नि सुरक्षा आवश्यकताओं के लिए पेशेवर मार्गदर्शन और सहायता।' },
    },
    stats: {
      years: 'वर्षों का अनुभव',
      clients: 'वैश्विक ग्राहक',
      certified: 'सुरक्षा प्रमाणित',
      support: 'विशेषज्ञ सहायता',
    },
    products: {
      title: 'हमारी उत्पाद श्रृंखला',
      desc: 'महत्वपूर्ण स्थितियों में विश्वसनीयता और प्रदर्शन के लिए इंजीनियर किया गया।',
      items: {
        abc: { name: 'ABC ड्राई पाउडर अग्निशामक', desc: 'क्लास A, B और C की आग के लिए बहुमुखी सुरक्षा। विभिन्न आकारों में उपलब्ध।' },
        co2: { name: 'CO2 अग्निशामक', desc: 'बिजली की आग और ज्वलनशील तरल जोखिमों के लिए आदर्श। कोई अवशेष नहीं छोड़ता।' },
        water: { name: 'जल-आधारित अग्निशामक', desc: 'क्लास A की आग (लकड़ी, कागज, कपड़ा) के लिए प्रभावी शीतलन और शमन।' },
        foam: { name: 'फोम अग्निशामक', desc: 'क्लास B ज्वलनशील तरल आग के लिए उत्कृष्ट। एक सीलिंग फिल्म बनाता है।' },
        stainless: { name: 'स्टेनलेस स्टील श्रृंखला', desc: 'कठोर वातावरण के लिए प्रीमियम संक्षारण प्रतिरोधी अग्निशामक।' },
        automatic: { name: 'स्वचालित अग्निशामक', desc: 'मानवरहित क्षेत्रों के लिए छत पर लगा स्वचालित दमन प्रणाली।' },
      },
    },
    gallery: {
      title: 'उत्पाद गैलरी',
      desc: 'हमारी विनिर्माण उत्कृष्टता पर एक व्यापक नज़र।',
    },
    contact: {
      title: 'संपर्क करें',
      desc: 'पूछताछ, थोक ऑर्डर या तकनीकी सहायता के लिए हमारी बिक्री टीम से संपर्क करें।',
      whatsapp: 'व्हाट्सएप / फोन',
      email: 'ईमेल पता',
      location: 'स्थान',
      owner: 'मालिक',
      form: {
        name: 'पूरा नाम',
        email: 'ईमेल',
        subject: 'विषय',
        message: 'संदेश',
        send: 'संदेश भेजें',
        placeholders: {
          name: 'राहुल कुमार',
          email: 'rahul@example.com',
          subject: 'उत्पाद पूछताछ',
          message: 'हमें अपनी आवश्यकताओं के बारे में बताएं...',
        },
      },
    },
    footer: {
      rights: 'सर्वाधिकार सुरक्षित।',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें',
      followUs: 'हमारा अनुसरण करें',
    },
    testimonials: {
      title: 'ग्राहक प्रशंसापत्र',
      desc: 'देखें कि हम दुनिया भर के संगठनों को सुरक्षित रहने में कैसे मदद करते हैं।',
      readMore: 'और पढ़ें',
      readLess: 'कम पढ़ें',
      items: {
        client1: {
          name: 'अहमद अल-फ़ारसी',
          company: 'गल्फ इंडस्ट्रियल ग्रुप',
          shortDesc: 'हमारी तेल और गैस सुविधाओं के लिए असाधारण गुणवत्ता और विश्वसनीयता।',
          fullDesc: 'हम 5 वर्षों से अधिक समय से अनशुन अग्निशामक यंत्रों का उपयोग कर रहे हैं। उनके उत्पाद कठोर वातावरण का सामना करने के लिए बनाए गए हैं और सुरक्षा अभ्यास के दौरान हमें कभी निराश नहीं किया। स्टेनलेस स्टील श्रृंखला विशेष रूप से अपने संक्षारण प्रतिरोध के लिए प्रभावशाली है।',
        },
        client2: {
          name: 'ऐलेना पेट्रोवा',
          company: 'यूरोलॉजिस्टिक्स हब',
          shortDesc: 'स्वचालित दमन प्रणालियों ने हमारे गोदाम को संभावित आपदा से बचा लिया।',
          fullDesc: 'पिछले साल, हमारे मुख्य वितरण केंद्र में एक छोटी सी बिजली की आग लग गई थी। अनशुन के छत पर लगे स्वचालित अग्निशामक तुरंत सक्रिय हो गए, जिससे आग फैलने से पहले ही उस पर काबू पा लिया गया। उनकी तकनीक वास्तव में जीवन रक्षक है।',
        },
        client3: {
          name: 'कार्लोस मेंडेज़',
          company: 'सेफबिल्ड कंस्ट्रक्शन',
          shortDesc: 'पेशेवर सहायता और उच्च-मानक प्रमाणपत्र।',
          fullDesc: 'एक निर्माण फर्म के रूप में, हमें सुरक्षा मानकों के सख्त पालन की आवश्यकता होती है। अनशुन सभी आवश्यक प्रमाणपत्र (ISO, CE) प्रदान करता है जो हमारी अनुपालन प्रक्रिया को बहुत आसान बनाता है। उनकी विशेषज्ञ सहायता टीम हमेशा मदद के लिए तैयार रहती है।',
        },
      },
    },
  },
  th: {
    nav: {
      about: 'เกี่ยวกับเรา',
      products: 'สินค้า',
      catalog: 'แคตตาล็อก',
      contact: 'ติดต่อเรา',
      getQuote: 'ขอใบเสนอราคา',
    },
    hero: {
      companyName: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd.',
      title: 'ปกป้องชีวิตด้วย',
      titleHighlight: 'ความปลอดภัยจากอัคคีภัยขั้นสูง',
      description: 'ผู้ผลิตอุปกรณ์ดับเพลิงมืออาชีพชั้นนำ เรานำเสนอโซลูชันที่เชื่อถือได้เพื่อความปลอดภัยในโรงงานอุตสาหกรรม พาณิชยกรรม และที่พักอาศัย',
      viewProducts: 'ดูสินค้า',
      contactSales: 'ติดต่อฝ่ายขาย',
    },
    about: {
      title: 'ความเป็นเลิศในเทคโนโลยีความปลอดภัยจากอัคคีภัย',
      desc1: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd. เป็นผู้ผลิตและซัพพลายเออร์ชั้นนำด้านอุปกรณ์ป้องกันอัคคีภัยคุณภาพสูง ตั้งอยู่ในมณฑลเจ้อเจียง ประเทศจีน เราเชี่ยวชาญในการผลิตถังดับเพลิง ตู้เก็บสายส่งน้ำดับเพลิง หัวรับน้ำดับเพลิง และอุปกรณ์เสริมเพื่อความปลอดภัยที่หลากหลาย',
      desc2: 'ภารกิจของเราคือการปกป้องชีวิตและทรัพย์สินผ่านเทคโนโลยีที่เป็นนวัตกรรมและโซลูชันความปลอดภัยที่เชื่อถือได้ ด้วยประสบการณ์หลายปีและความมุ่งมั่นในมาตรฐานสากล เราให้บริการลูกค้าทั่วโลก เพื่อให้มั่นใจว่าทุกผลิตภัณฑ์เป็นไปตามใบรับรองความปลอดภัยที่เข้มงวด',
      iso: 'ได้รับการรับรอง ISO 9001',
      ce: 'สินค้าที่ได้รับการรับรอง CE',
      global: 'เครือข่ายการส่งออกทั่วโลก',
    },
    features: {
      quality: { title: 'คุณภาพที่ได้รับการรับรอง', desc: 'ผลิตภัณฑ์ของเราเป็นไปตามมาตรฐานความปลอดภัยและใบรับรองระดับสากล' },
      tech: { title: 'เทคโนโลยีขั้นสูง', desc: 'ใช้เทคโนโลยีการดับเพลิงล่าสุดเพื่อประสิทธิภาพสูงสุด' },
      support: { title: 'การสนับสนุนจากผู้เชี่ยวชาญ', desc: 'คำแนะนำและการสนับสนุนระดับมืออาชีพสำหรับทุกความต้องการด้านความปลอดภัยจากอัคคีภัยของคุณ' },
    },
    stats: {
      years: 'ปีแห่งประสบการณ์',
      clients: 'ลูกค้าทั่วโลก',
      certified: 'รับรองความปลอดภัย',
      support: 'การสนับสนุนจากผู้เชี่ยวชาญ',
    },
    products: {
      title: 'กลุ่มผลิตภัณฑ์ของเรา',
      desc: 'ออกแบบมาเพื่อความน่าเชื่อถือและประสิทธิภาพในสถานการณ์วิกฤต',
      items: {
        abc: { name: 'ถังดับเพลิงผงเคมีแห้ง ABC', desc: 'การป้องกันอัคคีภัยอเนกประสงค์สำหรับไฟประเภท A, B และ C มีให้เลือกหลายขนาด' },
        co2: { name: 'ถังดับเพลิง CO2', desc: 'เหมาะสำหรับไฟที่เกิดจากไฟฟ้าและความเสี่ยงจากของเหลวไวไฟ ไม่ทิ้งคราบสกปรก' },
        water: { name: 'ถังดับเพลิงสูตรน้ำ', desc: 'การระบายความร้อนและการดับไฟที่มีประสิทธิภาพสำหรับไฟประเภท A (ไม้ กระดาษ สิ่งทอ)' },
        foam: { name: 'ถังดับเพลิงชนิดโฟม', desc: 'ยอดเยี่ยมสำหรับไฟจากของเหลวไวไฟประเภท B สร้างฟิล์มปิดผนึก' },
        stainless: { name: 'ซีรีส์สแตนเลส', desc: 'ถังดับเพลิงทนการกัดกร่อนระดับพรีเมียมสำหรับสภาพแวดล้อมที่รุนแรง' },
        automatic: { name: 'ถังดับเพลิงอัตโนมัติ', desc: 'ระบบดับเพลิงอัตโนมัติแบบติดตั้งบนเพดานสำหรับพื้นที่ที่ไม่มีคนดูแล' },
      },
    },
    gallery: {
      title: 'แกลเลอรีสินค้า',
      desc: 'มุมมองที่ครอบคลุมเกี่ยวกับความเป็นเลิศในการผลิตของเรา',
    },
    contact: {
      title: 'ติดต่อเรา',
      desc: 'ติดต่อทีมขายของเราเพื่อสอบถามข้อมูล สั่งซื้อจำนวนมาก หรือรับการสนับสนุนทางเทคนิค',
      whatsapp: 'WhatsApp / โทรศัพท์',
      email: 'ที่อยู่อีเมล',
      location: 'สถานที่ตั้ง',
      owner: 'เจ้าของ',
      form: {
        name: 'ชื่อ-นามสกุล',
        email: 'อีเมล',
        subject: 'หัวข้อ',
        message: 'ข้อความ',
        send: 'ส่งข้อความ',
        placeholders: {
          name: 'สมชาย ใจดี',
          email: 'somchai@example.com',
          subject: 'สอบถามเกี่ยวกับสินค้า',
          message: 'บอกเราเกี่ยวกับความต้องการของคุณ...',
        },
      },
    },
    footer: {
      rights: 'สงวนลิขสิทธิ์ทั้งหมด',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'ข้อกำหนดการให้บริการ',
      followUs: 'ติดตามเรา',
    },
    testimonials: {
      title: 'คำนิยมจากลูกค้า',
      desc: 'ดูว่าเราช่วยให้องค์กรต่างๆ ทั่วโลกปลอดภัยได้อย่างไร',
      readMore: 'อ่านเพิ่มเติม',
      readLess: 'อ่านน้อยลง',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: 'Gulf Industrial Group',
          shortDesc: 'คุณภาพและความน่าเชื่อถือที่ยอดเยี่ยมสำหรับโรงงานน้ำมันและก๊าซของเรา',
          fullDesc: 'เราใช้ถังดับเพลิง Anshun มานานกว่า 5 ปี ผลิตภัณฑ์ของพวกเขาสร้างขึ้นเพื่อทนต่อสภาพแวดล้อมที่รุนแรงและไม่เคยทำให้เราผิดหวังในระหว่างการซ้อมความปลอดภัย ซีรีส์สแตนเลสนั้นน่าประทับใจเป็นพิเศษในเรื่องความทนทานต่อการกัดกร่อน',
        },
        client2: {
          name: 'Elena Petrova',
          company: 'EuroLogistics Hub',
          shortDesc: 'ระบบดับเพลิงอัตโนมัติช่วยให้คลังสินค้าของเราพ้นจากภัยพิบัติที่อาจเกิดขึ้น',
          fullDesc: 'เมื่อปีที่แล้ว เกิดไฟไหม้จากไฟฟ้าลัดวงจรขนาดเล็กในศูนย์กระจายสินค้าหลักของเรา ถังดับเพลิงอัตโนมัติแบบติดตั้งบนเพดานจาก Anshun ทำงานทันที โดยควบคุมไฟไว้ได้ก่อนที่จะลุกลาม เทคโนโลยีของพวกเขาช่วยชีวิตคนได้จริงๆ',
        },
        client3: {
          name: 'Carlos Mendez',
          company: 'SafeBuild Construction',
          shortDesc: 'การสนับสนุนระดับมืออาชีพและใบรับรองมาตรฐานสูง',
          fullDesc: 'ในฐานะบริษัทก่อสร้าง เราต้องการการปฏิบัติตามมาตรฐานความปลอดภัยอย่างเคร่งครัด Anshun จัดหาใบรับรองที่จำเป็นทั้งหมด (ISO, CE) ซึ่งทำให้กระบวนการปฏิบัติตามข้อกำหนดของเราราบรื่นขึ้นมาก ทีมสนับสนุนผู้เชี่ยวชาญของพวกเขาพร้อมช่วยเหลือเสมอ',
        },
      },
    },
  },
  fa: {
    nav: {
      about: 'درباره ما',
      products: 'محصولات',
      catalog: 'کاتالوگ',
      contact: 'تماس با ما',
      getQuote: 'دریافت قیمت',
    },
    hero: {
      companyName: 'شرکت فناوری آتش‌نشانی ژجیانگ آنشون (مسئولیت محدود)',
      title: 'محافظت از جان با',
      titleHighlight: 'ایمنی پیشرفته در برابر آتش',
      description: 'تولیدکننده پیشرو تجهیزات حرفه‌ای آتش‌نشانی. ما راه‌حل‌های قابل اعتمادی برای ایمنی صنعتی، تجاری و مسکونی ارائه می‌دهیم.',
      viewProducts: 'مشاهده محصولات',
      contactSales: 'تماس با واحد فروش',
    },
    about: {
      title: 'تعالی در فناوری ایمنی آتش‌نشانی',
      desc1: 'شرکت فناوری آتش‌نشانی ژجیانگ آنشون، تولیدکننده و تامین‌کننده پیشرو تجهیزات حفاظت در برابر آتش با کیفیت بالا است. مستقر در ژجیانگ، چین، ما در تولید طیف گسترده‌ای از کپسول‌های آتش‌نشانی، قرقره‌های شلنگ، هیدرانت‌ها و لوازم جانبی ایمنی تخصص داریم.',
      desc2: 'ماموریت ما محافظت از جان و مال مردم از طریق فناوری‌های نوآورانه و راه‌حل‌های ایمنی قابل اعتماد است. با سال‌ها تجربه و تعهد به استانداردهای بین‌المللی، ما به مشتریان در سراسر جهان خدمات ارائه می‌دهیم و اطمینان حاصل می‌کنیم که هر محصول با گواهینامه‌های ایمنی دقیق مطابقت دارد.',
      iso: 'دارای گواهینامه ISO 9001',
      ce: 'محصولات مورد تایید CE',
      global: 'شبکه صادرات جهانی',
    },
    features: {
      quality: { title: 'کیفیت تایید شده', desc: 'محصولات ما با استانداردها و گواهینامه‌های ایمنی بین‌المللی مطابقت دارند.' },
      tech: { title: 'فناوری پیشرفته', desc: 'استفاده از آخرین فناوری آتش‌نشانی برای حداکثر کارایی.' },
      support: { title: 'پشتیبانی متخصصان', desc: 'راهنمایی و پشتیبانی حرفه‌ای برای تمام نیازهای ایمنی شما در برابر آتش.' },
    },
    stats: {
      years: 'سال تجربه',
      clients: 'مشتریان جهانی',
      certified: 'تاییدیه ایمنی',
      support: 'پشتیبانی متخصصان',
    },
    products: {
      title: 'طیف محصولات ما',
      desc: 'طراحی شده برای قابلیت اطمینان و عملکرد در شرایط بحرانی.',
      items: {
        abc: { name: 'کپسول پودر خشک ABC', desc: 'حفاظت همه‌جانبه برای آتش‌سوزی‌های کلاس A، B و C. موجود در اندازه‌های مختلف.' },
        co2: { name: 'کپسول آتش‌نشانی CO2', desc: 'ایده‌آل برای آتش‌سوزی‌های الکتریکی و خطرات مایعات قابل اشتعال. بدون باقی‌مانده.' },
        water: { name: 'کپسول بر پایه آب', desc: 'خنک‌کنندگی و اطفای موثر برای آتش‌سوزی‌های کلاس A (چوب، کاغذ، منسوجات).' },
        foam: { name: 'کپسول آتش‌نشانی فوم', desc: 'عالی برای آتش‌سوزی مایعات قابل اشتعال کلاس B. ایجاد لایه محافظ.' },
        stainless: { name: 'سری استیل ضد زنگ', desc: 'کپسول‌های ممتاز مقاوم در برابر خوردگی برای محیط‌های سخت.' },
        automatic: { name: 'کپسول خودکار', desc: 'سیستم اطفای خودکار سقفی برای مناطق بدون اپراتور.' },
      },
    },
    gallery: {
      title: 'گالری محصولات',
      desc: 'نگاهی جامع به تعالی ما در تولید.',
    },
    contact: {
      title: 'با ما در تماس باشید',
      desc: 'برای استعلام، سفارشات عمده یا پشتیبانی فنی با تیم فروش ما تماس بگیرید.',
      whatsapp: 'واتس‌اپ / تلفن',
      email: 'آدرس ایمیل',
      location: 'موقعیت',
      owner: 'مالک',
      form: {
        name: 'نام کامل',
        email: 'ایمیل',
        subject: 'موضوع',
        message: 'پیام',
        send: 'ارسال پیام',
        placeholders: {
          name: 'علی احمدی',
          email: 'ali@example.com',
          subject: 'استعلام محصول',
          message: 'در مورد نیازهای خود به ما بگویید...',
        },
      },
    },
    footer: {
      rights: 'تمامی حقوق محفوظ است.',
      privacy: 'سیاست حفظ حریم خصوصی',
      terms: 'شرایط خدمات',
      followUs: 'ما را دنبال کنید',
    },
    testimonials: {
      title: 'نظرات مشتریان',
      desc: 'ببینید چگونه به سازمان‌ها در سراسر جهان کمک می‌کنیم تا ایمن بمانند.',
      readMore: 'بیشتر بخوانید',
      readLess: 'بستن',
      items: {
        client1: {
          name: 'احمد الفارسی',
          company: 'Gulf Industrial Group',
          shortDesc: 'کیفیت و قابلیت اطمینان استثنایی برای تاسیسات نفت و گاز ما.',
          fullDesc: 'ما بیش از ۵ سال است که از کپسول‌های آتش‌نشانی آنشون استفاده می‌کنیم. محصولات آن‌ها برای تحمل محیط‌های سخت ساخته شده‌اند و هرگز در طول تمرینات ایمنی ما را ناامید نکرده‌اند. سری استیل ضد زنگ به ویژه به دلیل مقاومت در برابر خوردگی بسیار چشمگیر است.',
        },
        client2: {
          name: 'النا پترووا',
          company: 'EuroLogistics Hub',
          shortDesc: 'سیستم‌های اطفای خودکار انبار ما را از یک فاجعه احتمالی نجات دادند.',
          fullDesc: 'سال گذشته، یک آتش‌سوزی الکتریکی کوچک در مرکز توزیع اصلی ما رخ داد. کپسول‌های خودکار سقفی آنشون بلافاصله فعال شدند و آتش را قبل از گسترش مهار کردند. فناوری آن‌ها واقعاً نجات‌دهنده جان انسان‌هاست.',
        },
        client3: {
          name: 'کارلوس مندز',
          company: 'SafeBuild Construction',
          shortDesc: 'پشتیبانی حرفه‌ای و گواهینامه‌های استاندارد بالا.',
          fullDesc: 'ما به عنوان یک شرکت ساختمانی، به رعایت دقیق استانداردهای ایمنی نیاز داریم. آنشون تمام گواهینامه‌های لازم (ISO، CE) را ارائه می‌دهد که فرآیند انطباق ما را بسیار روان‌تر می‌کند. تیم پشتیبانی متخصص آن‌ها همیشه آماده کمک است.',
        },
      },
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      products: 'Produtos',
      catalog: 'Catálogo',
      contact: 'Contato',
      getQuote: 'Solicitar Orçamento',
    },
    hero: {
      companyName: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd.',
      title: 'Protegendo Vidas com',
      titleHighlight: 'Segurança Contra Incêndio Avançada',
      description: 'Fabricante líder de equipamentos profissionais de combate a incêndio. Oferecemos soluções confiáveis para segurança industrial, comercial e residencial.',
      viewProducts: 'Ver Produtos',
      contactSales: 'Contatar Vendas',
    },
    about: {
      title: 'Excelência em Tecnologia de Segurança Contra Incêndio',
      desc1: 'Zhejiang Anshun Fire Fighting Technology Co., Ltd. é um fabricante e fornecedor líder de equipamentos de proteção contra incêndio de alta qualidade. Com sede em Zhejiang, China, nos especializamos na produção de uma ampla gama de extintores de incêndio, carretéis de mangueira, hidrantes e acessórios de segurança.',
      desc2: 'Nossa missão é proteger vidas e propriedades por meio de tecnologia inovadora e soluções de segurança confiáveis. Com anos de experiência e compromisso com os padrões internacionais, atendemos clientes globalmente, garantindo que cada produto atenda a rigorosas certificações de segurança.',
      iso: 'Certificado ISO 9001',
      ce: 'Produtos Aprovados pela CE',
      global: 'Rede de Exportação Global',
    },
    features: {
      quality: { title: 'Qualidade Certificada', desc: 'Nossos produtos atendem aos padrões e certificações internacionais de segurança.' },
      tech: { title: 'Tecnologia Avançada', desc: 'Utilizando a mais recente tecnologia de combate a incêndio para máxima eficiência.' },
      support: { title: 'Suporte Especializado', desc: 'Orientação e suporte profissional para todas as suas necessidades de segurança contra incêndio.' },
    },
    stats: {
      years: 'Anos de Experiência',
      clients: 'Clientes Globais',
      certified: 'Segurança Certificada',
      support: 'Suporte Especializado',
    },
    products: {
      title: 'Nossa Linha de Produtos',
      desc: 'Projetados para confiabilidade e desempenho em situações críticas.',
      items: {
        abc: { name: 'Extintor de Pó Químico ABC', desc: 'Proteção versátil para incêndios de Classe A, B e C. Disponível em vários tamanhos.' },
        co2: { name: 'Extintor de CO2', desc: 'Ideal para incêndios elétricos e riscos de líquidos inflamáveis. Não deixa resíduos.' },
        water: { name: 'Extintor à Base de Água', desc: 'Resfriamento e extinção eficazes para incêndios de Classe A (madeira, papel, têxteis).' },
        foam: { name: 'Extintor de Espuma', desc: 'Excelente para incêndios de líquidos inflamáveis de Classe B. Cria uma película de vedação.' },
        stainless: { name: 'Série em Aço Inoxidável', desc: 'Extintores premium resistentes à corrosão para ambientes severos.' },
        automatic: { name: 'Extintor Automático', desc: 'Supressão automática montada no teto para áreas não tripuladas.' },
      },
    },
    gallery: {
      title: 'Galeria de Produtos',
      desc: 'Uma visão abrangente de nossa excelência em fabricação.',
    },
    contact: {
      title: 'Entre em Contato',
      desc: 'Contate nossa equipe de vendas para consultas, pedidos em massa ou suporte técnico.',
      whatsapp: 'WhatsApp / Telefone',
      email: 'Endereço de E-mail',
      location: 'Localização',
      owner: 'Proprietário',
      form: {
        name: 'Nome Completo',
        email: 'E-mail',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        placeholders: {
          name: 'João Silva',
          email: 'joao@exemplo.com',
          subject: 'Consulta de Produto',
          message: 'Conte-nos sobre suas necessidades...',
        },
      },
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      followUs: 'Siga-nos',
    },
    testimonials: {
      title: 'Depoimentos de Clientes',
      desc: 'Veja como ajudamos organizações em todo o mundo a se manterem seguras.',
      readMore: 'Ler Mais',
      readLess: 'Ler Menos',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: 'Gulf Industrial Group',
          shortDesc: 'Qualidade e confiabilidade excepcionais para nossas instalações de petróleo e gás.',
          fullDesc: 'Usamos os extintores Anshun há mais de 5 anos. Seus produtos são construídos para resistir a ambientes severos e nunca nos falharam durante os exercícios de segurança. A série em aço inoxidável é particularmente impressionante por sua resistência à corrosão.',
        },
        client2: {
          name: 'Elena Petrova',
          company: 'EuroLogistics Hub',
          shortDesc: 'Os sistemas de supressão automática salvaram nosso armazém de um desastre potencial.',
          fullDesc: 'No ano passado, um pequeno incêndio elétrico começou em nosso centro de distribuição principal. Os extintores automáticos montados no teto da Anshun foram ativados instantaneamente, contendo o incêndio antes que ele pudesse se espalhar. Sua tecnologia é verdadeiramente salvadora de vidas.',
        },
        client3: {
          name: 'Carlos Mendez',
          company: 'SafeBuild Construction',
          shortDesc: 'Suporte profissional e certificações de alto padrão.',
          fullDesc: 'Como empresa de construção, exigimos o cumprimento rigoroso dos padrões de segurança. A Anshun fornece todas as certificações necessárias (ISO, CE), o que torna nosso processo de conformidade muito mais suave. Sua equipe de suporte especializado está sempre pronta para ajudar.',
        },
      },
    },
  },
  zh: {
    nav: {
      about: '关于我们',
      products: '产品中心',
      catalog: '产品目录',
      contact: '联系我们',
      getQuote: '获取报价',
    },
    hero: {
      companyName: '浙江安顺消防科技有限公司',
      title: '用先进消防技术',
      titleHighlight: '守护生命安全',
      description: '领先的专业消防设备制造商。我们为工业、商业和住宅安全提供可靠的解决方案。',
      viewProducts: '查看产品',
      contactSales: '联系销售',
    },
    about: {
      title: '卓越的消防安全技术',
      desc1: '浙江安顺消防科技有限公司是高质量消防设备的领先制造商 and 供应商。公司总部位于中国浙江，专业生产各种灭火器、软管卷盘、消火栓及安全配件。',
      desc2: '我们的使命是通过创新技术和可靠的安全解决方案保护生命和财产。凭借多年的经验和对国际标准的承诺，我们为全球客户提供服务，确保每件产品都符合严格的安全认证。',
      iso: 'ISO 9001 认证',
      ce: 'CE 认证产品',
      global: '全球出口网络',
    },
    features: {
      quality: { title: '质量认证', desc: '我们的产品符合国际安全标准和认证。' },
      tech: { title: '先进技术', desc: '利用最新的消防技术实现最高效率。' },
      support: { title: '专家支持', desc: '为您的所有消防安全需求提供专业指导和支持。' },
    },
    stats: {
      years: '年行业经验',
      clients: '全球客户',
      certified: '安全认证',
      support: '专家支持',
    },
    products: {
      title: '我们的产品范围',
      desc: '专为关键情况下的可靠性和性能而设计。',
      items: {
        abc: { name: 'ABC 干粉灭火器', desc: '适用于 A、B 和 C 类火灾的多功能消防保护。提供多种尺寸。' },
        co2: { name: '二氧化碳灭火器', desc: '电气火灾和易燃液体风险的理想选择。不留残渣。' },
        water: { name: '水基灭火器', desc: '对 A 类火灾（木材、纸张、纺织品）有效的冷却和灭火。' },
        foam: { name: '泡沫灭火器', desc: '非常适合 B 类易燃液体火灾。形成密封膜。' },
        stainless: { name: '不锈钢系列', desc: '适用于恶劣环境的高级耐腐蚀灭火器。' },
        automatic: { name: '自动灭火器', desc: '用于无人区域的吸顶式自动灭火系统。' },
      },
    },
    gallery: {
      title: '产品展示',
      desc: '全面展示我们的卓越制造。',
    },
    contact: {
      title: '联系我们',
      desc: '联系我们的销售团队进行咨询、批量订购或技术支持。',
      whatsapp: 'WhatsApp / 电话',
      email: '电子邮箱',
      location: '地点',
      owner: '负责人',
      form: {
        name: '姓名',
        email: '邮箱',
        subject: '主题',
        message: '留言内容',
        send: '发送留言',
        placeholders: {
          name: '张三',
          email: 'zhangsan@example.com',
          subject: '产品咨询',
          message: '请告诉我们您的需求...',
        },
      },
    },
    footer: {
      rights: '版权所有。',
      privacy: '隐私政策',
      terms: '服务条款',
      followUs: '关注我们',
    },
    testimonials: {
      title: '客户评价',
      desc: '了解我们如何帮助全球组织保持安全。',
      readMore: '阅读更多',
      readLess: '收起',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: '海湾工业集团',
          shortDesc: '为我们的石油和天然气设施提供卓越的质量和可靠性。',
          fullDesc: '我们使用安顺灭火器已有 5 年多。他们的产品经久耐用，能适应恶劣环境，在安全演习中从未让我们失望。不锈钢系列因其耐腐蚀性而特别令人印象深刻。',
        },
        client2: {
          name: 'Elena Petrova',
          company: '欧洲物流枢纽',
          shortDesc: '自动灭火系统使我们的仓库免于潜在的灾难。',
          fullDesc: '去年，我们的主要配送中心发生了小型电气火灾。安顺的吸顶式自动灭火器立即启动，在火势蔓延前将其控制。他们的技术确实拯救了生命。',
        },
        client3: {
          name: 'Carlos Mendez',
          company: 'SafeBuild 建筑公司',
          shortDesc: '专业的支持和高标准的认证。',
          fullDesc: '作为一家建筑公司，我们需要严格遵守安全标准。安顺提供所有必要的认证（ISO、CE），这使我们的合规过程更加顺利。他们的专家支持团队随时准备提供帮助。',
        },
      },
    },
  },
  ja: {
    nav: {
      about: '会社概要',
      products: '製品情報',
      catalog: 'カタログ',
      contact: 'お問い合わせ',
      getQuote: '見積もり依頼',
    },
    hero: {
      companyName: '浙江安順消防科技有限公司',
      title: '先進の消防技術で',
      titleHighlight: '命を守る',
      description: 'プロフェッショナルな消防設備のリーディングメーカー。産業、商業、住宅の安全のための信頼できるソリューションを提供します。',
      viewProducts: '製品を見る',
      contactSales: '営業に相談',
    },
    about: {
      title: '消防安全技術の卓越性',
      desc1: '浙江安順消防科技有限公司は、高品質な防火設備の主要メーカーおよびサプライヤーです。中国の浙江省に拠点を置き、幅広い消火器、ホースリール、消火栓、安全アクセサリーの製造を専門としています。',
      desc2: '私たちの使命は、革新的な技術と信頼できる安全ソリューションを通じて、生命と財産を守ることです。長年の経験と国際標準へのコミットメントにより、世界中のお客様にサービスを提供し、すべての製品が厳格な安全認証を満たしていることを保証します。',
      iso: 'ISO 9001 認証取得',
      ce: 'CE 承認製品',
      global: 'グローバル輸出ネットワーク',
    },
    features: {
      quality: { title: '品質認証', desc: '当社の製品は国際的な安全基準と認証を満たしています。' },
      tech: { title: '先進技術', desc: '最新の消防技術を活用し、最大限の効率を実現します。' },
      support: { title: '専門家によるサポート', desc: 'あらゆる消防安全のニーズに対して、専門的なガイダンスとサポートを提供します。' },
    },
    stats: {
      years: '年の経験',
      clients: 'グローバルクライアント',
      certified: '安全認証済み',
      support: '専門家サポート',
    },
    products: {
      title: '製品ラインナップ',
      desc: '重要な状況での信頼性とパフォーマンスを追求して設計されています。',
      items: {
        abc: { name: 'ABC 粉末消火器', desc: 'クラス A、B、C の火災に対応する汎用性の高い防火。さまざまなサイズをご用意。' },
        co2: { name: 'CO2 消火器', desc: '電気火災や引火性液体のリスクに最適。残渣を残しません。' },
        water: { name: '強化液消火器', desc: 'クラス A 火災（木材、纸、繊維）に対して効果的な冷却と消火。' },
        foam: { name: '機械泡消火器', desc: 'クラス B 引火性液体火災に最適。密閉膜を形成します。' },
        stainless: { name: 'ステンレスシリーズ', desc: '過酷な環境向けのプレミアムな耐食性消火器。' },
        automatic: { name: '自動消火装置', desc: '無人エリア向けの天井取付型自動消火システム。' },
      },
    },
    gallery: {
      title: '製品ギャラリー',
      desc: '当社の製造における卓越性を包括的にご覧ください。',
    },
    contact: {
      title: 'お問い合わせ',
      desc: 'お問い合わせ、大量注文、技術サポートについては、当社の営業チームまでご連絡ください。',
      whatsapp: 'WhatsApp / 電話',
      email: 'メールアドレス',
      location: '所在地',
      owner: '責任者',
      form: {
        name: 'お名前',
        email: 'メール',
        subject: '件名',
        message: 'メッセージ',
        send: 'メッセージを送信',
        placeholders: {
          name: '山田 太郎',
          email: 'yamada@example.com',
          subject: '製品に関するお問い合わせ',
          message: 'ご要望をお聞かせください...',
        },
      },
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      followUs: 'フォローする',
    },
    testimonials: {
      title: 'お客様の声',
      desc: '世界中の組織がどのように安全を維持しているかをご覧ください。',
      readMore: '詳しく読む',
      readLess: '閉じる',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: 'ガルフ・インダストリアル・グループ',
          shortDesc: '当社の石油・ガス施設に対する並外れた品質と信頼性。',
          fullDesc: '安順の消火器を5年以上使用しています。過酷な環境に耐えるように作られており、安全訓練中に一度も失敗したことはありません。ステンレスシリーズは特に耐食性が素晴らしいです。',
        },
        client2: {
          name: 'Elena Petrova',
          company: 'ユーロ・ロジスティクス・ハブ',
          shortDesc: '自動消火システムが倉庫を潜在的な災害から救いました。',
          fullDesc: '昨年、メインの配送センターで小さな電気火災が発生しました。安順の天井取付型自動消火器が即座に作동し、延焼する前に火を抑え込みました。彼らの技術はまさに命を救うものです。',
        },
        client3: {
          name: 'Carlos Mendez',
          company: 'セーフビルド建設',
          shortDesc: 'プロフェッショナルなサポートと高水準の認証。',
          fullDesc: '建設会社として、安全基準の厳格な遵守が求められます。安順は必要なすべての認証（ISO、CE）を提供してくれるため、コンプライアンスプロセスが非常にスムーズになります。専門サポートチームも常に助けてくれます。',
        },
      },
    },
  },
  ko: {
    nav: {
      about: '회사 소개',
      products: '제품 정보',
      catalog: '카탈로그',
      contact: '문의하기',
      getQuote: '견적 요청',
    },
    hero: {
      companyName: '절강 안순 소방 과학 기술 유한 공사',
      title: '첨단 소방 기술로',
      titleHighlight: '생명을 보호합니다',
      description: '선도적인 전문 소방 장비 제조업체. 산업, 상업 및 주거용 안전을 위한 신뢰할 수 있는 솔루션을 제공합니다.',
      viewProducts: '제품 보기',
      contactSales: '영업 문의',
    },
    about: {
      title: '소방 안전 기술의 우수성',
      desc1: '절강 안순 소방 과학 기술 유한 공사는 고품질 소방 장비의 주요 제조업체 및 공급업체입니다. 중국 절강성에 본사를 두고 있으며 다양한 소화기, 호스 릴, 소화전 및 안전 액세서리 생산을 전문으로 합니다.',
      desc2: '우리의 사명은 혁신적인 기술과 신뢰할 수 있는 안전 솔루션을 통해 생명과 재산을 보호하는 것입니다. 수년간의 경험과 국제 표준에 대한 헌신을 바탕으로 전 세계 고객에게 서비스를 제공하며 모든 제품이 엄격한 안전 인증을 충족하도록 보장합니다.',
      iso: 'ISO 9001 인증 획득',
      ce: 'CE 승인 제품',
      global: '글로벌 수출 네트워크',
    },
    features: {
      quality: { title: '품질 인증', desc: '당사의 제품은 국제 안전 표준 및 인증을 준수합니다.' },
      tech: { title: '첨단 기술', desc: '최신 소방 기술을 활용하여 효율성을 극대화합니다.' },
      support: { title: '전문가 지원', desc: '모든 소방 안전 요구 사항에 대한 전문적인 안내와 지원을 제공합니다.' },
    },
    stats: {
      years: '년의 경험',
      clients: '글로벌 고객',
      certified: '안전 인증 완료',
      support: '전문가 지원',
    },
    products: {
      title: '제품 라인업',
      desc: '중요한 상황에서의 신뢰성과 성능을 위해 설계되었습니다.',
      items: {
        abc: { name: 'ABC 분말 소화기', desc: 'A, B, C급 화재에 대한 다목적 방화. 다양한 크기 제공.' },
        co2: { name: 'CO2 소화기', desc: '전기 화재 및 인화성 액체 위험에 이상적. 잔여물이 남지 않음.' },
        water: { name: '수계 소화기', desc: 'A급 화재(나무, 종이, 섬유)에 대한 효과적인 냉각 및 소화.' },
        foam: { name: '폼 소화기', desc: 'B급 인화성 액체 화재에 탁월. 밀폐막 형성.' },
        stainless: { name: '스테인리스 시리즈', desc: '가혹한 환경을 위한 프리미엄 부식 방지 소화기.' },
        automatic: { name: '자동 소화 장치', desc: '무인 구역을 위한 천장 장착형 자동 억제 시스템.' },
      },
    },
    gallery: {
      title: '제품 갤러리',
      desc: '당사의 제조 우수성에 대한 포괄적인 모습.',
    },
    contact: {
      title: '문의하기',
      desc: '문의, 대량 주문 또는 기술 지원을 위해 당사 영업 팀에 연락하십시오.',
      whatsapp: 'WhatsApp / 전화',
      email: '이메일 주소',
      location: '위치',
      owner: '책임자',
      form: {
        name: '이름',
        email: '이메일',
        subject: '제목',
        message: '메시지',
        send: '메시지 보내기',
        placeholders: {
          name: '홍길동',
          email: 'hong@example.com',
          subject: '제품 문의',
          message: '요구 사항을 알려주세요...',
        },
      },
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: '개인정보 처리방침',
      terms: '이용 약관',
      followUs: '팔로우하기',
    },
    testimonials: {
      title: '고객 후기',
      desc: '전 세계 조직들이 어떻게 안전을 유지하고 있는지 확인해 보세요.',
      readMore: '더 보기',
      readLess: '닫기',
      items: {
        client1: {
          name: 'Ahmed Al-Farsi',
          company: '걸프 산업 그룹',
          shortDesc: '당사의 석유 및 가스 시설에 대한 탁월한 품질과 신뢰성.',
          fullDesc: '안순 소화기를 5년 이상 사용해 왔습니다. 그들의 제품은 가혹한 환경을 견디도록 제작되었으며 안전 훈련 중에 한 번도 실패한 적이 없습니다. 스테인리스 시리즈는 특히 부식 방지 기능이 인상적입니다.',
        },
        client2: {
          name: 'Elena Petrova',
          company: '유로 로지스틱스 허브',
          shortDesc: '자동 억제 시스템이 우리 창고를 잠재적인 재난으로부터 구했습니다.',
          fullDesc: '작년에 메인 물류 센터에서 작은 전기 화재가 발생했습니다. 안순의 천장 장착형 자동 소화기가 즉시 작동하여 화재가 확산되기 전에 진압했습니다. 그들의 기술은 정말 생명을 구하는 기술입니다.',
        },
        client3: {
          name: 'Carlos Mendez',
          company: '세이프빌드 건설',
          shortDesc: '전문적인 지원 및 높은 수준의 인증.',
          fullDesc: '건설 회사로서 우리는 안전 표준을 엄격히 준수해야 합니다. 안순은 필요한 모든 인증(ISO, CE)을 제공하여 규정 준수 프로세스를 훨씬 원활하게 만들어 줍니다. 전문 지원 팀도 항상 도와줄 준비가 되어 있습니다.',
        },
      },
    },
  },
};
