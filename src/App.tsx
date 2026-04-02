import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Shield, Flame, CheckCircle, ArrowRight, MessageCircle, Globe, Menu, X } from 'lucide-react';
import { cn } from './lib/utils';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = (lang === 'ar' || lang === 'fa') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const features = [
    {
      title: t.features.quality.title,
      description: t.features.quality.desc,
      icon: Shield,
    },
    {
      title: t.features.tech.title,
      description: t.features.tech.desc,
      icon: Flame,
    },
    {
      title: t.features.support.title,
      description: t.features.support.desc,
      icon: CheckCircle,
    },
  ];

  const productItems = [
    { ...t.products.items.abc, image: 'https://lh3.googleusercontent.com/d/1vQLFInleUyZfNDIWdHD4A_0ycGhIPnXY' },
    { ...t.products.items.co2, image: 'https://lh3.googleusercontent.com/d/1_5OQx5zwvGf5nOPtzI6EzNOOf0HSDHjR' },
    { ...t.products.items.water, image: 'https://lh3.googleusercontent.com/d/1kxHmg9InKV05tDxFKwBhb2isyatFr_Ag' },
    { ...t.products.items.foam, image: 'https://lh3.googleusercontent.com/d/17gsO_rTDD7KkY5C49uSLsSwfEdT7HUyX' },
    { ...t.products.items.stainless, image: 'https://lh3.googleusercontent.com/d/1BNxJBvcNvylIcIs_BFM82-nNuxporYay' },
    { ...t.products.items.automatic, image: 'https://lh3.googleusercontent.com/d/1oc8MdeBe6tQkt7HuWm_orzjKTqizbxo9' },
  ];

  const galleryImages = [
    '1vQLFInleUyZfNDIWdHD4A_0ycGhIPnXY', '1_5OQx5zwvGf5nOPtzI6EzNOOf0HSDHjR', '1kxHmg9InKV05tDxFKwBhb2isyatFr_Ag',
    '17gsO_rTDD7KkY5C49uSLsSwfEdT7HUyX', '1BNxJBvcNvylIcIs_BFM82-nNuxporYay', '1oc8MdeBe6tQkt7HuWm_orzjKTqizbxo9',
    '1FrXg6Hjyd2Ec4sGpuUXPXOvDNeai_AZh', '17Z0JGOyzKTnsaPE0wXt35I2bbLQwXQ53', '1FCg-5hOf6Mz8i7S3sLCWGhAODxooQf52',
    '1BAVxPlEhZMKNKXQaY_dQraJAjD2QnbOP', '1UYoKw3y84iPZ70tX-uCWs98zLq66Epk3', '1-GkaSR-D5kLSoc-jPWB-IkQ_rZdX0jqp',
    '1aYffDa8eRAgROb5C4VIjsAi_T3LmZpW7', '1S_PZ0axWjLrjxp0wpw-eLW259PBhJo9F', '1Bt86MaOq5KVoUfk-QjEMKm2HEqi4Xo2V',
    '1_rAmBVX2OgmL2cHnVJ-4xy0vi_fEjNnF', '1vQRBoWiDPoVZ9gR9kUp-b4dYDItxdBbN', '1gw6V2YdHsAXYk0njBpuSDVrtvbak9XPD',
    '1yPWEAM-ZRUd5cWWrJXcyhgTaX3Pw4WzA', '1vcLU0EUY2HTyNxnBcU9Fi-IgaMvCyhlL', '1R5F-crGDq02JgiNddoLICKKNiMjJOjxq',
    '1QR4xpE34k3OX1aEsNox3oBvMuWGu0Wj_', '1UHhKYF1hmgXWdbJ5YxCWPObETT4o9VrC', '1t0XHp9ygD-Dtcj76QGnwi4deSSdt7qTZ',
    '1obJnZRyOGqzrjD-9Bh5ZFpRjXgJqAJAl', '1pICQM6dNCtcNli52XXp-8ZI-dMYlWYwg', '1ZJ_UcMV0VVrKQNuIbjfw3cMuIgTLjmyd',
    '1vG7wDPLc7gLnsy7ujUd3zamevhtphh5H', '1ZT3Tt0mx96boQed7Ivawfz7bsPpS86_X', '11YUzoqNXcQytqT1CkUCYdfO9D4U6BvPi',
    '1yTNbEXyp-SwWeqvemUN-8PMA-cZM4hCb', '1b6SdmlF8NUyERTTvFv1GIxReLEapo6p0', '1CM2cnziZHOwwvYcwTyWgWZDR3WQFB_YC',
    '1kY-E3XKoYGBnYVrKXlTnUG-pN401RtRP', '1LtYQTOp5AjIW9N7ZtMusRw-zbBR8WxG7', '1AU4nKY_HNScDZrflenTiX-UT7CjFSOK5',
    '1Yu0zYdAfsG9izOFEI3Gnm2yT7oEKomFw', '1QDUr2PJD_X9Xe7thYR-Hrg5khc8uSu7k', '1IPzuHHzz83bj9E_u91EK0mmYbxcdfje_',
    '1fCx_sj-oe7-nrKowYJ8pQclWQK6zzI7G', '1_mfG_llkd2VebWgI8rMXOArLMQqVl6WG', '1d2oCjNxSS25MuOC0Kby-3k8gWfIsaX3t',
    '1cNnowaJECc3o2VLe8ImNwBmaS2LmIJCm', '1tWJVlBQnuXQoINxZddFBdh4c1yRv1CXu', '1AlmHgUHflG66zy8XFWc-p7bvO9Zya-dK',
    '17zgG-RXpdIkjGQ-kHiBlCZbcBeEdO-IV', '1pzv0Tlv7OjLpvVntqKDp4rAr9lHbx9QY', '1p6NopKXhdKErIzqZVOKJLzuiqtowyeYJ',
    '10JU7ou8KM8oUK82pBrUVzj0jXzME2ILy', '1iLdjFDKhUFTNTsdBAIyPD4vnlJklSiR7', '1txdC-jTl-7dDNxgMD3-XebL_Z214V9rm',
    '1lGVvLCsrdvalPNe4REzfn1N8aaVTnT0T', '1V_eIL9LAlgOKUDvvhBgbvBicItxJ0t0v', '1h1HMfwB574HkckcTJUMV9UnfEH64NTHA',
    '1iBMr77HRrJwPjzgP5SPJAGv5x5xEtKEj', '1ITS5Z_zYk0BZ5k4pxqIv3eg7MdSnr1g4', '1SfcnhmD7uvPbmPq1-cn5oFkIpPOJFf87',
    '12PI_TdG5xmAWZMQ0B7KMcObDSP4WPmhT', '1YokQWXGD3hg01R13ldSBXCjOUd03goSI', '1LPomTk5mJvw2OwRQLt8AWRNz9aNvgV9a',
    '17eGl7uhcXphyP77pQUz8WGIFpr1LihuU', '1_-tybS27L_jouRTndeeXfRwWn5iKvTex', '1AjI_wlfBP7eCwmbhdKYR9lq_QXaNBr7M',
    '1PfVS3T7LZ_F-Iy5hckN2AGfdvMCHnisp', '1aik07BJAnvP5EqkzFtArmBmz4gjJ4kV4', '1r-NavhAQHgzabTXw2eGOLzji0KWcfmJ9',
    '1-woJTX_8c155zHY7XjXv4XMph0BhM5Ab', '1ANkAMavyGm4Al2FwGCnm5xyHWLVBWSWn'
  ];
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-600">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
              <Flame size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              ANSHUN <span className="text-red-600">FIRE</span>
            </span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2 border-r border-gray-100 pr-6 mr-2">
              <Globe size={16} className="text-gray-400" />
              <select 
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-sm font-medium text-gray-600 outline-none cursor-pointer hover:text-red-600"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ru">Русский</option>
                <option value="fr">Français</option>
                <option value="vi">Tiếng Việt</option>
                <option value="hi">हिन्दी</option>
                <option value="th">ไทย</option>
                <option value="fa">فارسی</option>
                <option value="pt">Português</option>
                <option value="ar">العربية</option>
              </select>
            </div>
            <a href="#about" className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600">{t.nav.about}</a>
            <a href="#products" className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600">{t.nav.products}</a>
            <a 
              href="https://drive.google.com/file/d/1QJ114itNlZKAy974tEWBtDuwWu0mhsdB/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600"
            >
              {t.nav.catalog}
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600">{t.nav.contact}</a>
            <a
              href="https://wa.me/8615257027383"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg active:scale-95"
            >
              {t.nav.getQuote}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-full border-b border-gray-100 bg-white p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">Language</span>
                </div>
                <select 
                  value={lang}
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-transparent text-sm font-bold text-red-600 outline-none cursor-pointer"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="ru">Русский</option>
                  <option value="fr">Français</option>
                  <option value="vi">Tiếng Việt</option>
                  <option value="hi">हिन्दी</option>
                  <option value="th">ไทย</option>
                  <option value="fa">فارسی</option>
                  <option value="pt">Português</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
              <a 
                href="#about" 
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a 
                href="#products" 
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.products}
              </a>
              <a 
                href="https://drive.google.com/file/d/1QJ114itNlZKAy974tEWBtDuwWu0mhsdB/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.catalog}
              </a>
              <a 
                href="#contact" 
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
              <a
                href="https://wa.me/8615257027383"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.getQuote}
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/d/1ZpePT0qem7IjP2uWS_BijVOPkubVEow7"
            alt="Factory Background"
            className="h-full w-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-red-600 uppercase">
              {t.hero.companyName}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              {t.hero.title} <br />
              <span className="text-red-600">{t.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
              {t.hero.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-gray-800 hover:shadow-xl active:scale-95"
              >
                {t.hero.viewProducts}
                <ArrowRight className={cn("transition-transform", lang === 'ar' ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1")} size={20} />
              </a>
              <a
                href="https://wa.me/8615257027383"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition-all hover:border-red-600 hover:text-red-600 active:scale-95"
              >
                <Phone size={20} />
                {t.hero.contactSales}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.about.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {t.about.desc1}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {t.about.desc2}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  {t.about.iso}
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  {t.about.ce}
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  {t.about.global}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-extrabold">15+</p>
              <p className="mt-2 text-sm font-medium text-red-100 uppercase tracking-wider">{t.stats.years}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold">500+</p>
              <p className="mt-2 text-sm font-medium text-red-100 uppercase tracking-wider">{t.stats.clients}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold">100%</p>
              <p className="mt-2 text-sm font-medium text-red-100 uppercase tracking-wider">{t.stats.certified}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold">24/7</p>
              <p className="mt-2 text-sm font-medium text-red-100 uppercase tracking-wider">{t.stats.support}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.products.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{t.products.desc}</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productItems.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all hover:border-red-100 hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.gallery.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{t.gallery.desc}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {galleryImages.map((id, index) => (
              <motion.div
                key={id + index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 12) * 0.05 }}
                className="aspect-square overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md hover:scale-105"
              >
                <img
                  src={`https://lh3.googleusercontent.com/d/${id}`}
                  alt={`Gallery item ${index + 1}`}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Flame size={400} className="text-red-600 absolute -top-20 -right-20" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
              <p className="mt-4 text-lg text-gray-400">
                {t.contact.desc}
              </p>
              
              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">{t.contact.whatsapp}</p>
                    <a href="https://wa.me/8615257027383" className="mt-1 block text-xl font-semibold hover:text-red-500 transition-colors">
                      +86 152 5702 7383
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">{t.contact.email}</p>
                    <a href="mailto:huijun0512@gmail.com" className="mt-1 block text-xl font-semibold hover:text-red-500 transition-colors">
                      huijun0512@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">{t.contact.location}</p>
                    <p className="mt-1 text-xl font-semibold">Zhejiang, China</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl bg-gray-800/50 p-6 border border-gray-700">
                <p className="text-sm text-gray-400">{t.contact.owner}</p>
                <p className="text-xl font-bold text-white">Tessa Zhou</p>
              </div>
            </div>
            
            <div className="rounded-3xl bg-white p-8 text-gray-900 shadow-2xl lg:p-12">
              <h3 className="text-2xl font-bold">{t.contact.form.send}</h3>
              <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">{t.contact.form.name}</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/20"
                      placeholder={t.contact.form.placeholders.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">{t.contact.form.email}</label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/20"
                      placeholder={t.contact.form.placeholders.email}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{t.contact.form.subject}</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/20"
                    placeholder={t.contact.form.placeholders.subject}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{t.contact.form.message}</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/20"
                    placeholder={t.contact.form.placeholders.message}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-600 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg active:scale-95"
                >
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white">
                <Flame size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-gray-900">
                ANSHUN <span className="text-red-600">FIRE</span>
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-[10px] font-bold text-gray-400">CE</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-[10px] font-bold text-gray-400">UL</div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-[10px] font-bold text-gray-400">ISO</div>
            </div>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Zhejiang Anshun Fire Fighting Technology Co., Ltd. {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <a 
                href="https://drive.google.com/file/d/1QJ114itNlZKAy974tEWBtDuwWu0mhsdB/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-500 hover:text-red-600"
              >
                {t.nav.catalog}
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-red-600">{t.footer.privacy}</a>
              <a href="#" className="text-sm text-gray-500 hover:text-red-600">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8615257027383"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:scale-110 hover:bg-[#128C7E] active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" className="text-white" />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white animate-bounce">
          1
        </span>
      </a>
    </div>
  );
}
