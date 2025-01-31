function isEqualSum(num1,num2){
    let Sum = num1 + num2;
    if(Sum === 50){
        console.log("sum is equal 50");
    }else if(Sum > 50){
        console.log("sum is greater than 50");
    }else{
        console.log("sum is less than 50");
    }
}

isEqualSum(30,10);