const express = require("express");
const app = express();
const PORT = 3000;
const isOdd = require('is-odd');

app.set("views","./views");
app.set("view engine", "ejs");


app.get("/",(req, res)=>{
    res.send("Ecrivez un nombre dans l'url !!!")
});

app.get("/:id",(req, res)=>{
    let n = Number(req.params.id)
    if(isOdd(n) === true){
    res.send(`Le nombre ${n} est impair`) 
    } else {
    res.send(`Le nombre ${n} est pair`)
    }
});



app.listen(PORT, ()=>{
    console.log(`Lancement du port ${PORT}`);
})