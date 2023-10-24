console.log('start');

// Возможно не правильные render_tasks ????

let ol = document.getElementById('ol');

function Queue_My_Event(){
    // Task_1
    setTimeout(function (cb) {
        console.log('Task_1');
        // // Task_1_1
        // setTimeout(function (cb) {
        //     let liTask_1_1 = document.createElement('li');
        //     liTask_1_1.innerHTML = 'Task_1_1';
        //     ol.append(liTask_1_1);
        // }, 0);

        // MicroTask_1_1
        Promise.resolve().then(function(result) {
            let liMicroTask_1_2 = document.createElement('li');
            liMicroTask_1_2.innerHTML = 'MicroTask_1_2';
            ol.append(liMicroTask_1_2);
            console.log('MicroTask_1_2');
        });  
        
        // Render Task_1_2
        let liRenderTask_1 = document.createElement('li');
        liRenderTask_1.innerHTML = 'Render Task_1_2';
        ol.append(liRenderTask_1);
        console.log('RenderTask_1_2');
    }, 0);

    // Task_2
    setTimeout(function (cb) {
        console.log('Task_2');

        // MicroTask_2_1
        Promise.resolve().then(function(result) {
            let liMicroTask_2_1 = document.createElement('li');
            liMicroTask_2_1.innerHTML = 'MicroTask_2_1';
            ol.append(liMicroTask_2_1);
            console.log('MicroTask_2_1');
        });  

        // MicroTask_2_2
        Promise.resolve().then(function(result) {
            let liMicroTask_2_2 = document.createElement('li');
            liMicroTask_2_2.innerHTML = 'MicroTask_2_2';
            ol.append(liMicroTask_2_2);
            console.log('MicroTask_2_2');
        });  
    }, 0);


    // Task_3
    setTimeout(function (cb) {
        console.log('Task_3');

        // MicroTask_3_1
        Promise.resolve().then(function(result) {
            let liMicroTask_3_1 = document.createElement('li');
            liMicroTask_3_1.innerHTML = 'MicroTask_3_1';
            ol.append(liMicroTask_3_1);
            console.log('MicroTask_3_1');
        });  
        
        // Render Task_3_2
        let liRenderTask_3_2 = document.createElement('li');
        liRenderTask_3_2.innerHTML = 'Render Task_3_2';
        ol.append(liRenderTask_3_2);
        console.log('MicroTask_3_2');
    }, 0);
}

Queue_My_Event();
