const express = require("express");
const path = require("path");
const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'))
});




//** JS Principal file getter */
app.get("/scripts/principal", (req,res) =>{
    res.sendFile(path.join(__dirname, "scripts/principal.js"))
});

//** CSS principal file getter */
app.get("/styles/principal", (req,res) => {
    res.sendFile(path.join(__dirname, "styles/style.css"))
})
//** iMAGES GET ROUTES */
app.get("/image/icon", (req, res) => {
    res.sendFile(path.join(__dirname, "icons/pokeballIcon.png"))
})

app.get("/image/garden", (req,res) => {
    res.sendFile(path.join(__dirname, "icons/garden.jpg"));
})


app.listen(PORT, ()=> {
    console.log(`servidor rodando na porta: ${
        PORT
    }`);    
})