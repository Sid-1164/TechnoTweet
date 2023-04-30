function bill() {
    console.log(`Here is your bill !!`)
}

// function is passed as argument
function order(name , myCallback){
    console.log(`${name} for you`)
    myCallback()    // calling function
}

// calling function
order('coffee' , bill)
