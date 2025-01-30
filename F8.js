function findGrade(marks){
    if(marks >=80 && marks < 101){
        console.log("You have got GPA A+");
    }else if(marks >=70 && marks <80){
        console.log("You have got GPA A");
    }else if(marks >=60 && marks <70){
        console.log("You have got GPA A-");
    }else if(marks >=33 && marks <60){
        console.log("Passed");
    }else{
        console.log("Fail");
    }
}

findGrade(79.555);