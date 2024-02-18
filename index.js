// Vazifa 1
function makeNumber(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log(0)
    } else {
        console.log(a, b, c)
    }
}


makeNumber(1, 2, -1)
// Vazifa 2
const num = 1
switch (num) {
    case 1: {
        console.log('Dushanba')
    }
    break;
    case 2: {
        console.log('Seshanba')
    }
    break;
    case 3: {
        console.log('Chorshanba')
    }
    break;
    case 4:{
        console.log('Payshanba')
    }
    break;
    case 5:{
        console.log('Juma')
    }
    break;
    case 6:{
        console.log('Shanba')
    }
    break;

    case 7: {
        console.log('Yakshanba')
    }
    break;
    default:{
        console.log('Bunday hafta kuni topilmadi')
    }
}
// Vazifa 3
const year = 2024
function checkLeapYear(year){
    year % 4 == 0 ? console.log(year,' kabisa yili'): console.log(year, ' kabisa yili emas')
}
checkLeapYear(year)
// Vazifa 4
function checkHowManyDigit(num){
    num < 10 ? console.log(1) : num <= 99 ? console.log(2)  : num <= 999 ? console.log(3) : console.log('Bunday son tekshirilmagan')
}
checkHowManyDigit(1)
// Vazifa 5
function checkPositiveNumber(a,b,c,d){
    a >= 0 && b >= 0 && c >= 0 && d >= 0 ? console.log(true) : console.log(false)
} 
checkPositiveNumber(1,2,3,1)
// Vazifa 6 
const a = 10
let sum = 0
for(let i= 0; i <= a; i++){
    sum+=i
}
console.log(sum)
// Vazifa 7 
let num1 = 6
let sum1 = 0
for(let i = 0; i < num1; i++){
    if(num1 % i == 0){
        sum1+=i
    }
}
num1 === sum1 ? console.log(true): console.log(false)
// Vazifa 8
let num2 = 120
function howManyDigitNum(num){
    let result = num.toString()
    console.log(result.length)
}
howManyDigitNum(num2)
// Vazifa 9
function checkReversed(num){
    var checkWord = num.toString().toLowerCase().split("").join()
    var checkReversedWord = num.toString().toLowerCase().split("").reverse().join()
    checkWord === checkReversedWord ? console.log("True") : console.log("False")
}
checkReversed(121)
// Vazifa 10
function calculateSumOfNumbers(num){
    let sum = 0
    let num2 = num.toString()
    for(let i = 0; i < num2.length; i++){
        sum+= parseInt(num2[i])
    }
    console.log(sum)
}
calculateSumOfNumbers(1234)
// Vazifa 11
let arr = [1,2,3,4,5]
let reversedArr = [...arr].reverse()
console.log(reversedArr)
// Vazifa 12
let arr2 = [1,2,3,4,1,1,1,3,5,6,7]
function findHowManyNumber(num){
    let result = 0
    arr2.forEach(item=>{
        num === item && result++ 
    })
    console.log(result)
}
findHowManyNumber(1)
// Vazifa 13
let arr7 = [1,2,3,4,5,6,7,9];
let num9 = 11;
function checkIsEqualToNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
               return true
            } 
        }
    }
    return false;
}
if(checkIsEqualToNum(arr,num)){
    console.log(true)
} else console.log(false)


// Vazifa 14
const arr4 = [112,12,3,2,1,5,32,67]
const sortedArr = arr4.sort((a,b)=> a-b)
console.log(sortedArr)
// Vazifa 15
let arr5 = [10, 5, 20, 15, 30];
function theBiggestSecondNum(arr) {
    arr.sort((a, b) =>  b - a);
    console.log(arr[1])
}
theBiggestSecondNum(arr5)