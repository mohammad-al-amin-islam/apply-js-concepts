function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var mehediInches = inchToFeet(60);
console.log(mehediInches);

var sojibInches = inchToFeet(72);
console.log(sojibInches);

//miles to km
function milesToKilometers(miles){
    var km = miles * 1.60934 ;
    return km;
}

var marathonKm = milesToKilometers(26.2);
console.log('marathon in km',marathonKm);