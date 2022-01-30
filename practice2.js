function ageEven(age){
    if (age % 2 ==0){
        return true;
    }
    else{
        return false;
    }
}

var myAge = ageEven(23);
console.log('my ages even?',myAge);