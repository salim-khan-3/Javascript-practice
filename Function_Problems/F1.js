function findLargeNumber(num1,num2){
    if(num1>num2){
        return num1 + " is the largest number";
    }else if(num1<num2){
        return num2 + " is the largest number";
    }else{
         return "Both number are equals";
    }
}

console.log(findLargeNumber(15,15));