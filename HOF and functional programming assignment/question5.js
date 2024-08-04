// Sample array of expense objects
const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Rent' },
    { amount: 50, category: 'Transport' },
    { amount: 80, category: 'Entertainment' },
    { amount: 120, category: 'Groceries' },
    { amount: 90, category: 'Groceries' }
];

// Use the reduce method to calculate the total amount of all expenses
const totalAmount = expenses.reduce((total, expense) => {
    return total + expense.amount;
}, 0); // Initial value for total is 0

// Output the total amount
console.log('Total Amount of All Expenses:', totalAmount);
