const express=require("express");
const path=require("path");

const app=express();

const controlAuth=true;

app.use("/static",express.static(path.join(__dirname,"public")));

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
    next();
})

app.get("/list/blog",(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"views","list-blog.html"));
});

app.get("/add/blog/:id",isAuth,(req,res)=>{ 
    res.sendFile(path.join(__dirname,"views","add-blog.html"));
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});



app.listen(3000,()=>{
    console.log("Server running");
});