// // aşağıdaki kodlar senkron gibi çalışıyor görünmektedir.

// function process1() {
//     console.log("Process1");
// }

// function process2() {
//     console.log("Process2");
// }

// process1();
// process2();

// // -------------------------------
// // -- aslında java script asenkron çalışır.

// function process1() {
//     setInterval(() => {
//         console.log("Process1");
//     }, 3000); // 3 saniyede bir Process1 yazdırır.
// }

// function process2() {
//     setInterval(() => {
//         console.log("Process2");
//     }, 2000); // 2 saniyede bir Process2 yazdırır.
// }

// process1();
// process2();
// // önce process2 yazdırılır, sonra process1 yazdırılır. saniye farkı var. process2 daha hızlı çalışır.

// //Yukarıdaki örnekte process1 önce çarılmasına karşın sonra çalışmaktadır.
// //process2'nin process1'den sonra çalışmasını sağlamak için process1'e bir callback fonksiyon tanımlayabiliriz.
// //tanımlayıp parametre olarak process2'yi gönderebiliriz. Böylece proces2, process1'in callback fonksiyonu olmuş olur.

// // -------------------------------

// // CALLBACK
// // -- callback fonskyionlar sayaseinde asenkron işlemleri yönetebiliriz.

// function process1(callback) {
//     let a = 0;

//     setTimeout(() => {
//         a = 2 + 2;
//         callback(a);
//     }, 3000);

//     return a;
// }

// function process2() {
//     console.log("Process2");
// }

// process1(function(b){
//     console.log(b);
// });
// process2();


// // -------------------------------


// //callback'siz. return a -> 0
// function process1() {
//     let a = 0;

//     setTimeout(() => {
//         a = 2 + 2;
//         callback(a);
//     }, 3000);

//     return a;
// }

// function process2() {
//     console.log("Process2");
// }

// console.log(process1()); // 0
// process2();


// // callback'li.
// function process1(callback) {
//     let a = 0;

//     setTimeout(() => {
//         a = 2 + 2;
//         callback(a);
//     }, 3000);

//     // return a;
// }

// process1((response) => {
//     console.log(response);
// });


// // -------------------------------
// // -------------------------------
// // -------------------------------
// // -------------------------------


// function process1(callback) {
//     setTimeout(() => {
//         console.log("Process1");
//         callback();
//     }, 3000);
// }

// function process2() {
//     console.log("Process2");
// }

// process1(process2);
// // process2();


// // -------------------------------
// // -------------------------------
// // -------------------------------
// // -------------------------------


// // PROMISE

// function process1() {
//     let a = 0;
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(() => {
//                 a = 2 + 2;
//                 resolve(a);
//             }, 3000);
//         }
//     );
// }

// process1()
// .then((response) => {
//     console.log("promise'den değer döndü");
//     console.log("dönen değer: ", response);
// });

// console.log("çalışmaya devam eder mi?");

// // --------------------------------

// // ASYNC / AWAIT

// // async ile belirtildiğinde otomatik olarak bir promise döner.
// async function process1() {
//     let a = 10;
//     return a;
// }

// const response = process1();
// console.log(response, typeof response);

// // ---------------------------------

// function process1() {
//     let a = 0;
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(() => {
//                 a = 2 + 2;
//                 resolve(a);
//             }, 3000);
//         }
//     );
// }

// async function islem() {
//     const response = await process1();
//     console.log(response);
// }

// islem();
// console.log("çalışmaya devam eder mi?");

// // ----------------------------------

// function getData(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof url == "string") {
//                 resolve("olumlu sonuç");
//             } else {
//                 reject("url string olmalıdır.");
//             }
//         }, 3000);
//     });
// }

// getData("abc")
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// });
// // olumlu sonuç

// getData(123)
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// });
// // url string olmalıdır.

// // ----------------------------------

//promise catch async-await

function getData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof url == "string") {
                resolve("olumlu sonuç");
            } else {
                reject("url string olmalıdır.");
            }
        }, 3000);
    });
}

async function process() {
    try {
        const response = await getData(123);
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

process();