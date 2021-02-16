console.log('module file');
//creating average module

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.exports = average;

module.exports = {
    avg:average,
    name:'adnan',
    handsOn:'nodeJs'
}

//module.exports itself a object
module.exports.age = 22;