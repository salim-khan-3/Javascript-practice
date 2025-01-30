function checkWeight(Weight){
    if(Weight >= 50){
        return 'Your weight greater than 50.'
    }else{
        return 'Your weight less than 50.'
    }
}

let myWeight = checkWeight(70)
console.log(myWeight);