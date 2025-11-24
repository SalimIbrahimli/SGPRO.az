// Language switcher for SGPRO.az
const translations = {
  en: {
    nav_home: "Home",
    nav_contact: "Contact",
    nav_about: "About Us",
    footer_home: "Home",
    footer_services: "Services",
    footer_about: "About Us",
    footer_contact: "Contact",
    mission_text:
      "Our mission is to empower lazy people design, build, and kickstart their startups with the absolute least amount of effort.",
    contact_intro: "We'd love to hear from you. Send us a message!",
    form_name_label: "Full Name *",
    form_email_label: "Email Address *",
    form_subject_label: "Subject *",
    form_message_label: "Message *",
    form_send_button: "Send Message",
    error_name: "Please enter your name",
    error_email: "Please enter a valid email",
    error_subject: "Please enter a subject",
    error_message: "Please enter your message",
    success_message: "✓ Thank you! Your message has been sent successfully.",
    footer_copy: "Copyright 2025© SGPRO. All Rights Reserved.",

    // ABOUT PAGE
    about_title: "About Us",
    about_subtitle: "What's behind The Agency?",
    read_about_btn: "Read About Us",
  },

  az: {
    nav_home: "Ana səhifə",
    nav_contact: "Əlaqə",
    nav_about: "Haqqımızda",
    footer_home: "Ana səhifə",
    footer_services: "Xidmətlər",
    footer_about: "Haqqımızda",
    footer_contact: "Əlaqə",
    mission_text:
      "Missiyamız odur ki, hətta ən tənbəl insanlar belə startaplarını minimum zəhmətlə dizayn edib qura və işə sala bilsinlər.",
    contact_intro:
      "Sizinlə əlaqə saxlamaqdan məmnun olarıq. Bizə mesaj göndərin!",
    form_name_label: "Tam adınız *",
    form_email_label: "Email ünvanı *",
    form_subject_label: "Mövzu *",
    form_message_label: "Mesaj *",
    form_send_button: "Mesajı göndər",
    error_name: "Zəhmət olmasa adınızı daxil edin",
    error_email: "Zəhmət olmasa düzgün email daxil edin",
    error_subject: "Zəhmət olmasa mövzunu daxil edin",
    error_message: "Zəhmət olmasa mesajınızı daxil edin",
    success_message: "✓ Təşəkkür edirik! Mesajınız uğurla göndərildi.",
    footer_copy: "Copyright 2025© SGPRO. Bütün hüquqlar qorunur.",

    // ABOUT PAGE
    about_title: "Haqqımızda",
    about_subtitle: "Agentliyin arxasında nə var?",
    read_about_btn: "Daha ətraflı oxu",
  },

  ru: {
    nav_home: "Главная",
    nav_contact: "Контакты",
    nav_about: "О нас",
    footer_home: "Главная",
    footer_services: "Услуги",
    footer_about: "О нас",
    footer_contact: "Контакты",
    mission_text:
      "Наша миссия — помочь даже самым ленивым людям спроектировать, создать и запустить свои стартапы с минимальными усилиями.",
    contact_intro: "Мы будем рады вам помочь. Отправьте нам сообщение!",
    form_name_label: "Полное имя *",
    form_email_label: "Адрес электронной почты *",
    form_subject_label: "Тема *",
    form_message_label: "Сообщение *",
    form_send_button: "Отправить сообщение",
    error_name: "Пожалуйста, введите ваше имя",
    error_email: "Пожалуйста, введите корректный email",
    error_subject: "Пожалуйста, введите тему",
    error_message: "Пожалуйста, введите сообщение",
    success_message: "✓ Спасибо! Ваше сообщение было успешно отправлено.",
    footer_copy: "Copyright 2025© SGPRO. Все права защищены.",

    // ABOUT PAGE
    about_title: "О нас",
    about_subtitle: "Что стоит за агентством?",
    read_about_btn: "Подробнее о нас",
  },
};

function setLanguage(lang) {
  const fallbackLang = "en";
  const langToUse = translations[lang] ? lang : fallbackLang;

  // Save choice
  try {
    localStorage.setItem("sgpro_lang", langToUse);
  } catch (e) {
    // ignore if storage isn't available
  }

  // Update all elements with data-i18n
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

  // Dropdown-dakı dilləri aktiv elə
  const buttons = document.querySelectorAll(".lang-option");
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === langToUse);
  });

  // Əsas düymədə dili göstər
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
  } catch (e) {
    // ignore
  }

  setLanguage(initialLang);

  const buttons = document.querySelectorAll(".lang-option");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);

      // seçəndən sonra menyunu bağla
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
    // aç / bağla
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
      toggle.classList.toggle("open");
    });

    // çöldə kliklə bağla
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
        dropdown.classList.remove("show");
        toggle.classList.remove("open");
      }
    });
  }
});
