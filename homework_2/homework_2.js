
// №1 
// Сделать функцию, которая будет позволять вызывать себя последовательно для
// суммирования и/или при выводе и/или математической операции вернет конечный
// результат fucn(2)(3)(5) = 10
// func(a, b, c) => func(a)(b)(c)
function sequentialAddition(firstTerm = 0) {
    let currentSum = firstTerm;
    let funcIN = function (nextTerm = 0) {
        currentSum += nextTerm;
        return funcIN;
    }

    funcIN.toString = function() {
        return currentSum;
    };

    return funcIN;
}

// Проверочка)))
// Работает при выполнении сравнения и математических операций
console.log(sequentialAddition(1)(2)(3) == 6);  // true
console.log(sequentialAddition(2) + 3 === 5);   // true
console.log(sequentialAddition(2)(3) * 2);  // 10
console.log(sequentialAddition(2)(0) * 2);  // 4
console.log(sequentialAddition()(1) * 2);  // 2
// При выводе 
// при использовании в качестве числа или строки, метод toString возвращает currentSum – число. 
//console.log(sequentialAddition(2)(3)(5));


// №2
function strToObject(str = "") {
    if(str) {
        let result = {};
        let keys = str.split('.');
        let curr = result;
        for(let key of keys) {          
            curr[key] = {};
            curr = curr[key];
        }
        return result;
    }
    return {};
}

// Проверочка)))
let str = 'one.two.three.four.five';
let objOfStr = strToObject(str);
console.log(JSON.stringify(objOfStr, null, 4));


