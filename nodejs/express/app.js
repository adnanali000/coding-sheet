const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

//serving static file
app.use('/static',express.static('static'));

//set template engine for pug
app.set('view engine','pug');

//set the views directory for pug
app.set('views',path.join(__dirname,'views'));

//pug demo end point
app.get('/demo',(req,res)=>{
    res.status(200).render('demo',{title: 'pug' , message: 'hello pug community'})
})


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