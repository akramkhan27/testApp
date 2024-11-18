require('dotenv').config();
const express= require("express");
const app= express();
const port=3000;

// console.log(process.env.PORT);

app.get("/",(req, res)=>{
    res.send("Hello World");
})
app.get("/twitter",(req,res)=>{
    res.send("akramkhandotcom")
})
app.get("/login",(req, res)=>{
    res.send("<h2>Please Login to twitter</h2>");
})
app.get("/register",(req, res)=>{
    res.send("<h2>Please Register to twitter</h2>")
})

// app.listen(port, ()=>{
//     console.log(`Listening to port : ${port}`);
// })

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port : ${process.env.PORT}`);
})