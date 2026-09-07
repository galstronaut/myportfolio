/**
 * MAIN INTERACTION SCRIPT & MULTILINGUAL (i18n) ENGINE
 * Galih Akbar Fathurohman - GIS & Creative Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  // Current Language State
  let currentLang = localStorage.getItem("galih_lang") || "id";
  let preloaderFinished = false;

  // 1. PRELOADER LOGIC
  const preloader = document.getElementById("preloader");
  const preloaderFill = document.getElementById("preloader-fill");
  const preloaderCoords = document.getElementById("preloader-coords");

  const preloaderDuration = 3000;
  const preloaderStartedAt = performance.now();
  const interval = setInterval(() => {
    const elapsed = performance.now() - preloaderStartedAt;
    const progress = Math.min(100, Math.round((elapsed / preloaderDuration) * 100));

    if (preloaderFill) preloaderFill.style.width = `${progress}%`;

    if (preloaderCoords) {
      const lat = (-7.7012 + progress * 0.001).toFixed(4);
      const lon = (108.6521 + progress * 0.001).toFixed(4);
      const initText = i18nData[currentLang]?.preloaderInit || "INITIALIZING...";
      preloaderCoords.textContent = `LAT: ${lat} S | LON: ${lon} E | ${initText} ${progress}%`;
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        if (preloader) preloader.classList.add("loaded");
        preloaderFinished = true;
        initTypewriter();
        animateHeroMetrics();
        playHeroDescription();
      }, 0);
    }
  }, 50);

  function formatMetricValue(value, format, decimals, suffix) {
    let output;
    if (format === "compact") {
      if (value >= 1000000) output = `${(value / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
      else if (value >= 1000) output = `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
      else output = String(Math.round(value));
    } else if (decimals) {
      output = value.toFixed(Number(decimals));
    } else {
      output = String(Math.round(value));
    }
    return { output, suffix: suffix || "" };
  }

  let metricAnimationTimers = [];
  let metricAnimationFrames = [];

  function animateHeroMetrics() {
    metricAnimationTimers.forEach(clearTimeout);
    metricAnimationFrames.forEach(cancelAnimationFrame);
    metricAnimationTimers = [];
    metricAnimationFrames = [];

    document.querySelectorAll(".metric-num[data-counter-value]").forEach((counter, index) => {
      const target = Number(counter.dataset.counterValue);
      const duration = 2200;
      const startDelay = index * 360;
      counter.innerHTML = `1${counter.dataset.counterSuffix ? `<span>${counter.dataset.counterSuffix}</span>` : ""}`;
      const timer = setTimeout(() => {
        const startedAt = performance.now();
        const updateCounter = (now) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = 1 + (target - 1) * eased;
          const formatted = formatMetricValue(value, counter.dataset.counterFormat, counter.dataset.counterDecimals, counter.dataset.counterSuffix);
          counter.innerHTML = `${formatted.output}${formatted.suffix ? `<span>${formatted.suffix}</span>` : ""}`;
          if (progress < 1) metricAnimationFrames.push(requestAnimationFrame(updateCounter));
        };
        metricAnimationFrames.push(requestAnimationFrame(updateCounter));
      }, startDelay);
      metricAnimationTimers.push(timer);
    });
  }

  const spatialWorkSection = document.getElementById("gis-projects");
  if (spatialWorkSection && "IntersectionObserver" in window) {
    const spatialObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && preloaderFinished) animateHeroMetrics();
      });
    }, { threshold: 0.55 });
    spatialObserver.observe(spatialWorkSection);
  }

  function initWordRotators() {
    document.querySelectorAll(".word-rotator").forEach((rotator) => {
      const mainNode = rotator.querySelector(".animate-word-main");
      const accentNode = rotator.querySelector(".animate-word-accent");
      if (!mainNode || !accentNode) return;

      const cycleKey = rotator.dataset.wordI18n;
      const getWords = () => {
        const translated = sectionWordCycles[currentLang]?.[cycleKey] || sectionWordCycles.id?.[cycleKey];
        return translated || {
          main: JSON.parse(rotator.dataset.wordCycle || "[]"),
          accent: JSON.parse(rotator.dataset.wordAccent || "[]")
        };
      };
      if (!getWords().main.length || !getWords().accent.length) return;

      let index = 0;
      let timerId = null;

      const animateWord = () => {
        const words = getWords();
        mainNode.textContent = words.main[index % words.main.length];
        accentNode.textContent = words.accent[index % words.accent.length];

        mainNode.classList.remove("is-visible", "is-animating");
        accentNode.classList.remove("is-visible", "is-animating");

        void mainNode.offsetWidth;
        void accentNode.offsetWidth;

        mainNode.classList.add("is-visible", "is-animating");
        accentNode.classList.add("is-visible", "is-animating");

        window.clearTimeout(timerId);
        timerId = window.setTimeout(() => {
          mainNode.classList.remove("is-visible", "is-animating");
          accentNode.classList.remove("is-visible", "is-animating");
          index = (index + 1) % words.main.length;
          window.setTimeout(animateWord, 180);
        }, 5000);
      };

      const startRotation = () => {
        if (timerId) return;
        animateWord();
      };

      const stopRotation = () => {
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
        }
        mainNode.classList.remove("is-visible", "is-animating");
        accentNode.classList.remove("is-visible", "is-animating");
      };

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startRotation();
            } else {
              stopRotation();
            }
          });
        }, { threshold: 0.45 });

        observer.observe(rotator);
      } else {
        startRotation();
      }
    });
  }

  initWordRotators();

  // 2. THEME SWITCHER
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("galih_theme", theme);
    if (themeIcon) {
      if (theme === "dark") {
        themeIcon.className = "fa-solid fa-sun";
        themeToggleBtn.setAttribute("title", "Mode Terang / Light Mode");
      } else {
        themeIcon.className = "fa-solid fa-moon";
        themeToggleBtn.setAttribute("title", "Mode Malam / Dark Mode");
      }
    }

    // Profile Images: Dark mode uses itsgal.webp & kesatria2.png, Light mode uses profil.webp & robot2.webp
    const baseImg = document.getElementById("baseImg");
    const revealImg = document.getElementById("revealImg");
    if (theme === "dark") {
      if (baseImg) baseImg.src = "images/profile/gal.webp";
      if (revealImg) revealImg.src = "images/profile/kesatria.webp";
    } else {
      if (baseImg) baseImg.src = "images/profile/profil.webp";
      if (revealImg) revealImg.src = "images/profile/robot2.webp";
    }
  }

  const savedTheme = localStorage.getItem("galih_theme") || "light";
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  // 3. MULTILINGUAL (i18n) ENGINE
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  const langMenu = document.getElementById("lang-menu");
  const currentLangLabel = document.getElementById("current-lang-label");
  const langOptions = document.querySelectorAll(".lang-option-btn");

  if (langToggleBtn && langMenu) {
    langToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      langMenu.classList.remove("show");
    });
  }

  function applyLanguage(lang) {
    if (!i18nData[lang]) lang = "id";
    currentLang = lang;
    localStorage.setItem("galih_lang", lang);
    document.documentElement.lang = lang;

    if (currentLangLabel) {
      currentLangLabel.textContent = i18nData[lang].langName;
    }

    langOptions.forEach((btn) => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update all elements with data-i18n
    const t = i18nData[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(t, key)) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    document.querySelectorAll(".word-rotator[data-word-i18n]").forEach((rotator) => {
      const words = sectionWordCycles[lang]?.[rotator.dataset.wordI18n] || sectionWordCycles.id?.[rotator.dataset.wordI18n];
      if (!words) return;
      const mainNode = rotator.querySelector(".animate-word-main");
      const accentNode = rotator.querySelector(".animate-word-accent");
      if (mainNode) mainNode.textContent = words.main[0];
      if (accentNode) accentNode.textContent = words.accent[0];
    });

    // Update titles and partner tags that are generated from portfolio data.
    document.querySelectorAll(".cert-card-bar").forEach((card) => {
      const cert = certsData.find((item) => item.id === card.getAttribute("data-cert-id"));
      const title = card.querySelector(".cert-info strong");
      if (cert && title) {
        const rawTitle = cert.titles[lang] || cert.titles.id;
        title.innerHTML = rawTitle.replace(/\s&\s/g, " <span class='amp'>&</span> ");
      }
    });

    document.querySelectorAll(".collab-partner-card").forEach((card) => {
      const partner = collaborationsData.find((item) => item.id === card.getAttribute("data-collab-id"));
      const tag = card.querySelector(".partner-info span");
      if (partner && tag) tag.textContent = partner.tags[lang] || partner.tags.id;
    });

    // Re-render dynamic sections
    renderProjects(currentFilter);
    if (preloaderFinished) restartTypewriter();
  }

  langOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      applyLanguage(selected);
      if (langMenu) langMenu.classList.remove("show");
    });
  });

  // 4. TYPEWRITER EFFECT
  const typedSpan = document.getElementById("typed-role");
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 80;
  let typeTimer = null;

  function initTypewriter() {
    if (!typedSpan) return;

    function typeLoop() {
      const activeRoles = typewriterRoles[currentLang] || typewriterRoles.id;
      const currentRole = activeRoles[roleIdx % activeRoles.length];

      if (isDeleting) {
        typedSpan.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typeSpeed = 40;
      } else {
        typedSpan.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typeSpeed = 80;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        typeSpeed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % activeRoles.length;
        typeSpeed = 400;
      }

      typeTimer = setTimeout(typeLoop, typeSpeed);
    }

    typeLoop();
  }

  function restartTypewriter() {
    if (typeTimer) clearTimeout(typeTimer);
    charIdx = 0;
    isDeleting = false;
    initTypewriter();
  }

  const heroDescription = document.getElementById("hero-desc-typing");
  let heroTypingTimer = null;

  function playHeroDescription() {
    if (!heroDescription || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fullText = heroDescription.dataset.typingText || heroDescription.textContent.trim();
    clearTimeout(heroTypingTimer);
    heroDescription.textContent = "";
    let index = 0;
    const typeNext = () => {
      heroDescription.textContent = fullText.slice(0, index);
      index += 1;
      if (index <= fullText.length) heroTypingTimer = setTimeout(typeNext, 17);
    };
    typeNext();
  }

  const heroSectionForTyping = document.getElementById("home");
  if (heroSectionForTyping && "IntersectionObserver" in window) {
    const heroTypingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting && preloaderFinished) playHeroDescription(); });
    }, { threshold: 0.55 });
    heroTypingObserver.observe(heroSectionForTyping);
  }

  // 5. NAVBAR SPY & MOBILE TOGGLE
  const navMenu = document.getElementById("nav-menu");
  const navToggleBtn = document.getElementById("nav-mobile-toggle");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggleBtn.setAttribute("aria-expanded", String(isOpen));
      const icon = navToggleBtn.querySelector("i");
      if (icon) {
        icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        navToggleBtn?.setAttribute("aria-expanded", "false");
        const icon = navToggleBtn?.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      }
    });
  });

  // Each nav item owns one complete content range, avoiding overlap from nested sections.
  const navRangeStarts = [
    { id: "home", target: "home" },
    { id: "spatial-work", target: "spatial-work" },
    { id: "design-studio", target: "design-studio" },
    { id: "experience", target: "experience" },
    { id: "about", target: "about" },
    { id: "contact", target: "contact" }
  ];

  function updateActiveNav() {
    const position = window.pageYOffset + 170;
    let activeTarget = "home";
    navRangeStarts.forEach((range) => {
      const element = document.getElementById(range.id);
      // getBoundingClientRect gives the true document position for nested sections.
      // offsetTop here is only relative to the parent Projects section.
      const documentTop = element ? element.getBoundingClientRect().top + window.pageYOffset : Infinity;
      if (element && position >= documentTop) activeTarget = range.target;
    });
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${activeTarget}`));
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", updateActiveNav);
  updateActiveNav();

  // 6. RENDER PROJECTS (CLEAN GRID CARDS WITH i18n)
  const gisProjectsGrid = document.getElementById("gis-projects-grid");
  const visualProjectsGrid = document.getElementById("visual-projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  let currentFilter = "all";

  function renderProjects(filter = "all") {
    currentFilter = filter;
    if (!gisProjectsGrid || !visualProjectsGrid) return;
    gisProjectsGrid.innerHTML = "";
    visualProjectsGrid.innerHTML = "";

    const createProjectCard = (p, isGis = false) => {
      const card = document.createElement("div");
      card.className = `project-card reveal-on-scroll ${isGis ? "project-card-detail" : "project-card-visual"}`;
      card.setAttribute("data-id", p.id);

      const titleText = p.titles[currentLang] || p.titles.id || p.titles.en;
      const excerptText = p.excerpts[currentLang] || p.excerpts.id || p.excerpts.en;
      const categoryLabel = i18nData[currentLang]?.filterGis && p.category === "gis" ? i18nData[currentLang].filterGis :
                            i18nData[currentLang]?.filterDesign && p.category === "design" ? i18nData[currentLang].filterDesign :
                            i18nData[currentLang]?.filterPhoto && p.category === "photo" ? i18nData[currentLang].filterPhoto :
                            i18nData[currentLang]?.filterVideo && p.category === "video" ? i18nData[currentLang].filterVideo :
                            i18nData[currentLang]?.filterOutfit && p.category === "outfit" ? i18nData[currentLang].filterOutfit : p.category.toUpperCase();
      const metric = p.cardMetric;
      const metricHighlight = metric ? (metric.highlight[currentLang] || metric.highlight.en) : "";
      const metricLabel = metric ? (metric.label[currentLang] || metric.label.en) : "";
      const footerHtml = metric
        ? `<div class="project-card-metric">
            <div class="project-card-metric-value">${metric.value} ${metricHighlight}</div>
            <div class="project-card-metric-label">${metricLabel}</div>
          </div>`
        : `<div class="project-info-bar">
            <span><i class="fa-solid fa-circle-info"></i> ${categoryLabel}</span>
            <span class="project-open-label">${i18nData[currentLang]?.viewProject || "Lihat Proyek"} <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>`;

      card.innerHTML = `
        <div class="project-thumb-wrapper">
          <img src="${p.heroImg}" alt="${titleText}" class="project-thumb" loading="lazy" />
          <div class="project-hover-overlay">
            <div class="project-hover-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-card-title">${titleText}</h3>
          <p class="project-excerpt">${excerptText}</p>
          ${footerHtml}
        </div>
      `;

      card.addEventListener("click", () => p.id === "photo-1" ? openPhotoGallery() : openProjectModal(p.id));
      return card;
    };

    projectsData.filter((p) => p.category === "gis").forEach((p) => gisProjectsGrid.appendChild(createProjectCard(p, true)));
    const visualProjects = filter === "all"
      ? projectsData.filter((p) => p.category !== "gis" && p.category !== "video")
      : projectsData.filter((p) => p.category === filter && p.category !== "video");
    visualProjects.forEach((p) => visualProjectsGrid.appendChild(createProjectCard(p)));

    initScrollReveal();
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  // Repeated automatic spotlight for the software cards while the About section is visible.
  const softwareGrid = document.querySelector(".software-icon-grid");
  const softwareCards = softwareGrid ? Array.from(softwareGrid.querySelectorAll(".software-icon-card")) : [];
  let softwareSpotlightTimer = null;
  let softwareSpotlightIndex = 0;

  function stopSoftwareSpotlight() {
    if (softwareSpotlightTimer) clearInterval(softwareSpotlightTimer);
    softwareSpotlightTimer = null;
    softwareCards.forEach((card) => card.classList.remove("is-spotlight"));
  }

  function startSoftwareSpotlight() {
    if (!softwareCards.length || softwareSpotlightTimer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const showNextSoftware = () => {
      softwareCards.forEach((card) => card.classList.remove("is-spotlight"));
      softwareCards[softwareSpotlightIndex].classList.add("is-spotlight");
      softwareSpotlightIndex = (softwareSpotlightIndex + 1) % softwareCards.length;
    };
    showNextSoftware();
    softwareSpotlightTimer = setInterval(showNextSoftware, 720);
  }

  if (softwareGrid && "IntersectionObserver" in window) {
    const softwareObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting ? startSoftwareSpotlight() : stopSoftwareSpotlight());
    }, { threshold: 0.35 });
    softwareObserver.observe(softwareGrid);
  }

  // 7. GAMBAR 2 CLEAN MODAL SLIDER (WITH i18n)
  const modalBackdrop = document.getElementById("project-modal");
  const modalSliderImg = document.getElementById("modal-slider-img");
  const modalCounterPill = document.getElementById("modal-counter-pill");
  const modalCategoryTag = document.getElementById("modal-category-tag");
  const modalTitleBold = document.getElementById("modal-title-bold");
  const modalDescBody = document.getElementById("modal-desc-body");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const sliderPrevBtn = document.getElementById("slider-prev-btn");
  const sliderNextBtn = document.getElementById("slider-next-btn");

  let currentProject = null;
  let currentSlideIndex = 0;
  let modalSlideTimer = null;

  function updateModalSlide(idx) {
    if (!currentProject || !currentProject.slides || currentProject.slides.length === 0) return;

    if (idx < 0) idx = currentProject.slides.length - 1;
    if (idx >= currentProject.slides.length) idx = 0;
    currentSlideIndex = idx;

    const slide = currentProject.slides[currentSlideIndex];
    const slideTitle = slide.titles[currentLang] || slide.titles.id || slide.titles.en;
    const slideDesc = slide.descs[currentLang] || slide.descs.id || slide.descs.en;
    const categoryTag = currentProject.categoryTags[currentLang] || currentProject.categoryTags.id || currentProject.categoryTags.en;

    if (modalSliderImg) {
      if (modalSlideTimer) clearTimeout(modalSlideTimer);
      modalSliderImg.style.opacity = "0";
      modalSliderImg.onload = () => {
        modalSliderImg.style.opacity = "1";
      };
      modalSliderImg.src = slide.img;
      modalSliderImg.alt = slideTitle;
      modalSlideTimer = setTimeout(() => {
        modalSliderImg.style.opacity = "1";
      }, 250);
    }

    if (modalCounterPill) modalCounterPill.textContent = `${String(currentSlideIndex + 1).padStart(2, "0")} / ${String(currentProject.slides.length).padStart(2, "0")}`;
    if (modalCategoryTag) modalCategoryTag.textContent = categoryTag;
    if (modalTitleBold) modalTitleBold.innerHTML = slideTitle.replace(/\s&\s/g, " <span class='amp'>&</span> ");
    if (modalDescBody) modalDescBody.textContent = slideDesc;
  }

  function openProjectModal(projectId) {
    currentProject = projectsData.find((item) => item.id === projectId);
    if (!currentProject || !modalBackdrop) return;

    currentSlideIndex = 0;
    updateModalSlide(0);

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  if (sliderPrevBtn) sliderPrevBtn.addEventListener("click", () => updateModalSlide(currentSlideIndex - 1));
  if (sliderNextBtn) sliderNextBtn.addEventListener("click", () => updateModalSlide(currentSlideIndex + 1));
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeProjectModal();
    });
  }
  // 8. PHOTO SERIES: GALLERY -> DETAIL + LOCAL LIVE INTERACTIONS
  // 39 Foto dikelompokkan dalam 5 folder bahasa Inggris dengan judul puitis & narasi mendalam
  const photoSeries = [
    // --- HORIZON ---
    { id: "horizon-01", img: "images/fotografi/horizon/20240707_193603.webp", title: "Bisikan Semburat Jingga", type: "Horizon", category: "horizon", desc: "Ketika sang surya tenggelam perlahan di balik cakrawala, menyisakan pendar jingga yang membisikkan salam perpisahan pada hari yang lelah." },
    { id: "horizon-02", img: "images/fotografi/horizon/20250315_015908.webp", title: "Batas Sunyi Tengah Malam", type: "Horizon", category: "horizon", desc: "Di antara gelapnya semesta dan garis batas bumi yang tenang, malam membentangkan selimut hening tanpa batas." },
    { id: "horizon-03", img: "images/fotografi/horizon/20250401_170829.webp", title: "Tarian Lembayung Khatulistiwa", type: "Horizon", category: "horizon", desc: "Awan gemawan merajut warna tembaga di ufuk barat, memantulkan asa yang tak pernah padam di ujung pandang." },
    { id: "horizon-04", img: "images/fotografi/horizon/20260616_174542.webp", title: "Kala Langit Memeluk Senja", type: "Horizon", category: "horizon", desc: "Siluet bukit terdiam syahdu saat langit meluruhkan cahayanya, menyisakan gradasi ungu dan biru yang memikat jiwa." },
    { id: "horizon-05", img: "images/fotografi/horizon/f2.webp", title: "Melodi Merah Muda di Batas Ufuk", type: "Horizon", category: "horizon", desc: "Semburat merah muda dan kapas awan berpadu lembut, melukiskan ketenangan yang melampaui batas pandangan insan." },
    { id: "horizon-06", img: "images/fotografi/horizon/fg5.webp", title: "Pintu Waktu di Ujung Samudra", type: "Horizon", category: "horizon", desc: "Sebuah garis lurus tempat langit dan bumi saling menyentuh, menyimpan rahasia tentang esok yang penuh harapan." },

    // --- OCEAN ---
    { id: "ocean-01", img: "images/fotografi/ocean/20240625_144456.webp", title: "Riak Abadi Pesisir Karang", type: "Ocean", category: "ocean", desc: "Hantaman air asin yang tak kenal lelah, mengukir ketabahan pada dinding karang purba yang berdiri kokoh." },
    { id: "ocean-02", img: "images/fotografi/ocean/20240630_153618.webp", title: "Kedalaman Biru Samudra", type: "Ocean", category: "ocean", desc: "Warna biru yang menyimpan seribu kisah tak terucap, mengalir bebas mengikuti kehendak angin lepas." },
    { id: "ocean-03", img: "images/fotografi/ocean/20240801_103307.webp", title: "Nyanyian Buih Putih", type: "Ocean", category: "ocean", desc: "Gelombang yang datang membawa sejuknya laut dalam, lalu bersujud lembut di atas hamparan pasir putih yang hangat." },
    { id: "ocean-04", img: "images/fotografi/ocean/20250405_232104.webp", title: "Keheningan Arus Malam", type: "Ocean", category: "ocean", desc: "Bahkan samudra yang bergemuruh belajar untuk bernapas perlahan saat rembulan menjaga tidurnya." },
    { id: "ocean-05", img: "images/fotografi/ocean/20251212_202653.webp", title: "Jejak Pasang di Tepi Waktu", type: "Ocean", category: "ocean", desc: "Garis pantai yang selalu berubah namun selalu ada, merefleksikan dinamika kehidupan yang terus mengalir." },
    { id: "ocean-06", img: "images/fotografi/ocean/20260105_065940.webp", title: "Fajar Keemasan di Laut Lepas", type: "Ocean", category: "ocean", desc: "Kilau mentari pagi menyapa riak ombak pertama, melahirkan hari baru dengan kilau zamrud yang berkilauan." },
    { id: "ocean-07", img: "images/fotografi/ocean/20260105_070955.webp", title: "Pecahan Gelombang Pagi", type: "Ocean", category: "ocean", desc: "Percikan air laut yang beterbangan bagai butiran intan, merayakan kebebasan di alam samudra nan megah." },
    { id: "ocean-08", img: "images/fotografi/ocean/20260419_203908.webp", title: "Gradasi Pualam Pesisir", type: "Ocean", category: "ocean", desc: "Dari toska terang hingga biru gelap palung laut, simfoni warna air yang memanjakan setiap pasang mata." },
    { id: "ocean-09", img: "images/fotografi/ocean/20260608_202441.webp", title: "Pelukan Tanjung Karang", type: "Ocean", category: "ocean", desc: "Daratan yang menjorok berani menantang luasnya lautan, sebuah benteng alam yang setia menjaga pesisir." },
    { id: "ocean-10", img: "images/fotografi/ocean/f1.webp", title: "Sang Penjaga Batas Samudra", type: "Ocean", category: "ocean", desc: "Tebing karst terjal berdiri anggun, menahan deburan pasang dengan keteguhan yang tak tergoyahkan zaman." },
    { id: "ocean-11", img: "images/fotografi/ocean/fg1.webp", title: "Gemuruh Ombak Berirama", type: "Ocean", category: "ocean", desc: "Gulungan air yang perkasa kembali pulang ke pelukan pantai, membawakan simfoni alam tertua di bumi." },
    { id: "ocean-12", img: "images/fotografi/ocean/fg2.webp", title: "Cahaya Emas Tepian Air", type: "Ocean", category: "ocean", desc: "Refleksi kehangatan langit senja berpendar di atas basahnya pasir, menghadirkan kedamaian yang tak ternilai." },
    { id: "ocean-13", img: "images/fotografi/ocean/fg3.webp", title: "Pondok Penanti Kabut Laut", type: "Ocean", category: "ocean", desc: "Atap jerami sederhana diapit desau nyiur dan aroma garam laut, tempat bernaung dari hiruk-pikuk duniawi." },
    { id: "ocean-14", img: "images/fotografi/ocean/fg4.webp", title: "Kejernihan Kristal Lautan", type: "Ocean", category: "ocean", desc: "Air yang begitu bening hingga batuan dasar tampak menyapa, menyingkap keajaiban semesta bawah air." },

    // --- NATURE ---
    { id: "nature-01", img: "images/fotografi/nature/20240626_120628.webp", title: "Kidung Rimba Hijau", type: "Nature", category: "nature", desc: "Kesejukan dedaunan lebat yang menyaring terik siang, menghadirkan keteduhan surgawi di lantai rimba." },
    { id: "nature-02", img: "images/fotografi/nature/20240724_204449.webp", title: "Puspa Alam Tersembunyi", type: "Nature", category: "nature", desc: "Sebuah sudut sunyi di pelukan belantara, tempat napas kehidupan berdetak dalam harmoni sempurna." },
    { id: "nature-03", img: "images/fotografi/nature/20240801_094145.webp", title: "Embun Suci Pagi Hari", type: "Nature", category: "nature", desc: "Tetesan air bening menari di pucuk daun muda, menyambut mentari pagi dengan kesucian yang murni." },
    { id: "nature-04", img: "images/fotografi/nature/20241003_200222.webp", title: "Lembah Sunyi Berkabut", type: "Nature", category: "nature", desc: "Kabut tipis perlahan menuruni perbukitan, menyelubungi pepohonan dalam misteri dan kedamaian hening." },
    { id: "nature-05", img: "images/fotografi/nature/20250402_230500.webp", title: "Napas Hening Malam Hari", type: "Nature", category: "nature", desc: "Ketika fauna dan flora beristirahat di bawah naungan temaram, alam menyenandungkan ketenangan sejati." },
    { id: "nature-06", img: "images/fotografi/nature/20260106_190810.webp", title: "Garis Hayati Khatulistiwa", type: "Nature", category: "nature", desc: "Keanekaragaman bentuk dan rona hijau yang tumbuh subur, merayakan anugerah bumi nusantara." },
    { id: "nature-07", img: "images/fotografi/nature/20260618_133724.webp", title: "Panorama Lembah Tropis", type: "Nature", category: "nature", desc: "Hamparan bukit bergelombang yang menyegarkan jiwa, sejauh mata memandang hanya ada kedamaian." },
    { id: "nature-08", img: "images/fotografi/nature/f3.webp", title: "Nuansa Biru di Balik Pulau", type: "Nature", category: "nature", desc: "Gradasi pulau karang dan air laut jernih yang tenang, sebuah lukisan alam yang tak lekang oleh waktu." },
    { id: "nature-09", img: "images/fotografi/nature/IMG_20240613_002909_817.webp", title: "Cahaya di Sela Ranting", type: "Nature", category: "nature", desc: "Berkas sinar menembus celah dedaunan rimbun, melahirkan pendar keemasan yang menyejukkan batin." },

    // --- FRAGMENTS ---
    { id: "fragments-01", img: "images/fotografi/fragments/20240630_155952.webp", title: "Serpihan Waktu yang Tersimpan", type: "Fragments", category: "fragments", desc: "Detail mikro dari elemen alam yang merekam perjalanan waktu; setiap guratan menyimpan kisah jutaan detik." },
    { id: "fragments-02", img: "images/fotografi/fragments/20240705_165915.webp", title: "Pecahan Memori Spasial", type: "Fragments", category: "fragments", desc: "Potongan tekstur yang terabaikan oleh langkah tergesa, menuntut mata yang peka untuk menemukan keindahannya." },

    // --- ARCHITECTURE ---
    { id: "architecture-01", img: "images/fotografi/architecture/20240514_135531.webp", title: "Geometri Ruang Urban", type: "Architecture", category: "architecture", desc: "Pertemuan garis tegas dan sudut presisi, merangkai dialog visual antara material beton dan langit terbuka." },
    { id: "architecture-02", img: "images/fotografi/architecture/20240622_185724.webp", title: "Simfoni Baja dan Beton", type: "Architecture", category: "architecture", desc: "Struktur kokoh buatan manusia yang menjulang megah, saksi bisu denyut dinamika kota yang tak pernah tidur." },
    { id: "architecture-03", img: "images/fotografi/architecture/20240622_190103.webp", title: "Irama Garis dan Bayangan", type: "Architecture", category: "architecture", desc: "Bukaan jendela dan bidang fasad bermain dengan jatuhnya bayang-bayang, menciptakan komposisi simetris yang memukau." },
    { id: "architecture-04", img: "images/fotografi/architecture/20240702_190726.webp", title: "Monumen Penjelajah Kota", type: "Architecture", category: "architecture", desc: "Perspektif unik yang menyingkap keanggunan bentuk struktural dari sudut yang tak terduga." },
    { id: "architecture-05", img: "images/fotografi/architecture/20241029_190947.webp", title: "Refleksi Fasad Modern", type: "Architecture", category: "architecture", desc: "Permukaan kaca dan bidang dinding merespons cahaya malam, menegaskan identitas arsitektur perkotaan kontemporer." },
    { id: "architecture-06", img: "images/fotografi/architecture/20250816_141345.webp", title: "Ruang Bernapas di Tengah Kota", type: "Architecture", category: "architecture", desc: "Tata ruang yang mempertemukan fungsionalitas dan kenyamanan, tempat manusia dan struktur saling berinteraksi." },
    { id: "architecture-07", img: "images/fotografi/architecture/20260307_024504.webp", title: "Puncak Menara Sunyi", type: "Architecture", category: "architecture", desc: "Elevasi arsitektural yang menembus keheningan dini hari, kokoh menatap horizon kota." },
    { id: "architecture-08", img: "images/fotografi/architecture/20260613_223115.webp", title: "Siluet Peradaban Malam", type: "Architecture", category: "architecture", desc: "Ketika lampu-lampu kota mulai menyala, garis arsitektur menjelma siluet puitis yang membelah kegelapan." }
  ];

  const photoGalleryModal = document.getElementById("photo-gallery-modal");
  const photoDetailModal = document.getElementById("photo-detail-modal");
  const photoSeriesGrid = document.getElementById("photo-series-grid");
  const photoGalleryFilters = document.querySelectorAll(".photo-gallery-filter");
  const photoGalleryClose = document.getElementById("photo-gallery-close");
  const photoDetailClose = document.getElementById("photo-detail-close");
  const photoDetailImage = document.getElementById("photo-detail-image");
  const photoDetailPrev = document.getElementById("photo-detail-prev");
  const photoDetailNext = document.getElementById("photo-detail-next");
  const photoDetailTitle = document.getElementById("photo-detail-title");
  const photoDetailKicker = document.getElementById("photo-detail-kicker");
  const photoDetailDescription = document.getElementById("photo-detail-description");
  const photoLikeBtn = document.getElementById("photo-like-btn");
  const photoLikeCount = document.getElementById("photo-like-count");
  const photoCommentToggle = document.getElementById("photo-comment-toggle");
  const photoCommentCount = document.getElementById("photo-comment-count");
  const photoComments = document.getElementById("photo-comments");
  const photoCommentsList = document.getElementById("photo-comments-list");
  const photoCommentForm = document.getElementById("photo-comment-form");
  const photoCommentInput = document.getElementById("photo-comment-input");
  const photoShareBtn = document.getElementById("photo-share-btn");
  const photoStoreKey = "galih_photo_series_interactions_v1";
  const photoChannel = "BroadcastChannel" in window ? new BroadcastChannel("galih-photo-series") : null;
  let activePhoto = null;
  let activePhotoFilter = "all";

  function updatePhotoDetail(photo) {
    if (!photo) return;
    activePhoto = photo;
    photoDetailImage.src = photo.img;
    photoDetailImage.alt = photo.title;
    photoDetailTitle.textContent = photo.title;
    photoDetailKicker.textContent = photo.type.toUpperCase();
    photoDetailDescription.textContent = photo.desc;
    renderPhotoInteractions();
  }

  function readPhotoInteractions() {
    try { return JSON.parse(localStorage.getItem(photoStoreKey)) || {}; } catch { return {}; }
  }
  function photoInteraction(photoId) {
    const records = readPhotoInteractions();
    return records[photoId] || { likes: 0, liked: false, comments: [] };
  }
  function savePhotoInteractions(photoId, change) {
    const records = readPhotoInteractions();
    records[photoId] = { ...photoInteraction(photoId), ...change };
    localStorage.setItem(photoStoreKey, JSON.stringify(records));
    if (photoChannel) photoChannel.postMessage({ photoId });
    renderPhotoInteractions();
  }
  function renderPhotoInteractions() {
    if (!activePhoto) return;
    const state = photoInteraction(activePhoto.id);
    photoLikeCount.textContent = state.likes;
    photoCommentCount.textContent = state.comments.length;
    photoLikeBtn.classList.toggle("is-liked", state.liked);
    photoLikeBtn.querySelector("i").className = state.liked ? "fa-solid fa-heart" : "fa-regular fa-heart";
    photoCommentsList.innerHTML = state.comments.length
      ? state.comments.map((comment) => `<article class="photo-comment"><strong>${comment.author}</strong><span>${comment.text}</span></article>`).join("")
      : '<p class="photo-comment-empty">Belum ada komentar. Jadilah yang pertama.</p>';
  }
  function renderPhotoGallery(filter = activePhotoFilter) {
    if (!photoSeriesGrid) return;
    activePhotoFilter = filter;
    const visiblePhotos = filter === "all" ? photoSeries : photoSeries.filter((photo) => photo.category === filter);
    photoSeriesGrid.innerHTML = visiblePhotos.map((photo, index) => `
      <button class="photo-series-card" type="button" data-photo-id="${photo.id}">
        <img src="${photo.img}" alt="${photo.title}" loading="lazy" />
        <span class="photo-series-card-index">0${index + 1}</span>
        <span class="photo-series-card-copy"><strong>${photo.title}</strong><em>${photo.type}</em></span>
      </button>`).join("");
    photoSeriesGrid.querySelectorAll(".photo-series-card").forEach((card) => {
      card.addEventListener("click", () => openPhotoDetail(card.dataset.photoId));
    });
  }
  photoGalleryFilters.forEach((button) => {
    button.addEventListener("click", () => {
      photoGalleryFilters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderPhotoGallery(button.dataset.photoFilter);
    });
  });
  function openPhotoGallery() {
    renderPhotoGallery();
    photoGalleryModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closePhotoGallery() {
    photoGalleryModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
  function openPhotoDetail(photoId) {
    activePhoto = photoSeries.find((photo) => photo.id === photoId);
    if (!activePhoto) return;
    updatePhotoDetail(activePhoto);
    photoComments.hidden = true;
    photoGalleryModal.classList.remove("active");
    photoDetailModal.classList.add("active");
  }

  function movePhotoDetail(step) {
    if (!activePhoto) return;
    const currentIndex = photoSeries.findIndex((photo) => photo.id === activePhoto.id);
    const nextIndex = (currentIndex + step + photoSeries.length) % photoSeries.length;
    updatePhotoDetail(photoSeries[nextIndex]);
  }

  if (photoDetailPrev) photoDetailPrev.addEventListener("click", () => movePhotoDetail(-1));
  if (photoDetailNext) photoDetailNext.addEventListener("click", () => movePhotoDetail(1));
  function closePhotoDetail(returnToGallery = true) {
    photoDetailModal.classList.remove("active");
    if (returnToGallery) openPhotoGallery(); else document.body.style.overflow = "auto";
  }
  if (photoGalleryClose) photoGalleryClose.addEventListener("click", closePhotoGallery);
  if (photoDetailClose) photoDetailClose.addEventListener("click", () => closePhotoDetail(true));
  if (photoGalleryModal) photoGalleryModal.addEventListener("click", (event) => { if (event.target === photoGalleryModal) closePhotoGallery(); });
  if (photoDetailModal) photoDetailModal.addEventListener("click", (event) => { if (event.target === photoDetailModal) closePhotoDetail(false); });
  if (photoLikeBtn) photoLikeBtn.addEventListener("click", () => {
    const state = photoInteraction(activePhoto.id);
    savePhotoInteractions(activePhoto.id, { liked: !state.liked, likes: Math.max(0, state.likes + (state.liked ? -1 : 1)) });
  });
  if (photoCommentToggle) photoCommentToggle.addEventListener("click", () => { photoComments.hidden = !photoComments.hidden; if (!photoComments.hidden) photoCommentInput.focus(); });
  if (photoCommentForm) photoCommentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = photoCommentInput.value.trim();
    if (!text || !activePhoto) return;
    const state = photoInteraction(activePhoto.id);
    savePhotoInteractions(activePhoto.id, { comments: [...state.comments, { author: "Anda", text }] });
    photoCommentInput.value = "";
  });
  if (photoShareBtn) photoShareBtn.addEventListener("click", async () => {
    const shareData = { title: activePhoto.title, text: activePhoto.desc, url: `${location.href.split("#")[0]}#photo-${activePhoto.id}` };
    try { if (navigator.share) await navigator.share(shareData); else { await navigator.clipboard.writeText(shareData.url); photoShareBtn.querySelector("span").textContent = "Tersalin"; setTimeout(() => photoShareBtn.querySelector("span").textContent = "Bagikan", 1600); } } catch (_) { /* User may dismiss the native share sheet. */ }
  });
  window.addEventListener("storage", (event) => { if (event.key === photoStoreKey) renderPhotoInteractions(); });
  if (photoChannel) photoChannel.addEventListener("message", () => renderPhotoInteractions());

  // 9. CERTIFICATE MODAL VIEWER (TOP TITLE, FULL PHOTO & SLIDER ARROWS)
  const certModal = document.getElementById("cert-modal");
  const certModalContainer = document.getElementById("cert-modal-container");
  const certModalClose = document.getElementById("cert-modal-close");
  const certModalIconWrap = document.getElementById("cert-modal-icon-wrap");
  const certModalImgWrap = document.getElementById("cert-modal-img-wrap");
  const certModalImg = document.getElementById("cert-modal-img");
  const certPrevBtn = document.getElementById("cert-prev-btn");
  const certNextBtn = document.getElementById("cert-next-btn");
  const certModalIssuer = document.getElementById("cert-modal-issuer");
  const certModalStatus = document.getElementById("cert-modal-status");
  const certModalTitle = document.getElementById("cert-modal-title");
  const certModalDesc = document.getElementById("cert-modal-desc");

  let activeCertItems = [];
  let currentCertItemIndex = 0;

  function renderCertSlide(idx) {
    if (!activeCertItems || activeCertItems.length === 0) return;
    if (idx < 0) idx = activeCertItems.length - 1;
    if (idx >= activeCertItems.length) idx = 0;
    currentCertItemIndex = idx;

    const item = activeCertItems[currentCertItemIndex];
    if (!item) return;

    if (certModalImg) {
      certModalImg.style.opacity = "0";
      setTimeout(() => {
        certModalImg.src = item.img;
        certModalImg.alt = item.title;
        certModalImg.style.opacity = "1";
      }, 100);
    }

    // Title at the TOP updates to match the active certificate
    if (certModalTitle) certModalTitle.textContent = item.title;
    if (certModalIssuer) certModalIssuer.textContent = item.issuer;
    if (certModalStatus) {
      certModalStatus.textContent = item.status || "Kredensial Resmi / Terverifikasi";
      certModalStatus.style.borderColor = "var(--accent-primary)";
      certModalStatus.style.color = "var(--accent-primary)";
    }
    if (certModalDesc) {
      const descText = item.descs && (item.descs[currentLang] || item.descs.id || item.descs.en);
      certModalDesc.textContent = descText || "";
    }
  }

  if (certPrevBtn) {
    certPrevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      renderCertSlide(currentCertItemIndex - 1);
    });
  }

  if (certNextBtn) {
    certNextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      renderCertSlide(currentCertItemIndex + 1);
    });
  }

  const certCards = document.querySelectorAll(".cert-card-bar");
  certCards.forEach((card) => {
    card.addEventListener("click", () => {
      const certId = card.getAttribute("data-cert-id");
      const c = certsData.find((item) => item.id === certId);
      if (!c || !certModal) return;

      if (c.items && c.items.length > 0) {
        // Multi-certificate with full photo and slider arrows
        activeCertItems = c.items;
        currentCertItemIndex = 0;

        if (certModalContainer) certModalContainer.classList.remove("is-placeholder");
        if (certModalIconWrap) certModalIconWrap.style.display = "none";
        if (certModalImgWrap) certModalImgWrap.style.display = "flex";

        if (c.items.length > 1) {
          if (certPrevBtn) certPrevBtn.style.display = "flex";
          if (certNextBtn) certNextBtn.style.display = "flex";
        } else {
          if (certPrevBtn) certPrevBtn.style.display = "none";
          if (certNextBtn) certNextBtn.style.display = "none";
        }

        renderCertSlide(0);
      } else if (c.images && c.images.length > 0) {
        // Single image fallback
        activeCertItems = c.images.map((imgSrc, i) => ({
          title: c.titles[currentLang] || c.titles.id,
          issuer: c.issuer,
          img: imgSrc,
          status: (c.status && (c.status[currentLang] || c.status.id)) || "Kredensial Resmi / Terverifikasi",
          descs: c.descs
        }));
        currentCertItemIndex = 0;

        if (certModalContainer) certModalContainer.classList.remove("is-placeholder");
        if (certModalIconWrap) certModalIconWrap.style.display = "none";
        if (certModalImgWrap) certModalImgWrap.style.display = "flex";

        if (activeCertItems.length > 1) {
          if (certPrevBtn) certPrevBtn.style.display = "flex";
          if (certNextBtn) certNextBtn.style.display = "flex";
        } else {
          if (certPrevBtn) certPrevBtn.style.display = "none";
          if (certNextBtn) certNextBtn.style.display = "none";
        }

        renderCertSlide(0);
      } else {
        // Placeholder for certifications without uploaded documents yet
        activeCertItems = [];
        if (certModalContainer) certModalContainer.classList.add("is-placeholder");
        if (certModalIconWrap) certModalIconWrap.style.display = "flex";
        if (certModalImgWrap) certModalImgWrap.style.display = "none";
        if (certPrevBtn) certPrevBtn.style.display = "none";
        if (certNextBtn) certNextBtn.style.display = "none";

        const certTitle = c.titles[currentLang] || c.titles.id || c.titles.en;
        if (certModalTitle) certModalTitle.textContent = certTitle;
        if (certModalIssuer) certModalIssuer.textContent = c.issuer;
        if (certModalStatus) {
          certModalStatus.textContent = i18nData[currentLang]?.certPlaceholderStatus || "Belum memiliki sertifikat / belum tersedia";
          certModalStatus.style.borderColor = "var(--border-color)";
          certModalStatus.style.color = "var(--text-muted)";
        }
        if (certModalDesc) {
          certModalDesc.textContent = i18nData[currentLang]?.certPlaceholderDesc || "Berkas sertifikat resmi belum tersedia.";
        }
      }

      certModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeCertModal() {
    if (certModal) {
      certModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  if (certModalClose) certModalClose.addEventListener("click", closeCertModal);
  if (certModal) {
    certModal.addEventListener("click", (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  // 9. COMPANY COLLABORATION MODAL
  const companyModal = document.getElementById("company-modal");
  const companyModalLogo = document.getElementById("company-modal-logo");
  const companyModalName = document.getElementById("company-modal-name");
  const companyModalTag = document.getElementById("company-modal-tag");
  const companyModalLocation = document.getElementById("company-modal-location");
  const companyModalPeriod = document.getElementById("company-modal-period");
  const companyModalDesc = document.getElementById("company-modal-desc");
  const companyModalMapLink = document.getElementById("company-modal-maplink");
  const companyDocumentationGrid = document.getElementById("company-documentation-grid");
  const companyPhotoPreview = document.getElementById("company-photo-preview");
  const companyPhotoPreviewImage = document.getElementById("company-photo-preview-image");
  const companyPhotoPreviewCaption = document.getElementById("company-photo-preview-caption");
  const companyPhotoPreviewClose = document.getElementById("company-photo-preview-close");
  const companyModalClose = document.getElementById("company-modal-close");

  const collabCards = document.querySelectorAll(".collab-partner-card");
  collabCards.forEach((card) => {
    card.addEventListener("click", () => {
      const collabId = card.getAttribute("data-collab-id");
      const col = collaborationsData.find((item) => item.id === collabId);
      if (!col || !companyModal) return;

      if (companyModalLogo) companyModalLogo.src = col.logo;
      companyModalName.textContent = col.name;
      companyModalTag.textContent = col.tags[currentLang] || col.tags.id;
      companyModalLocation.textContent = col.location;
      
      const roleText = col.roles[currentLang] || col.roles.id;
      companyModalPeriod.textContent = `${roleText} (${col.period})`;
      companyModalDesc.textContent = col.descs[currentLang] || col.descs.id;

      if (companyDocumentationGrid) {
        companyDocumentationGrid.innerHTML = (col.documentation || []).map((item) => `
          <button class="company-documentation-item" type="button" data-image="${item.img}" data-caption="${item.caption}">
            <img src="${item.img}" alt="${item.caption}" loading="lazy" decoding="async" />
          </button>`).join("");
        companyDocumentationGrid.querySelectorAll(".company-documentation-item").forEach((item) => {
          item.addEventListener("click", () => {
            companyPhotoPreviewImage.src = item.dataset.image;
            companyPhotoPreviewImage.alt = "";
            if (companyPhotoPreviewCaption) companyPhotoPreviewCaption.textContent = "";
            companyPhotoPreview.classList.add("active");
            document.body.style.overflow = "hidden";
          });
        });
      }
      
      if (companyModalMapLink) {
        companyModalMapLink.href = col.mapUrl;
      }

      companyModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeCompanyModal() {
    if (companyModal) {
      companyModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  if (companyModalClose) companyModalClose.addEventListener("click", closeCompanyModal);
  if (companyModal) {
    companyModal.addEventListener("click", (e) => {
      if (e.target === companyModal) closeCompanyModal();
    });
  }
  function closeCompanyPhotoPreview() {
    if (companyPhotoPreview) companyPhotoPreview.classList.remove("active");
    if (companyModal && companyModal.classList.contains("active")) document.body.style.overflow = "hidden";
  }
  if (companyPhotoPreviewClose) companyPhotoPreviewClose.addEventListener("click", closeCompanyPhotoPreview);
  if (companyPhotoPreview) companyPhotoPreview.addEventListener("click", (e) => {
    if (e.target === companyPhotoPreview) closeCompanyPhotoPreview();
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (modalBackdrop && modalBackdrop.classList.contains("active")) {
      if (e.key === "ArrowLeft") updateModalSlide(currentSlideIndex - 1);
      if (e.key === "ArrowRight") updateModalSlide(currentSlideIndex + 1);
    }
    if (photoDetailModal && photoDetailModal.classList.contains("active")) {
      if (e.key === "ArrowLeft") movePhotoDetail(-1);
      if (e.key === "ArrowRight") movePhotoDetail(1);
    }
    if (e.key === "Escape") {
      closeProjectModal();
      closeCertModal();
      closeCompanyModal();
      closeCompanyPhotoPreview();
      if (photoDetailModal && photoDetailModal.classList.contains("active")) closePhotoDetail(false);
      closePhotoGallery();
    }
  });

  // 10. CONTACT FORM SUBMISSION
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      const t = i18nData[currentLang] || i18nData.id;

      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${t.formSending || "Mengirim Pesan..."}`;
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      const dataObj = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        _subject: "Pesan Portofolio Baru dari " + (formData.get("name") || "Pengunjung"),
        _template: "table"
      };

      try {
        const response = await fetch("https://formsubmit.co/ajax/galihakbar3012@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(dataObj)
        });

        submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${t.formSuccess || "Pesan Terkirim!"}`;

        if (formStatus) {
          formStatus.style.display = "block";
          formStatus.innerHTML = `
            <div style="padding: 14px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-primary); font-size: 0.9rem; margin-top: 14px; font-weight: 600;">
              ${t.formSuccessNotice || "Terima kasih! Pesan Anda telah dikirim langsung ke galihakbar3012@gmail.com."}
            </div>
          `;
        }

        contactForm.reset();
      } catch (err) {
        submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${t.formSuccess || "Pesan Terkirim!"}`;
        if (formStatus) {
          formStatus.style.display = "block";
          formStatus.innerHTML = `
            <div style="padding: 14px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-primary); font-size: 0.9rem; margin-top: 14px; font-weight: 600;">
              ${t.formSuccessNotice || "Terima kasih! Pesan Anda telah dikirim langsung ke galihakbar3012@gmail.com."}
            </div>
          `;
        }
        contactForm.reset();
      }

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 4000);
    });
  }

  // 11. SCROLL REVEAL
  function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal-on-scroll, .motion-reveal, .page-transition");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  // 12. SPOTLIGHT REVEAL EFFECT (PROFILE & SPATIAL MAP)
  function initSpotlightReveal(revealContainer) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;
    let animationFrameId = null;

    function updatePosition(clientX, clientY) {
      const rect = revealContainer.getBoundingClientRect();
      targetX = clientX - rect.left;
      targetY = clientY - rect.top;

      if (!isHovered) {
        currentX = targetX;
        currentY = targetY;
      }
    }

    function renderReveal() {
      if (isHovered) {
        currentX += (targetX - currentX) * 0.25;
        currentY += (targetY - currentY) * 0.25;

        revealContainer.style.setProperty("--mouse-x", `${currentX.toFixed(2)}px`);
        revealContainer.style.setProperty("--mouse-y", `${currentY.toFixed(2)}px`);
        animationFrameId = requestAnimationFrame(renderReveal);
      } else {
        animationFrameId = null;
      }
    }

    revealContainer.addEventListener("mouseenter", (e) => {
      isHovered = true;
      revealContainer.classList.add("active");
      updatePosition(e.clientX, e.clientY);
      if (!animationFrameId) renderReveal();
    });

    revealContainer.addEventListener("mousemove", (e) => {
      updatePosition(e.clientX, e.clientY);
    });

    revealContainer.addEventListener("mouseleave", () => {
      isHovered = false;
      revealContainer.classList.remove("active");
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    });

    revealContainer.addEventListener("touchstart", (e) => {
      isHovered = true;
      revealContainer.classList.add("active");
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
      if (!animationFrameId) renderReveal();
    }, { passive: true });

    revealContainer.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    revealContainer.addEventListener("touchend", () => {
      isHovered = false;
      revealContainer.classList.remove("active");
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    });
  }

  [document.getElementById("revealContainer"), document.getElementById("spatialRevealContainer")]
    .filter(Boolean)
    .forEach(initSpotlightReveal);

  // Apply one consistent entrance treatment to section text and interface groups.
  document.querySelectorAll(
    ".hero-badge, .hero-title, .hero-subtitle, .hero-desc, .hero-actions, .hero-metrics, .section-title, .section-desc, .discipline-heading, .filter-bar, .collab-grid, .about-grid, .contact-grid"
  ).forEach((element) => element.classList.add("motion-reveal"));

  const transitionSections = document.querySelectorAll("#home, #gis-projects, #design-projects, #experience, #about, #contact");
  transitionSections.forEach((section) => section.classList.add("page-transition"));

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let parallaxFrame = null;
    const updateParallax = () => {
      transitionSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = Math.max(-22, Math.min(22, (window.innerHeight / 2 - (rect.top + rect.height / 2)) * 0.045));
        section.style.setProperty("--page-parallax", `${offset.toFixed(2)}px`);
      });
      parallaxFrame = null;
    };
    window.addEventListener("scroll", () => {
      if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax);
    }, { passive: true });
    updateParallax();
  }

  // Replay the Design Studio card sequence whenever its introduction enters view.
  const studioShowcase = document.getElementById("design-studio");
  const studioGallery = studioShowcase?.querySelector(".studio-gallery");
  if (studioShowcase && studioGallery && "IntersectionObserver" in window) {
    const studioGalleryObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          studioGallery.classList.remove("is-active");
          requestAnimationFrame(() => studioGallery.classList.add("is-active"));
        } else {
          studioGallery.classList.remove("is-active");
        }
      });
    }, { threshold: 0.42 });
    studioGalleryObserver.observe(studioShowcase);
  } else if (studioGallery) {
    studioGallery.classList.add("is-active");
  }

  // Initial language application
  applyLanguage(currentLang);
  initScrollReveal();
});
