"use strict";

// №1 
// Сделать функцию, которая будет позволять вызывать себя последовательно для
// суммирования и/или при выводе и/или математической операции вернет конечный
// результат fucn(2)(3)(5) = 10
function addSequence(firstTerm) {
    let funcIN = function(nextTerm) {
        if(nextTerm === undefined) {
            return firstTerm;
        } else {
            return addSequence(firstTerm+nextTerm);
        }
    };
    return funcIN;
}
// Работает по типу func(2)(5)(3)() = 10
// Проверочка
// console.log(addSequence(2)())
// console.log(addSequence(2)(3)())
// console.log(addSequence(2)(3)(5)())

// На доработку => как избавиться от последнего вызова???))
// console.log(addSequence(2))
// console.log(addSequence(2)(3))


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
// console.log(objOfStr);
