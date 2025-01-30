function Sum(num1 , num2 , num3){
    let sum = num1 + num2 + num3;
    
    if(sum > 100){
        return "The sum is greater than 100";
    }else if(sum < 100){
        return "the sum is less than 100";
    }else{
        return "the sum is exectly 100"
    }
}

console.log(Sum(50 , 10 , 40));;