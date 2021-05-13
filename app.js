// // Xndir 1

// let a = +prompt('Enter a number', 'a');
// let b = +prompt('Enter a number', 'b');
// let c = +prompt('Enter a number', 'c');

// if ( a < b + c && b < a + c && c < a + b) {
//     let p = (a + b + c) / 2;
//     let k = p*(p-a)*(p-b)*(p-c)
//     let s = Math.sqrt(k)
//     console.log(s)
// }


// // Xndir 2 (No1)

// let a = +prompt('Enter a number', 'a')

// let b = Math.trunc(a);

// let c = a - b;

// console.log(a, b, c)


// // Xndir 3 (No2)

// let a = +prompt('Enter a number', 'a');
// let y;

// if (a >= 0) {
//     y = a
// } else {
//     y = -a
// }

// console.log(y)


// // Xndir 4 (No3)

// let x = +prompt('Enter a number', 'x');
// let y;

// if ( x >= 0 &&  x < 5 ) {
//     y = 2*(x**2) + 3*x -1
// } else {
//     y = x + 1
// }

// console.log(y)


// // Xndir 5 (No5)

// let a = +prompt("Enter a number", 'a');
// let b = +prompt("Enter a number", 'b');
// let c = +prompt("Enter a number", 'c');

// if ( a < b + c && b < a + c && c < a + b) {
//     if (a**2 < b**2 + c**2 && b**2 < a**2 + c**2 && c**2 < a**2 + b**2) {
//         console.log('Surankyun')
//     } else {
//         console.log('not surankyun')
//     }
// } else {
//     console.log("It's not a triangle")
// }


// // Xndir 6 (No6)

// let a = +prompt("Enter a number", 'a');
// let b = +prompt("Enter a number", 'b');
// let c = +prompt("Enter a number", 'c');
// let max;

// if (a > b) {
//     if (a > c) {
//         max = a
//     } else {
//         max = c
//     }
// } else {
//     if (b > c) {
//         max = b
//     } else {
//         max = c
//     }
// }

// console.log(max)


// EJ 35
// // Xndir 1

// let x = +prompt('Enter a number', 'x');
// let y;

// if (x > -10 && x <= -6) {
//     y = x + 1
// } else if (x >= -3 && x <= 3) {
//     y = x**2
// } else {
//     y = x
// }

// console.log(y)


// // Xndir 2

// let x = 5;
// let a = +prompt('Enter a number', 'a');
// let b = +prompt('Enter a number', 'b');
// let y;

// if (a + b > 10) {
//     y = a*x + b
// } else if (a + b < 2 && a + b >= -15) {
//     y = b*x - a
// } else {
//     y = a + b
// }

// console.log(y)


// // Xndir 3

// let a = 3;
// let x = +prompt('Enter a number', 'x');
// let y;

// if (x >= -4 && x <=4) {
//     y = x + 3*a
// } else if (x > 5 && x <= 8) {
//     y = a*x - 2
// } else if (x > 20 || x < -20) {
//     y = x**2
// } else {
//     y = 3*x
// }  

// console.log(y)


// // Xndir 4

// let a = +prompt('Enter a number', 'a');

// if (a % 4 === 0 && a % 400 !== 0) {
//     console.log('Nahanj')
// } else {
//     console.log('Nahanj chi')
// }


// // Xndir 5

// let a = +prompt('Enter a number', 'a');
// let b = +prompt('Enter a number', 'b');

// if (a < b) {
//     let x = a;
//     let y = b;
//     a = (x + y) / 2;
//     b = x * y / 2;
// } else if (a > b) {
//     let x = a;
//     let y = b;
//     b = (x + y) / 2;
//     a = x * y / 2;
// }

// console.log('a = ', a, 'b = ', b)