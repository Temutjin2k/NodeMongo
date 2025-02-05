require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
   
const blogScheme = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
    },{timestamps: true }
);

const Blog = mongoose.model("blog", blogScheme);

const app = express()

app.post("/blogs", (req, res) => {

});

app.get("/blogs", (req, res) => {

});

app.get("/blogs", (req, res) => {

});

app.put("/blogs", (req, res) => {

});

app.delete("/blogs", (req, res) => {

});


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`ListenAndServe: http://localhost:${PORT}/`)
});