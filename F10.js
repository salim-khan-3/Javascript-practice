function findZero(Number){
    if(Number === null || Number === undefined){
        return "Invalid number";
    }else if(Number === 0){
        return "The number is Zero";
    }else{
        return "The number you have taken is not Zero";
    }
}
let selectNumber = findZero(0);
console.log(selectNumber);

