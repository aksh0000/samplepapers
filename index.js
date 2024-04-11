const express=require('express');
const app=express();
const cors=require('cors');
const path = require('path');
app.use(cors());
app.get('/',(req,res)=>{
    res.send("working just fine!")
})

app.get('/class:choosenclass/subject:choosensubject/contenttype:contenttype/choosenfile:choosenfile',(req,res)=>{
    const filepath=path.resolve(__dirname,'folder',req.params.choosenclass,req.params.choosensubject,req.params.contenttype,req.params.choosenfile+".pdf");
    res.sendFile(filepath);
});

app.listen(8000);