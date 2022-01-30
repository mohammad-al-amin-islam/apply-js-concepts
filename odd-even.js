// function oddOrEven (number){
//     if(number % 2 == 0){
//         console.log('this is even number');
//     }
//     else{
//         console.log('this is odd number');
//     }
// }
// oddOrEven(3);

function isEven(number){
    if (number % 2 == 0){
        return true;
    }
    return false;
}

var myNumber = 1998;
var result = isEven(myNumber);
console.log('is my number even:',result);

var herNumber = 2007;
var result = isEven(herNumber);
console.log('is her number even:',result);


function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
    
}

var myNumber = 1998;
var result = isOdd(myNumber);
console.log('is my number odd:',result);

var herNumber = 2007;
var result = isOdd(herNumber);
console.log('is her number odd:',result);

