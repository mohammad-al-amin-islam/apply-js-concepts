function getFactorial(number) {
    let factorial = 1;
    for(let i = 1;i <= number;i ++){
        factorial =factorial * i;
    }
    return factorial;
}

var firstFactorial = getFactorial(7);
console.log(firstFactorial);

var secondFactorial = getFactorial(9);
console.log(secondFactorial);