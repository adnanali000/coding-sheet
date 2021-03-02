//mongoose start
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adnanMongo',{useNewUrlParser:true});

let db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error: '));
db.once('open',function(){
    //we're connected
    //  console.log('We are connected');
})

//schema
let kittySchema = new mongoose.Schema({
    name:String
});

//method
kittySchema.methods.speak = function(){
    var greeting = 'My name is '+this.name;
    console.log(greeting);
}

//model
let kitten = mongoose.model('adnankitty',kittySchema);

//create object
let adnanKitty = new kitten({name:'adnan kitty'});
let adnanKitty2 = new kitten({name:'adnan kitty 2'});

// console.log(adnanKitty.name);
// adnanKitty.speak();


//save data
adnanKitty.save(function(err,adnanKitty){
    if(err) return console.error(err);
    // adnanKitty.speak();
})

adnanKitty2.save(function(err,data){
    if(err) return console.error(err);
    // data.speak();
})

kitten.find({name:'adnan kitty 2'},function(err,kittens){
    if(err) return console.error(err);
    console.log(kittens);
})