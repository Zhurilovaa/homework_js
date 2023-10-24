console.log('start');

function Queue_My_Event(){
    // Task_1
    setTimeout(function (cb) {
        console.log('Task_1');

        // Task_1_1
        setTimeout(function (cb) {
        console.log('Task_1_1');
        }, 0);

        // MicroTask_1_1
        Promise.resolve().then(function(result) {
        console.log('Microtask_1_1');
        }); 

        // !!!!!
        // Render Task_1_2
        //document.createTextNode('Render Task_1_2');
    }, 0);

    // Task_2
    setTimeout(function (cb) {
        console.log('Task_2');

        // MicroTask_1_1
        Promise.resolve().then(function(result) {
        console.log('Microtask_2_1');
        });

        // MicroTask_1_1
        Promise.resolve().then(function(result) {
        console.log('Microtask_2_2');
        });
    }, 0);


    // Task_3
    setTimeout(function (cb) {
        console.log('Task_3');

        // MicroTask_3_1
        Promise.resolve().then(function(result) {
        console.log('Microtask_3_1');
        });

        // !!!!!
        // Render Task_3_1
        //document.createTextNode('Render Task_3_1');
    }, 0);
}

Queue_My_Event();
