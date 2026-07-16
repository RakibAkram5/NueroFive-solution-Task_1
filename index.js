const express = require("express");
const app = express();
app.get("/heath",(req,res)=>{
    res.json({
        status:"ok",
        timestamp: new Data()
    });
});
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running on Port ${Port}`);
    
});