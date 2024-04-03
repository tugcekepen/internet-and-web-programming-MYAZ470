const express=require("express");

const app=express();

const controlAuth=false;

const isAuth=(req,res,next)=>{
        if (controlAuth) next();
        else res.send("Yetkisiz Giriş");
    }

//genel middleware. Bütün istekler için çalışır.
// app.use((req,res,next)=>{
//     if (controlAuth) next();
//     else res.send("Yetkisiz Giriş");
// });

//log middleware 
app.use((req,res,next)=>{
    //loglama yapabilirsiniz.
})

app.get("/list/blog",(req,res)=>{
    res.send("List Blog");
});

app.get("/add/blog/:id",isAuth,(req,res)=>{ 
    res.send(req.params.id+"id'li blog eklendi");
});

app.get("/",(req,res)=>{
    res.send("Ana Sayfa");
});



app.listen(3000,()=>{
    console.log("Server running");
});