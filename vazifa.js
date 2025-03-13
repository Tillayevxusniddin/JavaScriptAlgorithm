// 1 

// function example(a, b, c) {
//     if ( a <= 0 || b <= 0 || c <= 0) {
//         console.log(0);
//     }
// }

// example(1, 2, 3);


// 2

// function example(randNumber){
//     switch (randNumber){
//         case 1: 
//             console.log('Dushanba');
//             break;
//         case 2:
//             console.log('Seshanba');
//             break;
//         case 3: 
//             console.log('Chorshanba');
//             break;
//         case 4: 
//             console.log('Payshanba');
//             break
//         case 5: 
//             console.log('Juma');
//             break;
//         case 6: 
//             console.log('Shanba');
//             break;
//         case 7: 
//             console.log('Yakshanba');
//             break;
//         default: 
//             console.log(none);
//     }
// }

// example(3);



// 3


// function isKabisa(year){
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// const result = isKabisa(2021);
// console.log(result);




// 4

// function example(n){
//     let expected = '' + n;
//     if (expected.length == 1){
//         return 1;
//     } else if (expected.length == 2){
//         return 2;
//     } else if (expected.length == 3){
//         return 3;
//     }
    
// }


// const respon = example(423);
// console.log(respon);




// 5 


// function example(a, b, c){
//     if (a > 0 && b > 0 && c > 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// const respon =example(1, 2, -3);
// console.log(respon);



// 6

// function example(a){
//     result = 0;
//     for (let i = 0; i <= a; i++){
//         result += i;
//     }
//     return result;
// }

// const respon = example(3);
// console.log(respon);



// 7

// function example(randNumber){
//     let myExpected = [1];
//     for (let i = 2; i < randNumber; i++){
//         if (randNumber % i === 0){
//             myExpected.push(i);
//         }
//     }
//     const sum = myExpected.reduce((acc, num) => acc + num);
//     if (sum === randNumber){
//         return true;
//     } else {
//         return false;
//     }
    
// }

// const respon = example(7);
// console.log(respon);


// 8 


// function example(n){
//     let expected = '' + n;
//     return expected.length;
// }

// const respon = example(4233);
// console.log(respon);



// 9

// function example(arr){
//     let copyarr = [...arr];
//     copyarr.reverse();
//     return JSON.stringify(copyarr) === JSON.stringify(arr);
// }

// const respon = example([1, 2, 3, 2, 4]);
// console.log(respon);


// 10

// function example(a){
//     let result = 0;
//     for (let i = 0; i <= a; i++){
//         result += i;
//     }
//     return result;
// }

// const respon = example(10);
// console.log(respon);


// yokida matematika 

// function example(n){
//     return (n * (n + 1)) / 2;
// }

// console.log(example(10));


// 11 

// function example(arr){
//     let copyarr = [...arr];
//     return copyarr.reverse();
// }

// console.log(example([1, 2, 3, 2, 4]));


// 12

// function example(n, arr) {
//     total = 0;
//     arr.forEach(element => {
//         if (element === n){
//             total+=1;
//         }
//     });
//     return total;
// }

// console.log(example(1, [1, 2, 3, 2, 4, 1, 1]));


// 13

//  function example(n, arr){
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i] + arr[j] === n){
//                 return `${arr[i]} va ${arr[j]} ni qoshsa n ga teng`;
//             }
//         }
//     }
//     return 'not found';
//  }

//  console.log(example(6, [1, 3,  2, 3]));


// 14


// function example(numbers){
//     return numbers.sort();
// }

// console.log(example([4, 5, 6, 2, 3]));



// 15 

// function example(numbers){
//     numbers.sort();
//     console.log(numbers);
//     return numbers[numbers.length - 2];
// }

// console.log(example([9, 2, 3, 4, 5, 6, 7, 8, 1]));


