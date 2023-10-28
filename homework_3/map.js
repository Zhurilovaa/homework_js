// Метод map() создаёт НОВЫЙ МАССИВ с результатом вызова указанной функции для каждого элемента массива.

// Отдельная функция
function mapMyOwn(arr, fn) {
    let mapArr = [];
    for(let element of arr) {
        mapArr.push(fn(element));
    }
    return mapArr;
}

// Проверка)
console.log(mapMyOwn([2, 3, 4, 5], (a) => a**2));
let arr = [1, 2, 3, 0, 8];
let arrPlus1 = mapMyOwn(arr, (b) => b += 1);
console.log(`arr = [${arr}]`);
console.log(`arrPlus1 = [${arrPlus1}]`);

// Прототип для массива
Array.prototype.map = function(fn) {
    let mapArr = [];
    for(let element of this) {
        mapArr.push(fn(element));
    }
    return mapArr;
}

let arrProto = [1, 2, 3, 4];
let arrProtoMap = arrProto.map((b) => Math.sqrt(b));
console.log(`arrProto = [${arrProto}]`);
console.log(`arrProtoMap = [${arrProtoMap}]`);