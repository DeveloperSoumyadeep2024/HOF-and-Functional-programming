// Original array of numbers
const originalNumbers = [2, 5, 8, 10, 3];

// Iterate through each element and double its value
originalNumbers.forEach((value, index, array) => {
    array[index] = value * 2; // Double the value at the current index
});

// Output the modified array
console.log('Modified Array:', originalNumbers);
