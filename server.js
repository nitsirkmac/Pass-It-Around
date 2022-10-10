const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the Etheric Realm")
})






app.listen(3000, () => {
    console.log("You are jamming with the dancing bears on port 3000...")
})