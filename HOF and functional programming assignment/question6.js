// Sample array of expense objects
const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Rent' },
    { amount: 50, category: 'Transport' },
    { amount: 80, category: 'Entertainment' },
    { amount: 120, category: 'Groceries' },
    { amount: 90, category: 'Groceries' }
];

// Function to categorize expense based on amount
function categorizeExpense(expense) {
    return expense.amount > 100 ? 'High Expense' : 'Low Expense';
}

// Use the map method to create a new array with categorized expenses
const categorizedExpenses = expenses.map(expense => categorizeExpense(expense));

// Output the new array
console.log('Categorized Expenses:', categorizedExpenses);
