var numberOne = 12;
var numberTwo = 6;
var numberThree =2;

if(numberOne > numberTwo) {
    if(numberOne > numberThree){
        console.log("Number 1 is largest");
    }else{
        console.log( "Number 3 is largest");
    }
}
else if(numberTwo > numberThree){
    console.log( "Number 2 is largest");
}
else{
    console.log( "Number 3 is largest");
}