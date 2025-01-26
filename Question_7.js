var year = 1700;
var month = "November";

if(month === "February") {
    if(year % 4 ===0){
        if(year % 100!== 0){
            if(year % 400 === 0) {
                console.log(year + " is a leap year . February has 29 days.")
            }
            else{
                console.log(year + " is not a leap year and February has 28 days");
            }
        }else {
            console.log(year + " is not leap year and february has 28 days")
        }
    }else{
        console.log( year +"this year is not leap year")
    }
}else if(month ==="january") {
    console.log("31 days")
}
else{
    console.log("The month entered is not february")
}