import express from "express";

const app = express();

app.get("/" , (req , res) =>{
    res.send("hello from backend");
})
app.get("/testing" , (req,res) => {
    res.json({
        success : true,
        data : {
            name : "sachin",
            no : "885975",
            update : "new update"
        }
    })
})
export default app;