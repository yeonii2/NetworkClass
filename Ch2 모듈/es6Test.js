// //var로 선언시 function 안 까지만 사용가능하다. but for문이나 while문 등 밖에서는 사용가능하다.
// var count = function(){
//     for(var i=0; i<5; i++){
//         console.log(i);
//     }
//     //console.log('after loop i is ', i); O
// }
// //console.log('after loop i is ', i); X

// b=5;
// var b;
// console.log(b);

// const c =3;
// c = 1;

// const str1 = 'hello';
// const str2 = 'world';
// const str3 = '2019';

var a, b, rest;
[a, b, , , rest] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`a = ${a}, 
b = ${b}, 
rest = ${rest}`);

({a, b}= {a : 10, b : 20});
console.log(`a = ${a}, 
b = ${b}`);