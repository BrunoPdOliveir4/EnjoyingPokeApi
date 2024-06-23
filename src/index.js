const express = require("express");
const path = require("path");
const app = express();
const PORT = 8082
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'))
})
app.get("/scripts/principal", (req,res) =>{
    res.sendFile(path.join(__dirname, "scripts/principal.js"))
})

app.listen(PORT, ()=> {
    console.log(`servidor rodando na porta: ${
        PORT
    }`)    
})