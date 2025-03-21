let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection

    setTimeout(() => {
        if (success) {
            resolve("Operation Successful ✅");
        } else {
            reject("Operation Failed ❌");
        }
    }, 2000);
});

//using then()and catch()
// myPromise.then((message) => {
//     console.log("Success:", message);
// })
// .catch((error) => {
//     console.log("Error:", error);
// });
    
