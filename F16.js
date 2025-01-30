function isMorningOrNight(time){
    if(time >= 6 && time < 12){
        console.log("Morning");
    }else if(time >= 12 && time < 18){
        console.log("Afternoon");
    }else{
        console.log("night");
    }
}
isMorningOrNight(10)
