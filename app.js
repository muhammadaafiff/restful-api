require("dotenv").config()

const express = require("express")
const app = express()
const allRoutes = require("./routes");

const PORT = process.env.PORT || process.env.API_PORT

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
    console.log("server running on port : " + PORT)
})