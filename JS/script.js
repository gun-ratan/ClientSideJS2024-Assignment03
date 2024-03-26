// Function to get student info and display it
function displayStudentInfo() {
    const studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = "Student ID: 200551703, Name:Gunratan kaur";
}

// Function to handle order button click
function handleOrder() {
    const size = document.getElementById('size').value;
    const crust = document.querySelector('input[name="crust"]:checked + label').textContent.trim();
    const toppings = [];
    document.querySelectorAll('input[name="toppings"]:checked').forEach(topping => {
        toppings.push(topping.nextElementSibling.textContent.trim());
    });
    const sauce = document.getElementById('sauce').options[document.getElementById('sauce').selectedIndex].textContent;

    const pizza = new Pizza(size, crust, toppings, sauce);
    displayPizzaInfo(pizza);
   
}

// Function to display pizza info
function displayPizzaInfo(pizza) {
    const pizzaInfo = document.createElement('div');
    pizzaInfo.innerHTML = `
        <h2>Your Pizza:</h2>
        <p>Size: ${pizza.size}</p>
        <p>Crust: ${pizza.crust}</p>
        <p>Toppings: ${pizza.toppings.join(', ')}</p>
        <p>Sauce: ${pizza.sauce}</p>
    `;
    document.body.appendChild(pizzaInfo);
}

// Class for Pizza object
class Pizza {
    constructor(size, crust, toppings, sauce) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.sauce = sauce;
    }
}
// Event listeners
document.getElementById('orderButton').addEventListener('click', handleOrder);
window.addEventListener('DOMContentLoaded', displayStudentInfo);


