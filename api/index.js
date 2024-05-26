const express=require("express");
const app=express();
const port=4000;

app.get("/api/test",(req,res)=>{
    res.json({test:"ok"});
})


app.post("/api/transaction",(req,res)=>{
    res.json(req.body);
})
app.listen(port,()=>{
    console.log("Server is running at port 4000...");
})