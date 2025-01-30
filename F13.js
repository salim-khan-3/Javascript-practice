function isPassFail(Bangla,english,math,chemistry,biology){
    if(Bangla>=33 && english>=33 && math >= 33&&chemistry>=33 && biology>=33){
        return "pass"
    }else{
        return "fail"
    }
}

let PassFail = isPassFail(34,35,32.9999,37,33);
console.log(PassFail);