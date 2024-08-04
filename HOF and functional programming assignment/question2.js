// Function to generate and print a random number every 2 seconds
function printRandomNumberIndefinitely() {
    setInterval(() => {
        const randomNumber = Math.random(); // Generate a random number between 0 and 1
        console.log(randomNumber);
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the function to start printing random numbers indefinitely
printRandomNumberIndefinitely();
