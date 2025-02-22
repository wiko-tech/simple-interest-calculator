// Initialize the menu arrays with prices
const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $30', 'Pasta - $18.50', 'Burger - $12.75', 'Salmon - $25.99'];
const dessertMenu = ['Cake - $8', 'Ice Cream - $5', 'Pudding - $7.50', 'Fruit Salad - $6'];

// Function to display breakfast menu using the map method
function displayBreakfastMenu() {
    const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
}

// Function to display main course menu using the forEach method
function displayMainCourseMenu() {
    let mainCourseItem = '';
    mainCourseMenu.forEach((item, index) => {
        mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
    });
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
}

// Function to display dessert menu using the for loop
function displayDessertMenu() {
    let dessertItem = '';
    for (let i = 0; i < dessertMenu.length; i++) {
        dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
    }
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;
}

// Function to display total items count
function displayItemCount() {
    document.getElementById('breakfastTotalItems').textContent = `Total Breakfast Items: ${breakfastMenu.length}`;
    document.getElementById('maincourseTotalItems').textContent = `Total Main Course Items: ${mainCourseMenu.length}`;
    document.getElementById('dessertTotalItems').textContent = `Total Dessert Items: ${dessertMenu.length}`;
}

// Call functions to display menus
window.onload = function() {
    displayBreakfastMenu();
    displayMainCourseMenu();
    displayDessertMenu();
    displayItemCount();
};
