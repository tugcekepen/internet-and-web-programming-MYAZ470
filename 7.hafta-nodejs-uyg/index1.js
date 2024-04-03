const express = require('express');
const adminRouter = require('./routes/adminrouter'); // adminRouter'ı import ediyoruz.
const userRouter = require('./routes/userrouter'); // userRouter'ı import ediyoruz.

const app = express(); //express'in bir örneğini oluşturup app'e atıyoruz.

//template engine settings
app.set("view engine", "ejs"); // view engine olarak ejs'i kullanacağımızı belirtiyoruz.


app.use((req, res, next) => {
    //loglama yapılabilir
    next(); // next fonksiyonu çağrılmazsa, bir sonraki middleware'e geçiş yapılmaz. ilerleyemez.
    //ya response dönmeli ya da next() çağrılmalı.
});


//routes
app.use('/admin', adminRouter); // adminRouter'ı /admin path'ine yönlendiriyoruz.

app.use('/user', userRouter); // userRouter'ı /user path'ine yönlendiriyoruz.

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