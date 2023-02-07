"use strict"



// function divideNums21(nums){

//     for (let i = 0; i < nums; i++) {

//         if(nums%21==0){

//             console.log("Eded 21 e bolunur");
//         }else{
//             console.log("Eded 21 e bolunmur")
//         }
//     }
// }

// divideNums21(25);








// let divideNums21AF = (nums) => {
//     for (let i = 0; i < nums; i++) {

//         if (nums % 21 == 0) {

//             console.log("Eded 21 e bolunur");
//         } else {
//             console.log("Eded 21 e bolunmur")
//         }
//     }

// }

// divideNums21AF(42);









// function getFactorial(num){
//     let res=1

//     for (let i = 1; i <= num; i++) {

//       res*=i;   

//     }
//     return res;
// }

// console.log(getFactorial(5));









// let getFactorialAF = (num) =>{

//     let res=1

//         for (let i = 1; i <= num; i++) {

//           res*=i;   

//         }
//          return res;

// }

// console.log(getFactorialAF(4));








// function getEvenSquareSum(arr) {
//     let res = 1;
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {
//             res = arr[i] ** 2;
//             sum += res;

//         }
//     }

//     console.log(sum)
// }


// let arr = [1, 2, 3, 4, 5, 6]
// getEvenSquareSum(arr);










// let getEvenSquareSumAF = (arr) => {

//     let res = 1;
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {
//             res = arr[i] ** 2;
//             sum += res;

//         }
//     }

//     console.log(sum)

// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// getEvenSquareSumAF(arr);








// function getOddSum(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 1) {

//             sum += arr[i];

//         }
//     }

//     return sum;
// }


// let arr = [1, 2, 3, 4, 5, 6]
// console.log(getOddSum(arr));








// let getOddSum = (arr) => {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 1) {

//             sum += arr[i];

//         }
//     }

//     return sum;
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(getOddSumAF(arr));








// function getEvenSum(arr) {

//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {

//             count++;

//         }
//     }

//     return count;
// }


// let arr = [1, 2, 3, 4, 5, 6]
// console.log(getEvenSum(arr));









// let getEvenSumAF = (arr) => {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {

//             count++;

//         }
//     }

//     return count;
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(getEvenSumAF(arr));





// function checkMail(mail, password) {

//     let Mail = "cavid@code.edu.az";
//     let Password=12345;

//     if (mail == Mail && password == Password) {

//         console.log("Giris Ugurludur")
//     }else{
//         console.log("Password ve ya Mail Yanlisdir")
//     }
// }



// checkMail("cavid@code.edu.az", 12345);






let checkMail = (mail, password) =>{

    let Mail = "cavid@code.edu.az";
    let Password=12345;

    if (mail == Mail && password == Password) {

        console.log("Giris Ugurludur")

    }else{

        console.log("Password ve ya Mail Yanlisdir")

    }
}


checkMail("cavid@code.edu.az", 1235);