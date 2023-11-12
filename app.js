const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req,res) => {
    res.json({
        message: "selamat datang di server"
    })
})
app.listen(PORT, () => {
    console.log("server running on port : " + PORT)
})