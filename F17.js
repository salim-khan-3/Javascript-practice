function checkPassword(password){
    if(password.length >= 8){
        console.log('Valid Password');
    }else{
        console.log('password must be 8 character');
    }
}

checkPassword('salim0552')