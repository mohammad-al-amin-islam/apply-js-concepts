// factorial using while loop
function getFactorial(number){
    let factorial =1;
    let i = 1;
    while (i<=number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const whileLoppFactorial = getFactorial(4);
console.log(whileLoppFactorial);

// while loop reverse 
function getFactorial(number){
    let factorial =1;
    let i = number;
    while (i>=1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const firstFactorial = getFactorial(5);
console.log(firstFactorial);

// for loop reverse 
function getFactorial2(number){
    let factorial = 1;
    for(let i = number; i >=1; i--){
        factorial =factorial * i;
    }
    return factorial;
}
const firstFactorial2 = getFactorial2(6);
console.log(firstFactorial2);
