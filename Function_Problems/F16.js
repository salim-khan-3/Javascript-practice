function isMorningOrNight(time){
    if(time >= 6 && time < 12){
        console.log("Morning");
    }else if(time >= 12 && time < 18){
        console.log("Afternoon");
    }else if(time > 24){
        console.log('Invalid time');
    }
    else{
        console.log("night");
    }
}
isMorningOrNight(23)
isMorningOrNight(25)
isMorningOrNight(7)
isMorningOrNight(2)
isMorningOrNight(14)

