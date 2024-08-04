// Function to calculate the total price of a customer's order
function calculateTotalPrice(items) {
    let totalPrice = 0;

    // Iterate through the array of items using forEach and sum up the prices
    items.forEach(item => {
        totalPrice += item.price;
    });

    return totalPrice;
}

// Example usage
const orderItems = [
    { name: 'Laptop', price: 999.99 },
    { name: 'Mouse', price: 25.50 },
    { name: 'Keyboard', price: 49.99 },
    { name: 'Monitor', price: 199.99 }
];

const totalOrderAmount = calculateTotalPrice(orderItems);
console.log('Total Order Amount:', totalOrderAmount);
