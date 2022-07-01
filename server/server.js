//server.js

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import blogPosts from "./routes/blogPosts.js";

dotenv.config()

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}))
app.use(cors());

app.use("/api/blogs", blogPosts);

// const DATABASE_URL = 'mongodb+srv://admin:z5OmekIYCQjqsX8S@cluster0.uj8w5cj.mongodb.net/?retryWrites=true&w=majority'
const DB_CONNECTION = process.env.DATABASE_URL
const PORT = process.env.PORT || 6000;

mongoose.connect (
    DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => app.listen(PORT, () => console.log(`Server is running @ : http://localhost:${PORT}`)))
    .catch((error) => console.error(error));

    // , { }
    // 