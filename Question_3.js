var number = 800;

if(number > 0) {
    if(number < 101){
        if(number >= 80){
            console.log("A");
        }else if(number >= 60){
            console.log("B");
        }else if(number >= 40){
            console.log("C");
        }else{
            console.log("F")
        }
    }else {
        console.log("Number must be between 1 to 100");
     }
}