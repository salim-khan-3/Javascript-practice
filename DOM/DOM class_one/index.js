// select id and add some text using by innertext
const domText = document.getElementById(`dom_text`);

// add some text by innerText 
domText.innerText = `I am new text`;

// select id and add text and a tag by innerHTML
const saleAmt = document.getElementById(`dom_text`);

 saleAmt.innerHTML = `90% Discounted item! <a style = color:red; href="#">Check here to Explore.</a>`;


// using by class name 

const studentList = [`kamrul`,`salim`,`safat`,`rubai`,`siddik`]
const numeralName = document.getElementsByClassName(`numeral_name`);
for(let i = 0; i < numeralName.length; i++){
    numeralName[i].innerText = `I m ${i+1} No List Element and i am ${studentList[i]} `
}

const numeralName = document.getElementsByClassName(`numeral_name`);
for(let i = 0; i < numeralName.length; i++){
    numeralName[i].innerText = `I'm No ${i+1} List Element. `
}



// create element 

// select id
const studentList = document.getElementById(`student_List`);
const students = [];

for(let i = 0; i<students.length;i++){
    const list = document.createElement(`li`);
    list.innerText = `I am a full stack Devloper and i am md ${students[i]}`;
    studentList.appendChild(list);
}

if(students.length === 0){
    studentList.innerHTML = `<li style = 'color:red'>Every one left the chat!!!</li>`;
}