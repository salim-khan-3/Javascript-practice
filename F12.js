function isLeapYear(year){
    if(year % 4 && year % 100 !== 0 || year % 400 === 0){
        return  year + " is leap year";
    }else{
        return year + " is not leap year";
    }
}
let inputYear = isLeapYear(2400);
console.log(inputYear);
