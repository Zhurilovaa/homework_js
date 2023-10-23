"use strict";

// №1
function seqAddition(a = 0) {
    return function (b = 0) {
        return function (c = 0) {
            return (a + b + c);
        }
    }
}
//Проверочка)))
// console.log(seqAddition(2)(5)(3));
// console.log(seqAddition(2)(5)());
// console.log(seqAddition(2)()(3));
// console.log(seqAddition()(5)(3));
// console.log(seqAddition()()());


// №2
function strToObject(str = "") {
    if(str) {
        let result = {};
        let keys = str.split('.');
        let curr = result;
        for(let key of keys) {          
            if(key === keys[keys.length - 1]) {
                curr[key] = undefined;
            } else {
                curr[key] = {};
                curr = curr[key];
            }            
        }
        return result;
    }
    return {};
}

// Проверочка)))
// let str = 'one.two.three.four.five';
// let objOfStr = strToObject(str);
// Через breakpoint структура объекта верная
