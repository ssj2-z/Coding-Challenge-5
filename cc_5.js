// Task 1 Profile 
// Customer profile
const customer = {
    name: "Stevie Wonder",
    age: 45,
    email: "WonderS@gmail.com"
}

// Task 2 Ordering Details
// Item details
let order = {
    orderId: 33602,
    totalAmount: 602,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount:
$${this.totalAmount}`);
            console.log(`Status: ${this.status}`);
    }
};
order.displayOrder();

// Task 3 Arraying Tricks
// Adding items to a database
let cartItems = ["Basketball", "Football", "Baseball"];
cartItems.push()
cartItems.push("Tennisball");
cartItems.pop();
cartItems.unshift("Golfball");
cartItems.shift();
console.log(cartItems);

// Task 4 Mapping it out
// Discounting certain pricing 
let prices = [5, 10, 15];
let discountedPrices = prices.map(price => price * .9);
console.log(discountedPrices);

// Task 5 Filter
// Sorting through inventory records
let inventory = [0, 1, 3, 4, 2];
let availableProducts = inventory.filter(quantity => quantity > 0);
console.log(availableProducts);

// Task 6 Revenue 
// Income cslculated
let sales = [10, 15, 20, 30];
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);
console.log(`Total revenue: $${totalRevenue}`);

// Task 7 Finding and Sorting 
// Sorting through records
let customers = ["Bob", "Steve", "John", "Jordan"];
let patient = customers.find(name => name === "John");
console.log(`Customer found: ${customer}`);

// Task 8 Declaration a function
// Calculating taxes and rates
function calculateTax(amount, taxRate) {
    const tax = amount * taxRate;
    console.log(`The calculated tax is:
$${tax.toFixed(2)}`);
        return tax;
}

// Task 9 Expressional Functions
// Calculating discount
const applyDiscount = function(price, discount) {
    const discountedPrice = price - (price * discount);
    console.log(`The discounted price is:
$${discountedPrice.toFixed(2)}`); return discountedPrice;
};

// Task 10 Arrow function
// Calculating membership points
const calculatePoints = (purchaseAmount) => {
    const points = Math.floor(purchaseAmount / 10);
    console.log(`You have earned ${points} points.`); 
    return points;
};