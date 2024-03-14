var a = 10;
console.log(a);
console.log(typeof a);

var pi = 3.14;
console.log(typeof pi, pi);

var message = "Merhaba!";
console.log(typeof message, message);

var answer = true;
console.log(typeof answer, answer);

var langs = ["Python", "C++", "Node.js", 55]; // Array - farklı tipleri içerebilir
console.log(typeof langs, langs);
console.log(langs[0]);
console.log(langs[langs.length - 1]);

var z;
console.log(z, "Type: ", typeof z); // undefined
// bir şeyin varlığını kontrol etmek için kullanılır
if (z == undefined) {
    console.log("z is tanımsız");
}
if (typeof z == "undefined") {
    console.log("z is tanımsız");
}

var y = null;
console.log(y, "Type: ", typeof y); // object
// undifined ve null arasındaki fark: undefined tanımsız, null ise tanımlı ama değeri yok

console.error("Bu bir hata mesajıdır!");
console.warn("Bu bir uyarı mesajıdır!");