// //var, let and const

// // ES6 -> ecma script 6

// // var

// var name1 = "Ahmet";
// console.log(name1);

// var name1 = "55";
// console.log(name1);

// for(var i=1; i<=3; i++){
//     console.log(i);
// }

// console.log(i); // 4 - yazmaması lazımdı

// // let

// // böyle hata verir
// let x = 10;
// console.log(x);
// let x = "deneme";
// console.log(x);

// // var yerine let kullandığımızda scope hatası verir
// for(let i=1; i<=3; i++){
//     console.log(i);
// }

// console.log(i);


// // const

// const isim = "deneme";
// console.log(isim);
// //isim = "denedene";
// //console.log(isim); // hata verir çünkü const değiştirilemez
// // Uncaught TypeError: Assignment to constant variable.

// const list = ["aa", "bb", 55];
// console.log(list);
// // list = ["cc", "dd", 66]; // bunu yapamam. sabit olduğu için hata verir
// list.push(52); // bunu yapabilirim. çünkü sabit olan list'in içeriğini değiştirmiyorum, ona ekleme yaptım
// console.log(list);

// // ------------------------------------------------

