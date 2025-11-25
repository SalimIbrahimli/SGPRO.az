// FOOTER
// FOOTER
// FOOTER
// FOOTER
// FOOTER
document.addEventListener("DOMContentLoaded", () => {
  function updateFooterLanguage() {
    const lang = localStorage.getItem("sgpro_lang") || "en";

    const footerItems = document.querySelectorAll("[data-i18n]");
    footerItems.forEach((el) => {
      const key = el.getAttribute("data-i18n");

      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  updateFooterLanguage();

  // dili dəyişəndə footeri yenilə
  const langButtons = document.querySelectorAll(".lang-option");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => updateFooterLanguage(), 50);
    });
  });
});

// Language switcher for SGPRO.az
const translations = {
  en: {
    // NAV & FOOTER
    nav_home: "Home",
    nav_contact: "Contact",
    nav_about: "About Us",
    nav_portfolio: "Portfolio",

    footer_home: "Home",
    footer_services: "Services",
    footer_portfolio: "Portfolio",
    footer_about: "About Us",
    footer_contact: "Contact",
    mission_text:
      "Our mission is to empower lazy people design, build, and kickstart their startups with the absolute least amount of effort.",
    footer_copy: "Copyright 2025© SGPRO. All Rights Reserved.",

    // CONTACT PAGE
    contact_title: "Get In Touch",
    contact_intro: "We'd love to hear from you. Send us a message!",
    form_name_label: "Full Name *",
    form_email_label: "Email Address *",
    form_phone_label: "Phone Number",
    form_subject_label: "Subject *",
    form_message_label: "Message *",
    form_send_button: "Send Message",
    error_name: "Please enter your name",
    error_email: "Please enter a valid email",
    error_subject: "Please enter a subject",
    error_message: "Please enter your message",
    success_message: "✓ Thank you! Your message has been sent successfully.",

    // ABOUT PAGE
    about_title: "About Us",
    about_subtitle: "What's behind The Agency?",
    read_about_btn: "Read About Us",

    agency_title: "We are The Agency",
    agency_p1:
      "We are a creative agency focused on building smart, simple and effective communication for brands that want to stand out.",
    agency_p2:
      "From strategy and branding to digital production, we help businesses tell their story clearly and consistently across every touchpoint.",
    agency_button: "What We Do",

    // PORTFOLIO / SERVICES PAGE
    hero_title: "Creative Agency",
    hero_subtitle: "We Turn Ideas Into Amazing Campaigns",
    hero_button: "Let's Work Together",

    services_title: "Our Services",
    services_subtitle:
      "We offer comprehensive advertising solutions to help your brand stand out",

    service_brand_identity_title: "Brand Identity",
    service_brand_identity_text:
      "Create memorable brand experiences that resonate with your audience and stand the test of time.",

    service_digital_marketing_title: "Digital Marketing",
    service_digital_marketing_text:
      "Engage your customers across all digital channels with data-driven campaigns that convert.",

    service_video_production_title: "Video Production",
    service_video_production_text:
      "Tell your story through compelling video content that captures attention and drives action.",

    service_strategy_title: "Strategy",
    service_strategy_text:
      "Develop winning marketing strategies backed by insights and tailored to your business goals.",

    service_content_creation_title: "Content Creation",
    service_content_creation_text:
      "Craft engaging content that connects with your audience and builds lasting relationships.",

    service_analytics_title: "Analytics",
    service_analytics_text:
      "Measure what matters with comprehensive analytics and actionable insights for growth.",

    portfolio_section_title: "Recent Work",
    portfolio_section_subtitle:
      "Check out some of our latest projects and campaigns",

    work1_title: "Tech Startup Launch",
    work1_text: "Complete brand identity and digital campaign",

    work2_title: "Fashion Brand Revival",
    work2_text: "Social media strategy and content creation",

    work3_title: "Product Launch Campaign",
    work3_text: "Multi-channel advertising campaign",

    stats_title: "Our Impact",
    stats_clients_label: "Happy Clients",
    stats_projects_label: "Projects Completed",
    stats_awards_label: "Awards Won",
    stats_years_label: "Years Experience",
  },

  az: {
    // NAV & FOOTER
    nav_home: "Ana səhifə",
    nav_contact: "Əlaqə",
    nav_about: "Haqqımızda",
    nav_portfolio: "Portfel",

    footer_home: "Ana səhifə",
    footer_services: "Xidmətlər",
    footer_portfolio: "Portfel",
    footer_about: "Haqqımızda",
    footer_contact: "Əlaqə",
    mission_text:
      "Missiyamız odur ki, hətta ən tənbəl insanlar belə startaplarını minimum zəhmətlə dizayn edib qura və işə sala bilsinlər.",
    footer_copy: "Copyright 2025© SGPRO. Bütün hüquqlar qorunur.",

    // CONTACT PAGE
    contact_title: "Bizimlə əlaqə saxlayın",
    contact_intro:
      "Sizinlə əlaqə saxlamaqdan məmnun olarıq. Bizə mesaj göndərin!",
    form_name_label: "Tam adınız *",
    form_email_label: "Email ünvanı *",
    form_phone_label: "Telefon nömrəsi",
    form_subject_label: "Mövzu *",
    form_message_label: "Mesaj *",
    form_send_button: "Mesajı göndər",
    error_name: "Zəhmət olmasa adınızı daxil edin",
    error_email: "Zəhmət olmasa düzgün email daxil edin",
    error_subject: "Zəhmət olmasa mövzunu daxil edin",
    error_message: "Zəhmət olmasa mesajınızı daxil edin",
    success_message: "✓ Təşəkkür edirik! Mesajınız uğurla göndərildi.",

    // ABOUT PAGE
    about_title: "Haqqımızda",
    about_subtitle: "Agentliyin arxasında nə var?",
    read_about_btn: "Daha ətraflı oxu",

    agency_title: "Biz – The Agency",
    agency_p1:
      "Biz markaların diqqət çəkməsinə kömək edən ağıllı, sadə və effektiv kommunikasiya həlləri yaradan yaradıcı agentlikyik.",
    agency_p2:
      "Strategiyadan və brendinqdən rəqəmsal istehsala qədər bizneslərin hekayəsini hər nöqtədə aydın və davamlı şəkildə çatdırmasına kömək edirik.",
    agency_button: "Nə işlər görürük",

    // PORTFOLIO / SERVICES PAGE
    hero_title: "Yaradıcı Agentlik",
    hero_subtitle: "Fikirləri möhtəşəm kampaniyalara çeviririk",
    hero_button: "Gəlin birlikdə işləyək",

    services_title: "Xidmətlərimiz",
    services_subtitle:
      "Brendinizin seçilməsinə kömək edən kompleks reklam həlləri təklif edirik",

    service_brand_identity_title: "Brend kimliyi",
    service_brand_identity_text:
      "Auditoriyanızda yadda qalan və zamanla dəyərini itirməyən brend təcrübələri yaradırıq.",

    service_digital_marketing_title: "Rəqəmsal marketinq",
    service_digital_marketing_text:
      "Bütün rəqəmsal kanallarda nəticəyə yönəlmiş, məlumatlara əsaslanan kampaniyalar qururuq.",

    service_video_production_title: "Video istehsalı",
    service_video_production_text:
      "Hekayənizi diqqət çəkən və hərəkətə keçirən peşəkar video kontentlə danışırıq.",

    service_strategy_title: "Strategiya",
    service_strategy_text:
      "Məqsədlərinizə uyğun, analitikaya söykənən effektiv marketinq strategiyaları hazırlayırıq.",

    service_content_creation_title: "Kontent istehsalı",
    service_content_creation_text:
      "Auditoriyanızla bağ quran, brendinizə dəyər qatan davamlı kontent yaradırıq.",

    service_analytics_title: "Analitika",
    service_analytics_text:
      "İnkişaf üçün vacib göstəriciləri ölçür və qərarvermə üçün praktik insaytlar təqdim edirik.",

    portfolio_section_title: "Son işlərimiz",
    portfolio_section_subtitle:
      "Ən son layihə və kampaniyalarımızla tanış olun",

    work1_title: "Texno startapın lansmanı",
    work1_text: "Tam brend kimliyi və rəqəmsal kampaniya",

    work2_title: "Moda brendinin yenilənməsi",
    work2_text: "Sosial şəbəkə strategiyası və kontent istehsalı",

    work3_title: "Məhsulun bazara çıxarılması",
    work3_text: "Çoxkanallı reklam kampaniyası",

    stats_title: "Nəticələrimiz",
    stats_clients_label: "Məmnun müştərilər",
    stats_projects_label: "Tamamlanmış layihələr",
    stats_awards_label: "Qazanılan mükafatlar",
    stats_years_label: "İllik təcrübə",
  },

  ru: {
    // NAV & FOOTER
    nav_home: "Главная",
    nav_contact: "Контакты",
    nav_about: "О нас",
    nav_portfolio: "Портфолио",

    footer_home: "Главная",
    footer_services: "Услуги",
    footer_portfolio: "Портфолио",
    footer_about: "О нас",
    footer_contact: "Контакты",
    mission_text:
      "Наша миссия — помочь даже самым ленивым людям спроектировать, создать и запустить свои стартапы с минимальными усилиями.",
    footer_copy: "Copyright 2025© SGPRO. Все права защищены.",

    // CONTACT PAGE
    contact_title: "Свяжитесь с нами",
    contact_intro: "Мы будем рады вам помочь. Отправьте нам сообщение!",
    form_name_label: "Полное имя *",
    form_email_label: "Адрес электронной почты *",
    form_phone_label: "Номер телефона",
    form_subject_label: "Тема *",
    form_message_label: "Сообщение *",
    form_send_button: "Отправить сообщение",
    error_name: "Пожалуйста, введите ваше имя",
    error_email: "Пожалуйста, введите корректный email",
    error_subject: "Пожалуйста, введите тему",
    error_message: "Пожалуйста, введите сообщение",
    success_message: "✓ Спасибо! Ваше сообщение было успешно отправлено.",

    // ABOUT PAGE
    about_title: "О нас",
    about_subtitle: "Что стоит за агентством?",
    read_about_btn: "Подробнее о нас",

    agency_title: "Мы — The Agency",
    agency_p1:
      "Мы креативное агентство, которое создает умную, простую и эффективную коммуникацию для брендов, желающих выделиться.",
    agency_p2:
      "От стратегии и айдентики до цифрового продакшена — мы помогаем бизнесу рассказывать свою историю ясно и последовательно на всех точках контакта.",
    agency_button: "Чем мы занимаемся",

    // PORTFOLIO / SERVICES PAGE
    hero_title: "Креативное агентство",
    hero_subtitle: "Мы превращаем идеи в яркие кампании",
    hero_button: "Давайте работать вместе",

    services_title: "Наши услуги",
    services_subtitle:
      "Мы предлагаем комплексные рекламные решения, чтобы ваш бренд выделялся на рынке",

    service_brand_identity_title: "Айдентика бренда",
    service_brand_identity_text:
      "Создаем запоминающийся образ бренда, который резонирует с аудиторией и остается актуальным долгое время.",

    service_digital_marketing_title: "Цифровой маркетинг",
    service_digital_marketing_text:
      "Вовлекаем клиентов на всех цифровых каналах с помощью кампаний, основанных на данных и ориентированных на результат.",

    service_video_production_title: "Видеопродакшн",
    service_video_production_text:
      "Рассказываем вашу историю с помощью эффектного видео-контента, который привлекает внимание и побуждает к действию.",

    service_strategy_title: "Стратегия",
    service_strategy_text:
      "Разрабатываем эффективные маркетинговые стратегии, основанные на аналитике и ваших бизнес-целях.",

    service_content_creation_title: "Создание контента",
    service_content_creation_text:
      "Готовим контент, который выстраивает доверие и укрепляет долгосрочные отношения с вашей аудиторией.",

    service_analytics_title: "Аналитика",
    service_analytics_text:
      "Измеряем действительно важные показатели и даем практичные инсайты для роста.",

    portfolio_section_title: "Недавние проекты",
    portfolio_section_subtitle:
      "Посмотрите некоторые из наших последних проектов и кампаний",

    work1_title: "Запуск техстартапа",
    work1_text: "Полная айдентика бренда и цифровая кампания",

    work2_title: "Возрождение модного бренда",
    work2_text: "Стратегия для соцсетей и создание контента",

    work3_title: "Кампания по запуску продукта",
    work3_text: "Мультиканальная рекламная кампания",

    stats_title: "Наши результаты",
    stats_clients_label: "Довольные клиенты",
    stats_projects_label: "Реализованные проекты",
    stats_awards_label: "Полученные награды",
    stats_years_label: "Лет опыта",
  },
};

function setLanguage(lang) {
  const fallbackLang = "en";
  const langToUse = translations[lang] ? lang : fallbackLang;

  try {
    localStorage.setItem("sgpro_lang", langToUse);
  } catch (e) {}

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const fromLang = translations[langToUse] || translations[fallbackLang];
    const fromFallback = translations[fallbackLang];
    const text =
      (fromLang && fromLang[key]) || (fromFallback && fromFallback[key]);
    if (text) {
      el.textContent = text;
    }
  });

  const buttons = document.querySelectorAll(".lang-option");
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === langToUse);
  });

  const label = document.getElementById("currentLangLabel");
  if (label) {
    label.textContent = langToUse.toUpperCase();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let initialLang = "en";
  try {
    const saved = localStorage.getItem("sgpro_lang");
    if (saved && translations[saved]) {
      initialLang = saved;
    }
  } catch (e) {}

  setLanguage(initialLang);

  const buttons = document.querySelectorAll(".lang-option");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);

      const dropdown = document.getElementById("langDropdown");
      const toggle = document.getElementById("langToggle");
      if (dropdown && toggle) {
        dropdown.classList.remove("show");
        toggle.classList.remove("open");
      }
    });
  });

  const toggle = document.getElementById("langToggle");
  const dropdown = document.getElementById("langDropdown");

  if (toggle && dropdown) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
      toggle.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
        dropdown.classList.remove("show");
        toggle.classList.remove("open");
      }
    });
  }
});
