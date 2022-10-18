require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require("./routers/auth");
const postRouter = require("./routers/post");
const postProductRouter = require("./routers/product")
const postCategoryRouter = require("./routers/category")
const filterRouter = require("./routers/filter")
const detailRouter = require("./routers/detail")
const cartRouter = require("./routers/cart")
const cors = require('cors') 
const app = express()
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cnpmm.dgph2sd.mongodb.net/CNPMM?retryWrites=true&w=majority`)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()
app.use(express.json());
app.use(cors())
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/product", postProductRouter);
app.use("/api/category", postCategoryRouter);
app.use("/api/filter", filterRouter);
app.use("/api/filter/product", detailRouter);
app.use("/api/addCart", cartRouter);
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))