function final(val) {
    console.log(val)
}

let promise = new Promise((resolve, reject) => {
    // resolve the promise on even random number and reject the promise on odd one.
    setTimeout(() => {
        let rand = Math.random()
        rand = rand * 10
        rand = Math.floor(rand)
        if (rand % 2 == 0) {
            console.log("Promise resolved!")
            resolve(rand)
        } else {
            console.log("Promise rejected!")
            reject(rand)
        }

    }, 1000)
})

promise.then((resolve) => {
    final(resolve)
}, (reject) => {
    final(reject)
})