function isLeapYear(year){
    if(((year % 4 == 0) && (year % 100 !=0) )|| year % 400 == 0 ){
        return true;
    }
    else {
        return false;
    }
}

var nextYear = isLeapYear(2023);
console.log(nextYear);