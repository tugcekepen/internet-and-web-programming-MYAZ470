const express=require("express");
const path = require('path');
const bodyParser=require('body-parser'); // post edilen veriyi almak için

const app=express();

//set view engine
app.set('view engine', 'ejs');

//---Static
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,"node_modules")));

//Body Parser
app.use(bodyParser.urlencoded({extended:true})); //json verilerini de kabul etmesi için true yapılır

//Router 
const adminRouter=require("./routes/admin");
app.use("/admin",adminRouter);

app.listen(3000,()=>{
    console.log("Server running");
});