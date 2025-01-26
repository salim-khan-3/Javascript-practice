var accountBlanced = 5000;
var withdrawalBlanced = 30000;

if(withdrawalBlanced >= 500){
    if(withdrawalBlanced <= accountBlanced){
        console.log("Transaction Successful");
    }else{
        console.log("Insufficient Balance" );
    }
}else{
    console.log("Minimum withdrawal is 500");
}