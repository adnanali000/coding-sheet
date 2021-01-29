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
























