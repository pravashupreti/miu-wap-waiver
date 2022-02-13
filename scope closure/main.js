var x = 0
test = function(){
    let x = 0
    return x = 5
}

// Global scope
console.log(x)

//local scope
console.log(test())
