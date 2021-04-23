import menuFoods from '../data/menu.json';
import getFoods from '../markup/foods.hbs';

const menuRef = document.querySelector('.js-menu');
const markup = getFoods(menuFoods);
menuRef.insertAdjacentHTML('afterbegin', markup);