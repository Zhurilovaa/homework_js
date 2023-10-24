let count = 0;
console.log(`start (count = ${count})`);
count++;

let microtask = new Promise((resolve)=> resolve());

// Создание элементов dom-дерева
let ol = document.getElementById('ol');
// Элемент Render Task_1_2
let liRenderTask_1_2 = document.createElement('li');

// Элемент Render Task_3_2
let liRenderTask_3_2 = document.createElement('li');

// Функция "Очередь"
function Queue_My_Event(){
    // Task_1
    setTimeout(function (cb) {
        console.log(`Task_1 (count = ${count})`);
        count++;

        // MicroTask_1_1
        microtask.then(function(result) {
            console.log(`MicroTask_1_2 (count = ${count})`);
            count++; 
            
            // Render Task_1_2
            liRenderTask_1_2.innerHTML = `Render Task_1_2 (count = ${count})`;
            ol.append(liRenderTask_1_2); 
            count++;  
        });
    }, 0);    

    // Task_2
    setTimeout(function (cb) {
        console.log(`Task_2 (count = ${count})`);
        count++; 

        // MicroTask_2_1
        microtask.then(function(result) {
            console.log(`MicroTask_2_1 (count = ${count})`);
            count++; 
        });  

        // MicroTask_2_2
        microtask.then(function(result) {
            console.log(`MicroTask_2_2 (count = ${count})`);
            count++; 
        });  
    }, 0);

    // Task_3
    setTimeout(function (cb) {
        console.log(`Task_3  (count = ${count})`);
        count++;

        // MicroTask_3_1
        microtask.then(function(result) {
            console.log(`MicroTask_3_1 (count = ${count})`);
            count++; 

            // Render Task_3_2
            liRenderTask_3_2.innerHTML = `Render Task_3_2 (count = ${count})`;
            ol.append(liRenderTask_3_2);
            count++;
        });     
    }, 0);
}

Queue_My_Event();
