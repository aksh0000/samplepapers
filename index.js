const express=require('express');
const app=express();
const cors=require('cors');
const path = require('path');

app.get('/',(req,res)=>{
    res.send("working just fine! now it is!!")
})

app.get('/trial/:name',(req,res)=>{
    const filepath=path.resolve(__dirname,'folder','10','maths','boardpapers','maths2013.pdf');
    console.log(req.params.name)
    res.sendFile(filepath)
})

app.get('/class/:choosenclass/:choosensubject/:contenttype/:choosenfile',(req,res)=>{
    const filepath=path.resolve(__dirname,'folder',req.params.choosenclass,req.params.choosensubject,req.params.contenttype,req.params.choosenfile+".pdf");
    res.sendFile(filepath);
});

app.listen(8000);