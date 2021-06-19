import dishes from './menu.json';
import template from '../menu-item.hbs';

const menuList = document.querySelector('.js-menu');
const menuItems = createMenuItem(dishes);
function createMenuItem(dishes) {
    return template(dishes);
}
menuList.insertAdjacentHTML('beforeend', menuItems);