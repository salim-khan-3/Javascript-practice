var number = -30;
 
if(number > 0) {
    if(number < 101){
        if(number % 3 === 0) {
            if(number % 5 === 0){
                console.log("FizzBuzz");
            }else{
                console.log("Fizz");
            }
        }else {
            console.log("Buzz");
        }
    }else{
        console.log("number must be between 1 to 100");
    }
}else{
    console.log("number must be between 1 to 100");
}
