/**
 * Theme Toggle Functionality
 * Handles light/dark theme switching with localStorage persistence
 */

(function() {
  'use strict';

  const THEME_KEY = 'theme-preference';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';

  /**
   * Get the user's preferred theme from localStorage or system preference
   * @returns {string} The theme preference ('dark' or 'light')
   */
  function getThemePreference() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
      return stored;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }
    
    return LIGHT_THEME;
  }

  /**
   * Apply the theme to the document
   * @param {string} theme - The theme to apply ('dark' or 'light')
   */
  function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === DARK_THEME) {
      root.setAttribute('data-theme', DARK_THEME);
    } else {
      root.removeAttribute('data-theme');
    }
    
    // Update checkbox state
    const checkbox = document.getElementById('theme-checkbox');
    if (checkbox) {
      checkbox.checked = theme === DARK_THEME;
    }
  }

  /**
   * Save the theme preference to localStorage
   * @param {string} theme - The theme to save ('dark' or 'light')
   */
  function saveThemePreference(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  /**
   * Initialize the theme system
   */
  function initTheme() {
    const theme = getThemePreference();
    applyTheme(theme);
    
    // Listen for checkbox changes
    const checkbox = document.getElementById('theme-checkbox');
    if (checkbox) {
      checkbox.addEventListener('change', function() {
        const newTheme = this.checked ? DARK_THEME : LIGHT_THEME;
        applyTheme(newTheme);
        saveThemePreference(newTheme);
      });
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // Only apply system preference if user hasn't set a manual preference
        if (!localStorage.getItem(THEME_KEY)) {
          applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
        }
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Also run immediately to prevent flash of wrong theme
  const initialTheme = getThemePreference();
  document.documentElement.setAttribute('data-theme', initialTheme === DARK_THEME ? DARK_THEME : '');
})();

/**
 * Scroll Animations
 * Adds animation classes to elements as they come into view
 */

(function() {
  'use strict';

  const ANIMATE_CLASS = 'animate-on-scroll';
  const VISIBLE_CLASS = 'animate-visible';

  function checkVisibility() {
    const elements = document.querySelectorAll(`.${ANIMATE_CLASS}`);
    
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        element.classList.add(VISIBLE_CLASS);
      }
    });
  }

  // Initial check
  checkVisibility();

  // Check on scroll with throttling
  let isThrottled = false;
  window.addEventListener('scroll', function() {
    if (isThrottled) return;
    isThrottled = true;
    
    requestAnimationFrame(() => {
      checkVisibility();
      isThrottled = false;
    });
  });

  // Check on resize
  window.addEventListener('resize', checkVisibility);
})();

/**
 * Smooth scroll for anchor links
 */

(function() {
  'use strict';

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Focus the target for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });
})();
