const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    // res.send('This is my first express app');
    res.status(200).send('This is my first express app');

})

app.get('/about',(req,res)=>{
    res.send('This is my about page')
})

app.post('/contact',(req,res)=>{
    res.send('This is the post request of contact page')
})

app.get('/this',(req,res)=>{
    res.status(404).send('Page not found')
})

app.listen(port,()=>{
    console.log(`application is started on port ${port}`);
})