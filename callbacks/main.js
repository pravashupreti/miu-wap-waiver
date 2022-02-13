function myDisplayer(sum) {
    console.log(sum)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    setTimeout(() => {
        myCallback(sum)
    }, 1000);

    console.log("synchronously executed")

}

myCalculator(5, 5, myDisplayer);
console.log("Completed")