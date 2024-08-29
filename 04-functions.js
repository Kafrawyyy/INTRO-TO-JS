function sum(a , b)
{
    let c = a+b
    return c
}
console.log(sum(10,10));

function multiply (a,b)
{
    return a*b ;
}
console.log(multiply(12,12));

function multiplybyten (a){
    return  multiply(10,a) ;
}

console.log(multiplybyten(52));

// annynomus function
setTimeout(function() {
    console.log("hello dear ceo !!");
} , 5000 ) ;  // appears after 5 sec


// arrow function for one line functions
setTimeout( () =>console.log("hello one arrow !!"), 1000 ) ; 