// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

// The commonly used syntax of JavaScript setTimeout is:

// setTimeout(function, milliseconds);
// Its parameters are:

// function - a function containing a block of code
// milliseconds - the time after which the function is executed
// The setTimeout() method returns an intervalID, which is a positive integer.



const greeting = () => {
    console.log("function show after 5 second");
    setTimeout(()=>{
        console.log("hello")
    },2000);
} 

greeting();

// <----------------------------------------->

const CurrentYear = () => {
    console.log("current year => ");

    setTimeout(()=> {
        let CurrentYear = new Date().getFullYear();
        console.log(CurrentYear)
    }, 3000)
}


CurrentYear()