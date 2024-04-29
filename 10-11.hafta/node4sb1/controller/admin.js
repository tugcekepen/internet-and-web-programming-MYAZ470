const dialogNode = require("../messagebox/dialognode");

const data=require("../model/data");

exports.homePage=(req,res,next)=>{
    res.render("admin/index",{contentTitle:"Ana Sayfa",pageTitle:"Home Page"});
}

exports.listAnc=(req,res,next)=>{
    res.render("admin/list-anc",{contentTitle:"Duyuru Listeleme",pageTitle:"List Anouncment",data:data});
}

exports.get_deleteAnc=(req,res,next)=>{
    const deldataIndex = data.findIndex((x)=>x.noticeid==req.params.id);
    console.log("delete anc=", deldataIndex);
    data.splice(deldataIndex,1); // 1.indexten itibaren 1 eleman sil
    res.redirect("/admin/list/anc"); // silme işleminden sonra listeleme sayfasına yönlendir render'a gerek yok<
}

exports.post_deleteAnc=(req,res,next)=>{
    const deldataIndex = data.findIndex((x)=>x.noticeid==req.body.ancid); //body-parser modülü eklenmeli
    console.log("delete anc=", deldataIndex);
    data.splice(deldataIndex,1); // 1.indexten itibaren 1 eleman sil
    res.redirect("/admin/list/anc"); // silme işleminden sonra listeleme sayfasına yönlendir render'a gerek yok<
}

exports.get_addAnc=(req,res,next)=>{
    res.render("admin/add-anc",{pageTitle:"Add Anouncment Page", contentTitle:"Duyuru Ekle"});
}

exports.post_addAnc=(req,res,next)=>{
    const body=req.body;
    console.log("Type=", typeof body, body);
    console.log("Title=", body.title);
    const newData = {
        noticeid: data.length+1,
        title: body.title,
        explain: body.explain,
        isActive: body.isActive?true:false
    }
    data.push(newData);
    //res.redirect("/admin/list/anc");

    //notifier("Bilgi", "Kayıt eklendi", () => {res.redirect("/admin/list/anc");});
    dialogNode("Bilgi", "Kayıt eklendi", () => {res.redirect("/admin/list/anc");});
}