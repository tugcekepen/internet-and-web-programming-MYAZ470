const data = require('../model/data'); // data.js dosyasını import ettik.

exports.addAnc = (req, res, next) => {
    // res.send('Duyuru Ekleme'); // ejs aşamasına geçtiğimizde artık render kullanıyoruz
    
    const parameters = {title: "Duyuru Ekleme", contenttitle: "Duyuru Ekleme Sayfası"}
    res.render('admin/addAnc', parameters);
    // render fonksiyonu ile ejs dosyasını render ediyoruz. İlk parametre dosyanın adı, ikinci parametre ise dosyaya gönderilecek verilerdir. (obje olarak gönderilir.)
    // otomatik olarak zaten view klasörünü arar. o yüzden ./view/... yazmamıza gerek yok.
}

// request ile parametre gelebilir. bu parametre url'den gelebilir. params ile alınır.
// URL -> request.params. ...
// POST -> request.body. ... -> burada formların name değerleri kullanılır

exports.listAnc = (req, res, next) => {
    // /admin/list/anc/:id 'deki id ile send fonksiyonu içindeki id aynı olmalı.s
    //res.send(req.params.id + " Id li duyuru gösteriliyor");
    res.render('admin/listAnc', {title: "List Anouncment", contenttitle: "Duyuru Listesi Sayfası", data: data});
}