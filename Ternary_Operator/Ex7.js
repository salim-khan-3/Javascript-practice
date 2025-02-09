// একটি বছর ইনপুট নাও এবং চেক করো যে এটি লিপ ইয়ার (Leap Year) কিনা।
let year = 2023;
let isLeapYear = (year % 4 === 0 && year % 100 !==0) || year % 400 === 0? `${year} is a Leap year`: `${year} is not a Leap year`;
console.log(isLeapYear);