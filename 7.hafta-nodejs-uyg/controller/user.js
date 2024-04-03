exports.viewAnc = (req, res, next) => {
    res.send(req.params.id+' idli duyuru görüntüleniyor');
}

exports.home = (req, res, next) => {
    res.send('Anasayfa');
}