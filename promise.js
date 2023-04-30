// Creating promise object
let order = new Promise((resolve, reject) => {
    // promise fullfilled
    resolve("Coffee for you")

    // promise not fullfilled
    reject(new Error("Sorry coffee is not available"))
})

// Log the result
console.log(order)

