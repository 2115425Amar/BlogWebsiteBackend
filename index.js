const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const blogRoutes = require("./routes/posts");

app.use("/api/v1",blogRoutes);

app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(
         `<h1>This is homepage</h1>`
    )
})

