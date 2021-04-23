import Theme from '../data/Theme';

const bodyRef = document.querySelector('body');
const checkBoxRef = document.querySelector('.theme-switch__toggle');

function toSetTheme(e) {
  const selectedTheme = e.currentTarget.localStorage.getItem(checkBoxRef.name);
  if (!selectedTheme) {
    toSetCheckedTheme(Theme.LIGHT);
  } else {
    toSetCheckedTheme(selectedTheme);
    isChecked(selectedTheme);
  }
}

function isChecked(currentTheme) {
  checkBoxRef.checked = currentTheme === Theme.DARK ? true : false;
}

function toSetCheckedTheme(chechedTheme) {
  bodyRef.classList = chechedTheme;
  localStorage.setItem(checkBoxRef.name, bodyRef.classList);
}

function onCheckBoxChange(e) {
  if (e.currentTarget.checked) {
    toSetCheckedTheme(Theme.DARK);
  } else {
    toSetCheckedTheme(Theme.LIGHT);
  }
}

checkBoxRef.addEventListener('change', onCheckBoxChange);
window.addEventListener('load', toSetTheme);
