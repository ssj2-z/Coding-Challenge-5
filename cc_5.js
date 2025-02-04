// Task 1 Profile 
const customer = {
    name: "Stevie Wonder",
    age: 45,
    email: "WonderS@gmail.com"
}

// Task 2 Ordering Details
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
let cartItems = ["Basketball", "Football", "Baseball"];
.push()
cartItems.push("Tennisball");
cartItems.pop();
cartItems.unshift("Golfball");
cartItems.shift();
console.log(cartItems);

// Task 4 Mapping it out
let prices = [5, 10, 15];
let discountedPrices = prices.map(price => price * .9);
console.log(discountedPrices);

// Task 5 Filter
let inventory = [0, 1, 3, 4, 2];
let availableProducts = inventory.filter(quantity => quantity > 0);
console.log(availableProducts);
