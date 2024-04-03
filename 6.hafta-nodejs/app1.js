let http=require("http");
const httpserver=http.createServer((req,res)=>{

if (req.url=="/"){
    res.setHeader("200","Content-Type","text/html");
    res.write("Ana Sayfa");
    res.end();
}
else if (req.url=="/add/blog"){
    res.setHeader("200","Content-Type","text/html");
    res.write("blog ekleme isteğine cevap");
    res.end(); 
}
}); 

httpserver.listen(3000);
console.log("Server running");