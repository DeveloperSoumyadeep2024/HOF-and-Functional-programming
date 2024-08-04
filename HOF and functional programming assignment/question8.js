// Original array of numbers
const originalNumbers = [2, 5, 8, 10, 3];

// New array to store even numbers
const evenNumbers = [];

// Use the forEach method to iterate through each element
originalNumbers.forEach((value) => {
    if (value % 2 === 0) { // Check if the number is even
        evenNumbers.push(value); // Add the even number to the new array
    }
});

// Output the new array of even numbers
console.log('Even Numbers:', evenNumbers);
