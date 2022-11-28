const express = require("express"); 

const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.listen(port, () => { console.log("Running on port", port); });