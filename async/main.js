function final(val) {
    console.log(val)
}

async function asyncSimulator() {
    return Math.floor(Math.random() * 10)
}



asyncSimulator().then((resolve) => {
    final(resolve)
}, (reject) => {
    final(reject)
})

console.log("I am sync execution");


async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("I love You !!");
    });
    console.log(`My promise: ` + await myPromise);

}

myDisplay();
console.log("I am executed by main control at last");