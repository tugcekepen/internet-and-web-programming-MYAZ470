const express = require('express');

const app = express(); //express'in bir örneğini oluşturup app'e atıyoruz.

//req: request, res: response -
// 4 tane middleware var

app.use((req, res, next) => {
    //loglama yapılabilir
    next(); // next fonksiyonu çağrılmazsa, bir sonraki middleware'e geçiş yapılmaz. ilerleyemez.
    //ya response dönmeli ya da next() çağrılmalı.
});

app.get('/admin/add/anc', (req, res, next) => {
    res.send('Duyuru Ekleme');
});

// request ile parametre gelebilir. bu parametre url'den gelebilir. params ile alınır.
// URL -> request.params. ...
// POST -> request.body. ... -> burada formların name değerleri kullanılır

app.get('/admin/list/anc/:id', (req, res, next) => {
    // /admin/list/anc/:id 'deki id ile send fonksiyonu içindeki id aynı olmalı.s
    res.send(req.params.id + " Id li duyuru gösteriliyor");
});

//error handler
app.use((err, req, res, next) => {
    console.log(err);
    console.log(err.message);
    console.log(err.status);
    console.log(err.name);
    res.send(err.message);
}); //??

// "*" tüm istekleri karşılar. yani hiçbir şey karşılamazsa bu çalışır.
// Yukarıdaki middleware'lerin hiçbiri çalışmazsa bu çalışır.
app.use("*", (req, res, next) => {
    res.send('Kaynağa ulaşılamıyor');
});

app.listen(3000, () => { // 3000 portunu dinlemeye başlar
    console.log('Server is running on port 3000');
}); //buradan sunucunun çalıştığını anlayabiliriz.
// bağlantı sonuçlandığında buradaki callback fonksiyonu çalışır.