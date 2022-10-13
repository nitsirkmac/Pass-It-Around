const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send(`
    99 Bottles of beer on the wall <br>
    99 bottles of beer! <br>
    <a href="/98">Take one down, pass it around!</a>
    `)
    // link "take one down, pass it around"
    // link to /98, 
})

app.get("/:number_of_bottles", (req, res) => {
    numberOfBottles = req.params.number_of_bottles
    if(numberOfBottles > 1) {
        res.send(`
        ${numberOfBottles} bottles of beer on the wall,<br>
        ${numberOfBottles} bottles of beer.<br>
        <a href="/${numberOfBottles - 1}">Take one down</a>, pass it around 
        ${numberOfBottles - 1} bottles of beer on the wall
        `)
    } else if(numberOfBottles = 1) {
        res.send(`
        ${numberOfBottles} bottle of beer on the wall,<br>
        ${numberOfBottles} bottle of beer.<br>
        <a href="/">Maybe we should stop drinking?</a>
        `)
    }
    
})





app.listen(3000, () => {
    console.log("You are jamming with the dancing bears on port 3000...")
})