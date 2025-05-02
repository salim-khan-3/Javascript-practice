//identificatify all essential elements
const userForm = document.getElementById("Form");
const userName = document.getElementById("user_name");
const showValidation = document.getElementById("show_validation");
const submitBtn = document.getElementById("btn");

userForm.addEventListener("submit",function(event){
    event.preventDefault();
    if(userName.value === "") {
        showValidation.innerHTML = setTimeout(() => {
           return  `<i class="fa-solid fa-triangle-exclamation"></i> Please Enter your name`;
        }, 1000);
    }

        // showValidation.innerHTML = "";
})
