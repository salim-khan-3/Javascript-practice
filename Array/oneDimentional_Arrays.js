// // find max number from array

// function highestScore(scores){
//     /*console.log(scores);*/
//     let maxNumber = scores[0];
//     for(var x=1; x<scores.length ; x++){
//         if(maxNumber<scores[x]){
//             maxNumber = scores[x]
//         }
//     }return maxNumber;
// }
// let scores = [20,50,40,30,1021];
// let maxScores = highestScore(scores);
// console.log(maxScores);


// function findMaxNumber(scores){
//     // console.log(scores);
//     let maxNumberOfArr = number[0];
//     for(let x = 1; x < number.length; x++){
//         if(number[x] > maxNumberOfArr){
//             maxNumberOfArr = number[x];
//         }
//     }
//     return maxNumberOfArr;
// }
// let number = [200,50,4,4010,8000,4000,];
// let max = findMaxNumber(number);
// console.log(max);

// find min number from an Array

function minScores(min){
    // console.log(min);
    let minNumber = number[0];
    for(let x = 1; x < number.length; x++){
        if(minNumber>number[x] ){
            minNumber = number[x];
        }
    }
    return minNumber;
}
let number = [200,50,4,4010,8000,0.1,4000,];
let findMinNumber = minScores(number);
console.log(findMinNumber);
