function order() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve('Coffee for you');
        }, 2000);
    });
}

// creating async function 
async function waiter() {
    console.log('Order has been placed...');
    
    // wait for completion 
    const res = await order();
    console.log(res);

    console.log('Here is your bill !!');
}

waiter();