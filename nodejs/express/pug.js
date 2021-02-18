const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const fs = require('fs');

//express configuration for serving static file
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//pug configuration
app.set('view engine','pug') //set template engine as pug
app.set('views',path.join(__dirname,'views')) //set the view directory


//Endpoints
app.get('/',(req,res)=>{
    const param = {'title':'pug view','content':'Hello world here I m learning pug '}
    res.status(200).render('index.pug',param);
})

//post data
app.post('/',(req,res)=>{
    // console.log(req.body);
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputValues = `name of member is ${name} , ${age} years old,gender ${gender} , address ${address} , and he/she ${more}`;
    const param = {'message':'submitted successfully'};
    fs.writeFileSync('outputResult.txt',outputValues);
    res.status(200).render('index.pug',param)
})


//start server
app.listen(port,()=>{
    console.log(`application started on port ${port}`);
})