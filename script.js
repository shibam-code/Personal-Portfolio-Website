/**
 * ===================================================================
 * Custom JavaScript (script.js)
 * -------------------------------------------------------------------
 * This file contains the JavaScript code for interactive features
 * of the portfolio, including the theme toggler and the mobile
 * navigation menu (hamburger).
 * ===================================================================
 */

// --- SCROLL RESTORATION ---
// Force page to load at the top to ensure consistent starting position,
// overriding the browser's default scroll restoration behavior.
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// ===================================================================
// THEME TOGGLE (LIGHT/DARK MODE)
// ===================================================================

// Get necessary elements from the DOM
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

/**
 * Applies the selected theme to the page.
 * - Toggles the 'dark-theme' class on the body.
 * - Updates the button icon to reflect the current theme (sun/moon).
 * - Saves the user's preference to localStorage.
 * @param {string} theme - The theme to set ('light' or 'dark').
 */
const setTheme = (theme) => {
    body.classList.toggle('dark-theme', theme === 'dark');
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', theme);
};

// When the toggle button is clicked, check the current theme and switch to the other one.
themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    setTheme(isDark ? 'light' : 'dark');
});

// On page load, check for a saved theme in localStorage.
// If no theme is found, default to 'dark' mode.
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// ===================================================================
// HAMBURGER MENU (MOBILE NAVIGATION)
// ===================================================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});