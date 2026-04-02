export type Language = 'en' | 'es' | 'ru' | 'ar' | 'fr' | 'vi' | 'hi' | 'th' | 'fa' | 'pt';

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
    },
  },
};
