// Initialize the menu arrays
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

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

// Function to display total items count using forEach for other menus
function displayOtherMenus(menuArray, totalItemsId, menuItemsId) {
    document.getElementById(totalItemsId).textContent = `Total Items: ${menuArray.length}`;

    let menuList = '<ul>';
    menuArray.forEach(item => {
        menuList += `<li>${item}</li>`;
    });
    menuList += '</ul>';

    document.getElementById(menuItemsId).innerHTML = menuList;
}

// Display all menu sections
displayBreakfastMenu(); // Using the map method for breakfast menu
displayMainCourseMenu(); // Using forEach for main course menu
displayDessertMenu(); // Using for loop for dessert menu
