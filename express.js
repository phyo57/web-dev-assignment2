const express = require('express')
const app = express()

//static files
app.use(express.static('assignment'))


//set views
app.get("/red", (req,res) => {
    console.log("red")
    res.sendFile(__dirname + "/assignment/red.html")
})

app.get("/green",(req,res) => {
    console.log("green")
    res.sendFile(__dirname + "/assignment/green.html")
})

app.get("/yellow",(req,res) => {
    console.log("yellow")
    res.sendFile(__dirname + "/assignment/yellow.html")
})

app.get("/black",(req,res) => {
    console.log("black")
    res.sendFile(__dirname + "/assignment/black.html")
})

app.listen(3000)
