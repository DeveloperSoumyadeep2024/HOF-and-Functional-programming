// Sample array of expense objects
const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Rent' },
    { amount: 50, category: 'Transport' },
    { amount: 80, category: 'Entertainment' }
];

// Tax rate
const taxRate = 0.10;

// Function to calculate the tax for each expense
function calculateTax(expense) {
    const taxAmount = expense.amount * taxRate;
    return {
        ...expense,
        tax: taxAmount
    };
}

// Use the map method to create a new array with calculated tax for each expense
const expensesWithTax = expenses.map(calculateTax);

// Output the new array
console.log(expensesWithTax);
