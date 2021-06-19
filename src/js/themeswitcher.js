const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const themeSwitcher = document.querySelector('#theme-switch-toggle');

if(!localStorage.theme) localStorage.theme = Theme.LIGHT;
document.body.className = localStorage.theme;
themeSwitcher.checked = document.body.classList.contains(Theme.DARK) ? true : false;

themeSwitcher.addEventListener('change', onInputClick);

function onInputClick() {
    document.body.classList.toggle(Theme.DARK);
    localStorage.theme = document.body.className || Theme.LIGHT;
}
