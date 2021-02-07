// variable , data types

// var a = 10;
// var b = 10.2;
// var name = 'hello world';
// console.log(a);
// console.log(b);
// console.log(name);

//operators
//'3+4' here + is a operator and 3 4 are operands
//unary operator : it has sinle operand eg -x -3

//b = -b;
//console.log(b);
//binary operator it has multiple operand x = x + 4

//b = b + 2
//console.log(b);

//airthmetic operation

// var num1 = 2;
// var num2 = 3;
// console.log('The ans num1 + num2 is = '+(num1+num2));
// console.log('The ans num1 - num2 is = '+(num1-num2));
// console.log('The ans num1 / num2 is = '+(num1/num2));
// console.log('The ans num1 * num2 is = '+(num1*num2));
// console.log('The ans num1 ** num2 is = '+(num1**num2));
// console.log('The ans num1++ is = '+(num1++)); //2
// console.log('The ans ++num1 is = '+(++num1)); //4
// console.log('The ans num1-- is = '+(num1--)); //4
// console.log('The ans --num1 is = '+(--num1)); //2


//---------------string and strings method in javascript----------------------

// var name = "elan musk";
// var post = 'CEO';
// var company = "Tesla";
// var profile = `${name} is a ${post} of ${company}`;
// console.log(name);
// console.log(profile);
// var len = post.length;
// console.log(`length of character is ${len}`);

// //escape sequence character
// console.log('hello world\nHey world\tworld');

// //use of string

// document.getElementById('useOfString').innerHTML = '<h3>Use Of String</h3>';
 

//--------string function

/*
var str = 'Hello this is my world';
console.log(str);
//index of : to find the index of first occurence of substring
var find = str.indexOf('this');
console.log('result: '+find);

//last index of: to find the last occurance
find = str.lastIndexOf('is');
console.log('result: '+find);

//substring from string: 
// method1: slice: it takes negative value
find = str.slice(1,7);
console.log('result: '+find);

//method2: substring: it does not take negative value
fing = str.substring(1,7);
console.log('result: '+find);

//method3: substr: how many chr are in the string decided by second parameter
find = str.substr(1,4);
console.log('result: '+find);

//replace a substring from string
find = str.replace('world','city');
console.log('result: '+find);

//upper and lower case
console.log('result: '+str.toUpperCase()+' and '+str.toLowerCase());

//adding string in existing string
find = str.concat(' and my world');
console.log('result: '+find);

//remove white spaces from start and end
var st = '   hello            world        ';
console.log(st.trim());

//find character
find = str.charAt(3);
console.log('result: '+find);
// or
console.log("result: "+str[3]);

//find character code
find = str.charCodeAt(3);
console.log('result: '+find);
*/

//------------scope if else and switch

// var num = 5;
// console.log(num);
// let x = 10;
// {
//     let x = 5
//     console.log(x); //5
// }
// console.log(x); //10

// const val = 'This cannot be change';
// // val = 'This can be change ?' //error
// console.log(val);


// let score = 80;
// if(score > 80){
//     console.log('grade A');
// }
// else if(score == 80){
//     console.log('grade B+');
// }
// else{
//     console.log('grade B');
// }


// let age = 20;
// switch (age){
//     case 18:
//         console.log('not eligible');
//         break;
//     case 20:
//         console.log('eligible');
//         break;
//     case 21:
//         console.log('not eligible');
//         break;            
//     default:
//         console.log('age 20 is required');
//         break;    
// }


//-------------arrays and object

// let arr = [7,10,5,'pakistan',undefined];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr.length);
// let newarr = arr.sort();
// newarr.push('islamabad')
// console.log(newarr);
// let empArr = new Array(10);
// console.log(empArr);


// let empObj = {
//     name: 'Adnan',
//     language: 'javascript',
//     experience: '3 years',
//     "company name":'amazon'
// }
// console.log(empObj);
// console.log(empObj.name);
// console.log(empObj['company name']);


//------------function

/*
function greeting(name,greetText = 'morning from javascript'){
    console.log(greetText+' '+name);
}
greetText = 'good evening';
name = 'adnan';
name2 = 'imran';
name3 = 'elan musk';
greeting(name,greetText)
greeting(name2,greetText)
greeting(name3)


function sum(a,b){
    let c = a+b;
    return c;
}
console.log(sum(2,6));
*/

// ----------------Alert, Prompt, Confirm

// alert('hello world');

// let age = prompt('enter your age',20);
// console.log('age is: '+age);

// let deletePost = confirm('do you really want to delete this post?');
// console.log(deletePost);

// if(deletePost){
//     console.log('your post has been deleted');
// }else{
//     console.log('your post has not been deleted');
// }


// --------for while do while forEeach

//for loop

/*
let i=0;
for(i=0; i<3; i++){
    console.log(i);
}


for (let index = 0; index < fruits.length; index++) {
    console.log('fruits avaialble: '+fruits[index]); 
    
}
*/

// foreach 
/*
fruits.forEach(function f(elements){
})
*/

//for of

/*
let fruits = ['apple','mangoe','banana','orange'];
for(elements of fruits){
    console.log('fruits available: '+elements);
}
*/

//to iterate the object we use for in loop
//for in

/*
let students = {
    name:'adnan',
    age:'21',
    degree:'BSCS'
}

for(key in students){
    console.log(`The ${key} of employe is ${students[key]}`);
}
*/

//while loop

/*
let i = 0;
while(i < 5){
    console.log(`${i} is less than 5`);
    i++;
}
*/
/*

let i = 0;
do{
    console.log(`${i} is less than 5`);
    i++;
}while(i < 5);
*/

//manipulating dom

/*
let main = document.getElementById('main');
console.log(main);
let nav = document.getElementById('nav').innerHTML = '<li>NEW TEXT</li> <li>Hello World</li>';
console.log(nav);

let container = document.getElementsByClassName('container');
console.log(container);

//using css selectors
let firstCon = document.querySelector('.container');
console.log(firstCon);
let navId = document.querySelector('#nav');
console.log(navId);

//first child
let navData = document.querySelector('#nav > li').innerHTML;
console.log(navData);


//all selectors of same
let allLi = document.querySelectorAll('#nav > li');
console.log('selector return ',allLi);
*/

//event listener
/*
let para = document.getElementById('para');
let btn = document.getElementById('btn');

para.addEventListener('mouseover',function run(){
    console.log('mouse on para');
})
para.addEventListener('mouseout',function run(){
    console.log('mouse out para');
})
btn.addEventListener('click',function run(){
    if(para.style.display != 'none'){
        para.style.display = 'none';
    }else{
        para.style.display = 'block';
    }
})
*/


// function toggleHide(){
//     if(para.style.display != 'none'){
//         para.style.display = 'none'
//     }
//     else{
//         para.style.display = 'block';
//     }
// }

//set interval and set timeout

// set timeout: allow us to run a function once after the interval of time
// clear timeout: allow us to run a function repeatedly after the interval of time

// function greet(){
//     console.log('hello world');
// }

// setTimeout(greet,3000);

// function greet(employee){
//     console.log('hello '+employee);
// }

// setTimeout(greet,3000,'stokes');



// function greet(employee,salary){
//     console.log('hello '+employee+' '+salary);
// }

// setTimeout(greet,3000,'stokes',' your salary is $500');

// function signup(){
//     console.log('signup');
// }

// let timeout = setTimeout(signup,5000);
// console.log(timeout);

// //set timout return timeout id and with the help of clear timeout we delete that id

// clearTimeout(timeout)


// setInterval(() => {
//     console.log('hello world');
// }, 1000);

// function check(){
//     console.log('checked');
// }

// let intervalID = setInterval(check,2000);
// console.log(intervalID);
// clearInterval(intervalID);


// function Nowtime(){
//     let time = new Date();
//     document.getElementById('time').innerHTML = time
// }

// setInterval(Nowtime,1000);


                                     //DATE AND TIME
// let date = new Date();
// console.log(date);

// let newDate = new Date('2021-02-02');
// console.log(newDate);

// newDate(year,month,date,hour,minutes,second,millisecond)

let newDate = new Date(2021,1,8,9,4,3,19);
console.log(newDate);

let yr = newDate.getFullYear();
console.log('full year is '+yr);

let month = newDate.getMonth();
console.log('month: '+month);

let date = newDate.getDay();
console.log('date: '+date);

newDate.setDate(5);
console.log(newDate);

function updateTime(){
    document.getElementById('current').innerHTML = new Date();

}
setTimeout(updateTime,1000)












