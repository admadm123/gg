/* Основные стили навигации */
blz-nav.SiteNav {
  --wow-gold: #c8aa6e;
  --wow-dark: #0a0a0a;
  --wow-red: #9a0a0a;
  --wow-text: #e0e0e0;
  --nav-height: 60px;
}

/* Заголовок */
.sitenav {
  background: linear-gradient(to bottom, #1a1a1a 0%, #0a0a0a 100%) !important;
  border-bottom: 2px solid var(--wow-gold) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6) !important;
  height: var(--nav-height);
}

/* Логотип */
blz-nav-link[slot="site-icon"] {
  filter: drop-shadow(0 2px 4px rgba(200, 170, 110, 0.3)) !important;
  transition: transform 0.3s ease !important;
}

blz-nav-link[slot="site-icon"]:hover {
  transform: scale(1.05) !important;
}

/* Выпадающие меню */
blz-nav-dropdown {
  border-left: 1px solid rgba(200, 170, 110, 0.1) !important;
}

blz-nav-dropdown .dropdown-menu {
  background: #0a0a0a url('https://wow.zamimg.com/images/bg/blackboard.png') !important;
  border: 2px solid var(--wow-gold) !important;
  border-radius: 4px !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5) !important;
}

/* Пункты меню */
blz-nav-link {
  color: var(--wow-text) !important;
  font-family: 'Arial Narrow', sans-serif !important;
  font-size: 1.1rem !important;
  letter-spacing: 0.5px !important;
  transition: all 0.2s ease !important;
}

blz-nav-link:hover {
  background: rgba(200, 170, 110, 0.1) !important;
  color: var(--wow-gold) !important;
  border-left: 3px solid var(--wow-gold) !important;
}

/* Кнопки */
blz-nav-link.button-primary {
  background: linear-gradient(to bottom, #3d2a1b 0%, #1a120b 100%) !important;
  border: 1px solid var(--wow-gold) !important;
  border-radius: 3px !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;
  transition: all 0.3s ease !important;
}

blz-nav-link.button-primary:hover {
  background: linear-gradient(to bottom, #4d3a2b 0%, #2a221b 100%) !important;
  box-shadow: 0 0 8px rgba(200, 170, 110, 0.4) !important;
}

/* Мобильное меню */
@media (max-width: 768px) {
  .sitenav {
    padding: 0 15px !important;
  }
  
  blz-nav.SiteNav {
    --nav-height: 50px;
  }

  /* Гамбургер-меню */
  .mobile-menu-toggle {
    width: 40px !important;
    height: 40px !important;
    border: 1px solid var(--wow-gold) !important;
    border-radius: 3px !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }

  .mobile-menu-toggle svg path {
    stroke: var(--wow-gold) !important;
    stroke-width: 2px !important;
  }

  /* Анимация открытия меню */
  blz-nav[expanded] {
    background: rgba(10, 10, 10, 0.98) !important;
    backdrop-filter: blur(5px) !important;
  }
}

/* Анимации */
@keyframes glow {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

blz-nav-link[analytics-label="game_logo"] {
  animation: glow 3s ease-in-out infinite;
}

/* Разделители */
blz-nav-dropdown::after {
  content: "";
  display: block;
  height: 20px;
  border-left: 1px solid rgba(200, 170, 110, 0.2);
  margin: 0 10px;
}

h2, h3, .nav-title {
  font-family: 'Morris Roman', sans-serif !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
}