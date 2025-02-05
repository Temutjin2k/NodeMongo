require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
   
const blogScheme = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        author: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const Blog = mongoose.model("blog", blogScheme);

const app = express()
app.use(express.json())

app.post("/blogs", async (req, res) => {
    if(!req.body) return res.status(400).json({error: "no body provided"});

    const {title, body, author} = req.body;

    if (!title){
        return res.status(400).json({error: "title is not provided"});
    }else if (!body){
        return res.status(400).json({error: "body is not provided"});
    }else if (!author){
        return res.status(400).json({error: "author is not provided"});
    }

    const blog = new Blog(
        {   
            title: title, 
            body: body, 
            author: author
        })

    await blog.save()
    res.sendStatus(201)
});

app.get("/blogs", async (req, res) => {
    const blogs = await Blog.find({})
    res.json(blogs)
});

app.get("/blogs/:id", async (req, res) => {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (blog) res.json(blog)
    else res.status(400).json({error: "Blog does not exist"})  
});

app.put("/blogs/:id", async (req, res) => {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (!blog) res.status(400).json({ error: "Blog does not exist"})
    
    const {title, body, author} = req.body;

    if (!title){
        return res.status(400).json({error: "title is not provided"});
    }else if (!body){
        return res.status(400).json({error: "body is not provided"});
    }else if (!author){
        return res.status(400).json({error: "author is not provided"});
    }


    if (blog.title == title && blog.body == body && blog.author == author){
        return res.status(400).json({ error: "No changes were made" })
    }

    await Blog.updateOne({_id: id}, {$set: {title, body, author}})
    
    res.json({message: "Blog updated successfully"})
});

app.delete("/blogs/:id", async (req, res) => {
    const id = req.params.id
    const blog = Blog.findById(id)
    if (!blog) return res.status(400).json({error: "blog does not exist"})
    
    await Blog.deleteOne({_id: id})
    res.json({message: "blog deleted successfully"})
});



async function ConnectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }catch(err) {
        return console.log(err);
    }
}

ConnectDB();

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`ListenAndServe: http://localhost:${PORT}/`)
});