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
    subtitle: string;
    viewProducts: string;
    getQuote: string;
    categories: {
      title: string;
      portable: { title: string; desc: string };
      mediumLarge: { title: string; desc: string };
      dryPowder: { title: string; desc: string };
      industrial: { title: string; desc: string };
    };
    filters: {
      all: string;
      type: string;
      capacity: string;
      useCase: string;
      waterBased: string;
      dryPowder: string;
      small: string;
      medium: string;
      large: string;
      home: string;
      car: string;
      industrial: string;
    };
    specs: {
      capacity: string;
      material: string;
      rating: string;
    };
    tags: {
      bestSeller: string;
      carUse: string;
      industrial: string;
      homeUse: string;
    };
    features: {
      eco: { title: string; desc: string };
      protection: { title: string; desc: string };
      portable: { title: string; desc: string };
      industrial: { title: string; desc: string };
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
      title: 'Fire Safety Solutions',
      subtitle: 'Eco-Friendly Water-Based & Dry Powder Fire Extinguishers',
      viewProducts: 'View Products',
      getQuote: 'Get Quote',
      categories: {
        title: 'Product Categories',
        portable: { title: 'Water-Based Portable', desc: 'Small Aerosol Style for cars and kitchens.' },
        mediumLarge: { title: 'Water-Based Medium & Large', desc: 'Premium stainless steel for home and office.' },
        dryPowder: { title: 'Dry Powder Extinguishers', desc: 'Versatile protection for multiple fire classes.' },
        industrial: { title: 'Industrial / Trolley', desc: 'High-capacity solutions for heavy-duty protection.' },
      },
      filters: {
        all: 'All Products',
        type: 'Type',
        capacity: 'Capacity',
        useCase: 'Use Case',
        waterBased: 'Water-Based',
        dryPowder: 'Dry Powder',
        small: 'Small (< 1kg)',
        medium: 'Medium (1-6kg)',
        large: 'Large (> 6kg)',
        home: 'Home',
        car: 'Car',
        industrial: 'Industrial',
      },
      specs: {
        capacity: 'Capacity',
        material: 'Material',
        rating: 'Fire Rating',
      },
      tags: {
        bestSeller: 'Best Seller',
        carUse: 'Car Use',
        industrial: 'Industrial',
        homeUse: 'Home Use',
      },
      features: {
        eco: { title: 'Eco-Friendly Technology', desc: 'Environmentally safe agents.' },
        protection: { title: 'Multi-Fire Protection', desc: 'Covers A, B, E, F fire classes.' },
        portable: { title: 'Compact & Portable', desc: 'Easy to handle in emergencies.' },
        industrial: { title: 'Industrial Grade', desc: 'Built for maximum performance.' },
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
      title: 'Soluciones de Seguridad Contra Incendios',
      subtitle: 'Extintores Ecológicos de Agua y Polvo Seco',
      viewProducts: 'Ver Productos',
      getQuote: 'Obtener Cotización',
      categories: {
        title: 'Categorías de Productos',
        portable: { title: 'Portátil a Base de Agua', desc: 'Estilo aerosol pequeño para autos y cocinas.' },
        mediumLarge: { title: 'Agua Mediano y Grande', desc: 'Acero inoxidable premium para hogar y oficina.' },
        dryPowder: { title: 'Extintores de Polvo Seco', desc: 'Protección versátil para múltiples clases de fuego.' },
        industrial: { title: 'Industrial / Carro', desc: 'Soluciones de alta capacidad para protección pesada.' },
      },
      filters: {
        all: 'Todos los Productos',
        type: 'Tipo',
        capacity: 'Capacidad',
        useCase: 'Uso',
        waterBased: 'A Base de Agua',
        dryPowder: 'Polvo Seco',
        small: 'Pequeño (< 1kg)',
        medium: 'Mediano (1-6kg)',
        large: 'Grande (> 6kg)',
        home: 'Hogar',
        car: 'Auto',
        industrial: 'Industrial',
      },
      specs: {
        capacity: 'Capacidad',
        material: 'Material',
        rating: 'Clasificación',
      },
      tags: {
        bestSeller: 'Más Vendido',
        carUse: 'Uso en Auto',
        industrial: 'Industrial',
        homeUse: 'Uso Doméstico',
      },
      features: {
        eco: { title: 'Tecnología Ecológica', desc: 'Agentes seguros para el medio ambiente.' },
        protection: { title: 'Protección Multi-Fuego', desc: 'Cubre clases de fuego A, B, E, F.' },
        portable: { title: 'Compacto y Portátil', desc: 'Fácil de manejar en emergencias.' },
        industrial: { title: 'Grado Industrial', desc: 'Construido para el máximo rendimiento.' },
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
      title: 'Fire Safety Solutions',
      subtitle: 'Eco-Friendly Water-Based & Dry Powder Fire Extinguishers',
      viewProducts: 'View Products',
      getQuote: 'Get Quote',
      categories: {
        title: 'Product Categories',
        portable: { title: 'Water-Based Portable', desc: 'Small Aerosol Style for cars and kitchens.' },
        mediumLarge: { title: 'Water-Based Medium & Large', desc: 'Premium stainless steel for home and office.' },
        dryPowder: { title: 'Dry Powder Extinguishers', desc: 'Versatile protection for multiple fire classes.' },
        industrial: { title: 'Industrial / Trolley', desc: 'High-capacity solutions for heavy-duty protection.' },
      },
      filters: {
        all: 'All Products',
        type: 'Type',
        capacity: 'Capacity',
        useCase: 'Use Case',
        waterBased: 'Water-Based',
        dryPowder: 'Dry Powder',
        small: 'Small (< 1kg)',
        medium: 'Medium (1-6kg)',
        large: 'Large (> 6kg)',
        home: 'Home',
        car: 'Car',
        industrial: 'Industrial',
      },
      specs: {
        capacity: 'Capacity',
        material: 'Material',
        rating: 'Fire Rating',
      },
      tags: {
        bestSeller: 'Best Seller',
        carUse: 'Car Use',
        industrial: 'Industrial',
        homeUse: 'Home Use',
      },
      features: {
        eco: { title: 'Eco-Friendly Technology', desc: 'Environmentally safe agents.' },
        protection: { title: 'Multi-Fire Protection', desc: 'Covers A, B, E, F fire classes.' },
        portable: { title: 'Compact & Portable', desc: 'Easy to handle in emergencies.' },
        industrial: { title: 'Industrial Grade', desc: 'Built for maximum performance.' },
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
      title: 'حلول السلامة من الحرائق',
      subtitle: 'طفايات حريق مائية وجافة صديقة للبيئة',
      viewProducts: 'عرض المنتجات',
      getQuote: 'طلب اقتباس',
      categories: {
        title: 'فئات المنتجات',
        portable: { title: 'محمول مائي', desc: 'نمط رذاذ صغير للسيارات والمطابخ.' },
        mediumLarge: { title: 'مائي متوسط وكبير', desc: 'فولاذ مقاوم للصدأ ممتاز للمنزل والمكتب.' },
        dryPowder: { title: 'طفايات البودرة الجافة', desc: 'حماية متعددة الاستخدامات لفئات حرائق متعددة.' },
        industrial: { title: 'صناعي / عربة', desc: 'حلول عالية السعة للحماية الشاقة.' },
      },
      filters: {
        all: 'جميع المنتجات',
        type: 'النوع',
        capacity: 'السعة',
        useCase: 'حالة الاستخدام',
        waterBased: 'مائي',
        dryPowder: 'بودرة جافة',
        small: 'صغير (< 1 كجم)',
        medium: 'متوسط (1-6 كجم)',
        large: 'كبير (> 6 كجم)',
        home: 'منزل',
        car: 'سيارة',
        industrial: 'صناعي',
      },
      specs: {
        capacity: 'السعة',
        material: 'المادة',
        rating: 'تصنيف الحريق',
      },
      tags: {
        bestSeller: 'الأكثر مبيعاً',
        carUse: 'استخدام السيارة',
        industrial: 'صناعي',
        homeUse: 'استخدام منزلي',
      },
      features: {
        eco: { title: 'تكنولوجيا صديقة للبيئة', desc: 'مواد آمنة بيئياً.' },
        protection: { title: 'حماية متعددة من الحرائق', desc: 'يغطي فئات الحرائق A, B, E, F.' },
        portable: { title: 'مدمج ومحمول', desc: 'سهل التعامل في حالات الطوارئ.' },
        industrial: { title: 'درجة صناعية', desc: 'مصمم لأقصى أداء.' },
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
      title: 'Solutions de Sécurité Incendie',
      subtitle: 'Extincteurs à Eau et à Poudre Écologiques',
      viewProducts: 'Voir les Produits',
      getQuote: 'Obtenir un Devis',
      categories: {
        title: 'Catégories de Produits',
        portable: { title: 'Eau Portatif', desc: 'Style aérosol pour voitures et cuisines.' },
        mediumLarge: { title: 'Eau Moyen & Grand', desc: 'Acier inoxydable premium pour maison et bureau.' },
        dryPowder: { title: 'Extincteurs à Poudre', desc: 'Protection polyvalente pour plusieurs classes de feu.' },
        industrial: { title: 'Industriel / Sur Roues', desc: 'Solutions haute capacité pour protection intensive.' },
      },
      filters: {
        all: 'Tous les Produits',
        type: 'Type',
        capacity: 'Capacité',
        useCase: 'Usage',
        waterBased: 'À base d\'eau',
        dryPowder: 'Poudre sèche',
        small: 'Petit (< 1kg)',
        medium: 'Moyen (1-6kg)',
        large: 'Grand (> 6kg)',
        home: 'Maison',
        car: 'Voiture',
        industrial: 'Industriel',
      },
      specs: {
        capacity: 'Capacité',
        material: 'Matériau',
        rating: 'Classe de feu',
      },
      tags: {
        bestSeller: 'Meilleure Vente',
        carUse: 'Usage Voiture',
        industrial: 'Industriel',
        homeUse: 'Usage Maison',
      },
      features: {
        eco: { title: 'Technologie Écologique', desc: 'Agents respectueux de l\'environnement.' },
        protection: { title: 'Protection Multi-Feux', desc: 'Couvre les classes A, B, E, F.' },
        portable: { title: 'Compact & Portable', desc: 'Facile à manipuler en urgence.' },
        industrial: { title: 'Qualité Industrielle', desc: 'Conçu pour une performance maximale.' },
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
      title: 'Giải pháp An toàn Cháy nổ',
      subtitle: 'Bình chữa cháy gốc nước & bột khô thân thiện với môi trường',
      viewProducts: 'Xem sản phẩm',
      getQuote: 'Nhận báo giá',
      categories: {
        title: 'Danh mục sản phẩm',
        portable: { title: 'Gốc nước di động', desc: 'Kiểu khí dung nhỏ cho ô tô và nhà bếp.' },
        mediumLarge: { title: 'Gốc nước vừa & lớn', desc: 'Thép không gỉ cao cấp cho gia đình và văn phòng.' },
        dryPowder: { title: 'Bình chữa cháy bột khô', desc: 'Bảo vệ đa năng cho nhiều loại đám cháy.' },
        industrial: { title: 'Công nghiệp / Xe đẩy', desc: 'Giải pháp công suất cao cho bảo vệ hạng nặng.' },
      },
      filters: {
        all: 'Tất cả sản phẩm',
        type: 'Loại',
        capacity: 'Dung tích',
        useCase: 'Mục đích sử dụng',
        waterBased: 'Gốc nước',
        dryPowder: 'Bột khô',
        small: 'Nhỏ (< 1kg)',
        medium: 'Vừa (1-6kg)',
        large: 'Lớn (> 6kg)',
        home: 'Gia đình',
        car: 'Ô tô',
        industrial: 'Công nghiệp',
      },
      specs: {
        capacity: 'Dung tích',
        material: 'Chất liệu',
        rating: 'Xếp hạng hỏa hoạn',
      },
      tags: {
        bestSeller: 'Bán chạy nhất',
        carUse: 'Dùng cho ô tô',
        industrial: 'Công nghiệp',
        homeUse: 'Dùng cho gia đình',
      },
      features: {
        eco: { title: 'Công nghệ thân thiện môi trường', desc: 'Chất chữa cháy an toàn môi trường.' },
        protection: { title: 'Bảo vệ đa năng', desc: 'Bao gồm các loại đám cháy A, B, E, F.' },
        portable: { title: 'Nhỏ gọn & Di động', desc: 'Dễ dàng xử lý trong trường hợp khẩn cấp.' },
        industrial: { title: 'Cấp công nghiệp', desc: 'Được chế tạo để đạt hiệu suất tối đa.' },
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
      title: 'अग्नि सुरक्षा समाधान',
      subtitle: 'पर्यावरण के अनुकूल जल-आधारित और सूखा पाउडर अग्निशामक',
      viewProducts: 'उत्पाद देखें',
      getQuote: 'कोट प्राप्त करें',
      categories: {
        title: 'उत्पाद श्रेणियां',
        portable: { title: 'जल-आधारित पोर्टेबल', desc: 'कारों और रसोई के लिए छोटे एरोसोल स्टाइल।' },
        mediumLarge: { title: 'जल-आधारित मध्यम और बड़े', desc: 'घर और कार्यालय के लिए प्रीमियम स्टेनलेस स्टील।' },
        dryPowder: { title: 'सूखा पाउडर अग्निशामक', desc: 'कई अग्नि श्रेणियों के लिए बहुमुखी सुरक्षा।' },
        industrial: { title: 'औद्योगिक / ट्रॉली', desc: 'भारी सुरक्षा के लिए उच्च क्षमता वाले समाधान।' },
      },
      filters: {
        all: 'सभी उत्पाद',
        type: 'प्रकार',
        capacity: 'क्षमता',
        useCase: 'उपयोग का मामला',
        waterBased: 'जल-आधारित',
        dryPowder: 'सूखा पाउडर',
        small: 'छोटा (< 1kg)',
        medium: 'मध्यम (1-6kg)',
        large: 'बड़ा (> 6kg)',
        home: 'घर',
        car: 'कार',
        industrial: 'औद्योगिक',
      },
      specs: {
        capacity: 'क्षमता',
        material: 'सामग्री',
        rating: 'अग्नि रेटिंग',
      },
      tags: {
        bestSeller: 'बेस्ट सेलर',
        carUse: 'कार उपयोग',
        industrial: 'औद्योगिक',
        homeUse: 'घर का उपयोग',
      },
      features: {
        eco: { title: 'पर्यावरण के अनुकूल तकनीक', desc: 'पर्यावरण की दृष्टि से सुरक्षित शमन एजेंट।' },
        protection: { title: 'मल्टी-फायर प्रोटेクション', desc: 'A, B, E, F अग्नि श्रेणियों को कवर करता है।' },
        portable: { title: 'कॉम्पैक्ट और पोर्टेबल', desc: 'आपात स्थिति में संभालना आसान।' },
        industrial: { title: 'औद्योगिक ग्रेड', desc: 'अधिकतम प्रदर्शन के लिए निर्मित।' },
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
      title: 'โซลูชันความปลอดภัยจากอัคคีภัย',
      subtitle: 'เครื่องดับเพลิงสูตรน้ำและผงเคมีแห้งที่เป็นมิตรต่อสิ่งแวดล้อม',
      viewProducts: 'ดูผลิตภัณฑ์',
      getQuote: 'ขอใบเสนอราคา',
      categories: {
        title: 'หมวดหมู่ผลิตภัณฑ์',
        portable: { title: 'สูตรน้ำแบบพกพา', desc: 'แบบสเปรย์ขนาดเล็กสำหรับรถยนต์และห้องครัว' },
        mediumLarge: { title: 'สูตรน้ำขนาดกลางและใหญ่', desc: 'สแตนเลสพรีเมียมสำหรับบ้านและสำนักงาน' },
        dryPowder: { title: 'เครื่องดับเพลิงผงเคมีแห้ง', desc: 'การป้องกันที่หลากหลายสำหรับไฟหลายประเภท' },
        industrial: { title: 'อุตสาหกรรม / แบบรถเข็น', desc: 'โซลูชันความจุสูงสำหรับการป้องกันงานหนัก' },
      },
      filters: {
        all: 'ผลิตภัณฑ์ทั้งหมด',
        type: 'ประเภท',
        capacity: 'ความจุ',
        useCase: 'การใช้งาน',
        waterBased: 'สูตรน้ำ',
        dryPowder: 'ผงเคมีแห้ง',
        small: 'ขนาดเล็ก (< 1 กก.)',
        medium: 'ขนาดกลาง (1-6 กก.)',
        large: 'ขนาดใหญ่ (> 6 กก.)',
        home: 'บ้าน',
        car: 'รถยนต์',
        industrial: 'อุตสาหกรรม',
      },
      specs: {
        capacity: 'ความจุ',
        material: 'วัสดุ',
        rating: 'ระดับการดับไฟ',
      },
      tags: {
        bestSeller: 'ขายดีที่สุด',
        carUse: 'ใช้ในรถยนต์',
        industrial: 'อุตสาหกรรม',
        homeUse: 'ใช้ในบ้าน',
      },
      features: {
        eco: { title: 'เทคโนโลยีเป็นมิตรต่อสิ่งแวดล้อม', desc: 'สารดับเพลิงที่ปลอดภัยต่อสิ่งแวดล้อม' },
        protection: { title: 'การป้องกันไฟหลายประเภท', desc: 'ครอบคลุมไฟประเภท A, B, E, F' },
        portable: { title: 'กะทัดรัดและพกพาสะดวก', desc: 'ใช้งานง่ายในสถานการณ์ฉุกเฉิน' },
        industrial: { title: 'เกรดอุตสาหกรรม', desc: 'สร้างขึ้นเพื่อประสิทธิภาพสูงสุด' },
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
      title: 'راهکارهای ایمنی آتش‌نشانی',
      subtitle: 'کپسول‌های آتش‌نشانی پایه آب و پودر خشک سازگار با محیط زیست',
      viewProducts: 'مشاهده محصولات',
      getQuote: 'دریافت قیمت',
      categories: {
        title: 'دسته‌بندی محصولات',
        portable: { title: 'پایه آب قابل حمل', desc: 'مدل آئروسل کوچک برای خودرو و آشپزخانه.' },
        mediumLarge: { title: 'پایه آب متوسط و بزرگ', desc: 'استیل ضد زنگ ممتاز برای خانه و دفتر.' },
        dryPowder: { title: 'کپسول‌های پودر خشک', desc: 'محافظت چندمنظوره برای انواع مختلف آتش.' },
        industrial: { title: 'صنعتی / چرخ‌دار', desc: 'راهکارهای با ظرفیت بالا برای محافظت سنگین.' },
      },
      filters: {
        all: 'همه محصولات',
        type: 'نوع',
        capacity: 'ظرفیت',
        useCase: 'مورد استفاده',
        waterBased: 'پایه آب',
        dryPowder: 'پودر خشک',
        small: 'کوچک (< 1kg)',
        medium: 'متوسط (1-6kg)',
        large: 'بزرگ (> 6kg)',
        home: 'خانه',
        car: 'خودرو',
        industrial: 'صنعتی',
      },
      specs: {
        capacity: 'ظرفیت',
        material: 'جنس',
        rating: 'درجه آتش',
      },
      tags: {
        bestSeller: 'پرفروش‌ترین',
        carUse: 'استفاده در خودرو',
        industrial: 'صنعتی',
        homeUse: 'استفاده خانگی',
      },
      features: {
        eco: { title: 'تکنولوژی سازگار با محیط زیست', desc: 'عوامل اطفاء حریق ایمن برای محیط زیست.' },
        protection: { title: 'محافظت چندگانه در برابر آتش', desc: 'پوشش کلاس‌های آتش A, B, E, F.' },
        portable: { title: 'فشرده و قابل حمل', desc: 'کاربری آسان در مواقع اضطراری.' },
        industrial: { title: 'درجه صنعتی', desc: 'ساخته شده برای حداکثر کارایی.' },
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
      title: 'Soluções de Segurança Contra Incêndios',
      subtitle: 'Extintores Ecológicos à Base de Água e Pó Seco',
      viewProducts: 'Ver Produtos',
      getQuote: 'Obter Orçamento',
      categories: {
        title: 'Categorias de Produtos',
        portable: { title: 'Base de Água Portátil', desc: 'Estilo aerossol pequeno para carros e cozinhas.' },
        mediumLarge: { title: 'Base de Água Médio e Grande', desc: 'Aço inoxidável premium para casa e escritório.' },
        dryPowder: { title: 'Extintores de Pó Seco', desc: 'Proteção versátil para várias classes de fogo.' },
        industrial: { title: 'Industrial / Carrinho', desc: 'Soluções de alta capacidade para proteção pesada.' },
      },
      filters: {
        all: 'Todos os Produtos',
        type: 'Tipo',
        capacity: 'Capacidade',
        useCase: 'Uso',
        waterBased: 'À base de água',
        dryPowder: 'Pó seco',
        small: 'Pequeno (< 1kg)',
        medium: 'Médio (1-6kg)',
        large: 'Grande (> 6kg)',
        home: 'Casa',
        car: 'Carro',
        industrial: 'Industrial',
      },
      specs: {
        capacity: 'Capacidade',
        material: 'Material',
        rating: 'Classe de fogo',
      },
      tags: {
        bestSeller: 'Mais Vendido',
        carUse: 'Uso Automóvel',
        industrial: 'Industrial',
        homeUse: 'Uso Doméstico',
      },
      features: {
        eco: { title: 'Tecnologia Ecológica', desc: 'Agentes seguros para o ambiente.' },
        protection: { title: 'Proteção Multi-Fogo', desc: 'Cobre as classes A, B, E, F.' },
        portable: { title: 'Compacto e Portátil', desc: 'Fácil de manusear em emergências.' },
        industrial: { title: 'Qualidade Industrial', desc: 'Construído para o máximo desempenho.' },
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
      title: '消防安全解决方案',
      subtitle: '环保型水基和干粉灭火器',
      viewProducts: '查看产品',
      getQuote: '获取报价',
      categories: {
        title: '产品类别',
        portable: { title: '水基便携式', desc: '适用于汽车和厨房的小型气溶胶式。' },
        mediumLarge: { title: '水基中大型', desc: '适用于家庭和办公室的高级不锈钢材质。' },
        dryPowder: { title: '干粉灭火器', desc: '适用于多种火灾类别的多功能保护。' },
        industrial: { title: '工业/推车式', desc: '适用于重型保护的高容量解决方案。' },
      },
      filters: {
        all: '所有产品',
        type: '类型',
        capacity: '容量',
        useCase: '使用场景',
        waterBased: '水基',
        dryPowder: '干粉',
        small: '小型 (< 1kg)',
        medium: '中型 (1-6kg)',
        large: '大型 (> 6kg)',
        home: '家庭',
        car: '汽车',
        industrial: '工业',
      },
      specs: {
        capacity: '容量',
        material: '材质',
        rating: '灭火等级',
      },
      tags: {
        bestSeller: '畅销款',
        carUse: '车载',
        industrial: '工业',
        homeUse: '家用',
      },
      features: {
        eco: { title: '环保技术', desc: '环境安全型灭火剂。' },
        protection: { title: '多重火灾保护', desc: '覆盖 A, B, E, F 类火灾。' },
        portable: { title: '紧凑便携', desc: '紧急情况下易于操作。' },
        industrial: { title: '工业级', desc: '专为最高性能打造。' },
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
      title: '消防安全ソリューション',
      subtitle: '環境に優しい強化液＆粉末消火器',
      viewProducts: '製品を見る',
      getQuote: '見積もりを依頼',
      categories: {
        title: '製品カテゴリー',
        portable: { title: '強化液ポータブル', desc: '車やキッチンに最適な小型エアゾールタイプ。' },
        mediumLarge: { title: '强化液中・大型', desc: '家庭やオフィス向けのプレミアムステンレス製。' },
        dryPowder: { title: '粉末消火器', desc: '複数の火災クラスに対応する汎用性の高い保護。' },
        industrial: { title: '工業用/大型車輪付', desc: '高負荷な保護のための大容量ソリューション。' },
      },
      filters: {
        all: 'すべての製品',
        type: 'タイプ',
        capacity: '容量',
        useCase: '用途',
        waterBased: '強化液',
        dryPowder: '粉末',
        small: '小型 (< 1kg)',
        medium: '中型 (1-6kg)',
        large: '大型 (> 6kg)',
        home: '家庭用',
        car: '車載用',
        industrial: '工業用',
      },
      specs: {
        capacity: '容量',
        material: '材質',
        rating: '消火能力単位',
      },
      tags: {
        bestSeller: 'ベストセラー',
        carUse: '車載用',
        industrial: '工業用',
        homeUse: '家庭用',
      },
      features: {
        eco: { title: '環境に優しい技術', desc: '環境に安全な消火剤。' },
        protection: { title: 'マルチ火災保護', desc: 'A, B, E, F クラスの火災に対応。' },
        portable: { title: 'コンパクト＆ポータブル', desc: '緊急時でも扱いやすい。' },
        industrial: { title: '工業グレード', desc: '最高のパフォーマンスを実現。' },
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
      title: '소방 안전 솔루션',
      subtitle: '친환경 수계 및 분말 소화기',
      viewProducts: '제품 보기',
      getQuote: '견적 요청',
      categories: {
        title: '제품 카테고리',
        portable: { title: '수계 휴대용', desc: '자동차 및 주방용 소형 에어로졸 스타일.' },
        mediumLarge: { title: '수계 중대형', desc: '가정 및 사무실용 프리미엄 스테인리스 스틸.' },
        dryPowder: { title: '분말 소화기', desc: '다양한 화재 등급에 대한 다목적 보호.' },
        industrial: { title: '산업용 / 트롤리', desc: '고성능 보호를 위한 대용량 솔루션.' },
      },
      filters: {
        all: '모든 제품',
        type: '유형',
        capacity: '용량',
        useCase: '용도',
        waterBased: '수계',
        dryPowder: '분말',
        small: '소형 (< 1kg)',
        medium: '중형 (1-6kg)',
        large: '대형 (> 6kg)',
        home: '가정용',
        car: '차량용',
        industrial: '산업용',
      },
      specs: {
        capacity: '용량',
        material: '재질',
        rating: '화재 등급',
      },
      tags: {
        bestSeller: '베스트셀러',
        carUse: '차량용',
        industrial: '산업용',
        homeUse: '가정용',
      },
      features: {
        eco: { title: '친환경 기술', desc: '환경적으로 안전한 소화 약제.' },
        protection: { title: '다중 화재 보호', desc: 'A, B, E, F 화재 등급 커버.' },
        portable: { title: '컴팩트 & 휴대용', desc: '비상시 취급 용이.' },
        industrial: { title: '산업 등급', desc: '최고의 성능을 위해 제작.' },
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
