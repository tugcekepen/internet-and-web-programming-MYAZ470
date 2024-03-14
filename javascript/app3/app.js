// const data = [
//     {
//         adi: "Mehmet", //primitive
//         meslek: "Öğretmen", //primitive
//         kurum: [
//             {
//                 kurumkodu: 1,
//                 kurumadi: "Samsun Üniversitesi"
//             },
//             {
//                 kurumkodu: 2,
//                 kurumadi: "Ankara Üniversitesi"
//             }
//         ] //array of objects
//     },
//     {
//         adi: "Ayşe",
//         meslek: "Öğretmen",
//         kurum: [
//             {
//                 kurumkodu: 1,
//                 kurumadi: "Samsun Üniversitesi"
//             },
//             {
//                 kurumkodu: 2,
//                 kurumadi: "Gazi Üniversitesi"
//             }
//         ]
//     }
// ]
// // {} parantezler benim object tanımlayacağım anlamına geliyor
// // json'dan farklı olarak key'lerde tırnak kullanmıyoruz


// // console.log(data, "Type: ", typeof data);
// // console.log(data[0], "Type: ", typeof data[0]);
// // console.log(data[0].adi);
// // console.log(data[0].kurum); // array döner
// // console.log(data[0].kurum[0]); // object döner
// // console.log(data[0].kurum[0].kurumadi);

// // ---------------------------------------------

// // for..in - for..of - for..each


// // for..in

// // hem array için hem de object için kullanılır
// // array : key -> index
// // object : key -> property

// for (const key in data) {
//     console.log(key, "->", data[key]);
// }

// let object = data[0]; //return object
// for (const key in object) {
//     console.log(key, "->", object[key]);
// }


// // for..of

// // sadece array için kullanılır
// // sadece iterator objelerle çalışır

// for (const item of data) {
//     console.log(item);
// }

// // // error
// // let object1 = data[0];
// // for(const item of object1){
// //     console.log(item);
// // } // hata verir çünkü object bir iterator değildir
// // // Uncaught TypeError: object1 is not iterable

// // ---------------------------------------------
// for (const items of data) {
//     for (const key in items) {
//         console.log(key, ":", items[key]);
//     }
// }
// // data = array
// // items = object
// // key = property
// // ---------------------------------------------


// // for..each

// data.forEach(item => {
//     console.log(item);
//     console.log("Adı: ", item.adi);
//     console.log("Mesleği: ", item.meslek);
//     console.log("Kurum Kodu: ", item.kurum[0].kurumkodu);
// });

// // error
// let object2 = data[0];
// object2.forEach(key => {
//     console.log(key);
// }); // hata verir çünkü objectlerle for..each kullanılmaz
// // Uncaught TypeError: object2.forEach is not a function

// // ---------------------------------------------

// const finder = data.find(item => item.adi = "Mehmet");
// // const findIndex = data.findIndex(item => item.adi = "Ayşe");
// console.log(finder);
// // console.log(findIndex);

// // ---------------------------------------------

// let date = new Date();
// console.log(date, typeof date);
// console.log(date.
//     getDay());
// console.log(date.getFullYear());

// // ---------------------------------------------

// //fonksiyonların bir sabite veya değişkende tutulması gerekiyor
// const yaz1 = function () {
//     console.log("Function çalıştı!");
// }

// yaz1();

// //arrow function
// const yaz2 = () => {
//     console.log("Arrow Function çalıştı!");
// }
// yaz2();

// // ---------------------------------------------

// const hesapla = (taban,us) => {
//     result = 1;
//     for(i=1; i<=us; i++){
//         result *= taban;
//     }
//     return result;
// }

// console.log(hesapla(2,3));

// // ---------------------------------------------

// const ekranaYaz = message => {
//     console.log(message);
// }
// // tek parametre varsa parametreleri tuttuğum alanda parantez kullanmamıza gerek yok

// ekranaYaz("Merhaba!");

// // ---------------------------------------------


const langs = ["Python", "C++", "JS"];
l1 = langs; // referans tip olduğu için l1 ve langs aynı yeri gösterir. l1'e langs'ın referansını geçirdim
l1.push("C#"); // haliyle l1'e eklediğim eleman langs'a da eklenir
console.log(l1, langs);
l2 = langs.slice(); // slice metodu ile langs'ın kopyasını alıyorum, yani referansları farklı olacak
l2.push("Java");
console.log(l2, langs); // l2'ye eklediğim eleman langs'a eklenmez
console.log(typeof l2)