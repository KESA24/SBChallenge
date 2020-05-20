const express = require("express");
const cors = require ("cors");
require("./db/db");
const riderView = require("./views/riderView");
const port = process.env.PORT ||3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(riderView);


app.get("/", (req, res) => {
    res.status(200).send({message: "WELCOME TO OUR SAFE BODA REST API"});
})
app.listen(port, () =>{
    console.log('Server is running on port' + " " + port);
})