// Перед запуском в терминале npm i (установить node_modules)
// ДЛЯ ЗАПУСКА В ТЕРМИНАЛЕ ДОСТАТОЧНО НАПИСАТЬ gulp

let typeOfService = 'fetch';
const urlServer = "http://37.220.80.108/";

// Исключительно для однообразного вывода в консоль
async function GetAllTaskConsole(controller) {
    let dataGetAll = await controller.GetAllTasks();
    console.log(`${controller.typeOfService} : Get all task: `);
    console.log(dataGetAll);

    // Существующие id меняются каждый день)))) 
    let idGet = [dataGetAll[0].id, dataGetAll[1].id, dataGetAll[2].id];
    // GetId запрос 
    GetTaskById(controller, idGet);
}

async function GetTaskById(controller, idGet) {
    console.log(`id for Post : ${idGet}`);
    for(let idGetElem of idGet) {
        let dataGetById = await controller.GetTaskById(idGetElem);
        console.log(`${controller.typeOfService} : Get task by id = ${idGetElem}: `);
        console.log(dataGetById);
    }   
    
    // Выведет ошибку (несуществующий id)
    let dataGetById = await controller.GetTaskById(idGet[0] - 1);
    console.log(`${controller.typeOfService} : Get task by id = ${idGet[0] - 1}: `);
    console.log(dataGetById);

    // Post запрос через
    PostTask(controller);
}

async function PostTask(controller) {
    let newTasks = [{
            "name": "my_task",
            "info": `(my my task)))) ${controller.typeOfService}`,
            "isImportant": false
        },
        {
            "name": "my_task_2",
            "info": `(my my task_2)))) ${controller.typeOfService}`,
            "isImportant": false
        },
        {
            "name": "my_task_3",
            "info": `(my my task_3))))${controller.typeOfService}`,
            "isImportant": true
        }
    ];

    let idPatch = [];

    for(newTaskElem of newTasks) {
        let dataPost = await controller.PostTask(newTaskElem);

        console.log(`${controller.typeOfService} : Post task: `);
        console.log(dataPost);
        idPatch.push(dataPost.id);
    }
    
    // Patch запрос через
    PatchTask(controller, idPatch);
}

async function PatchTask(controller, idPatch) {
    let patchTasks = [{
            "name": `my_task_patch ${controller.typeOfService}`,
            "info": `_patch_(my my task)))) ${controller.typeOfService}`,
            "isImportant": false
        },
        {
            "name": `my_task_2_patch ${controller.typeOfService}`,
            "info": `_patch_(my my task_2)))) ${controller.typeOfService}`,
            "isImportant": false
        },
        {
            "name": `my_task_3_patch ${controller.typeOfService}`,
            "info": `_patch_(my my task_3))))${controller.typeOfService}`,
            "isImportant": true
        }
    ];

    for(let index = 0; index < 3; index++) {
        let dataPatch = await controller.PatchTask(idPatch[index], patchTasks[index]);
        console.log(`${controller.typeOfService} : Patch task: `);
        console.log(dataPatch);
    }

    DeleteTask(controller, idPatch);
}

async function DeleteTask(controller, idDelete) {
    for(let idDeleteElem of idDelete) {
        let statusDelete = await controller.DeleteTask(idDeleteElem);
        console.log(`${controller.typeOfService} : Delete task by id = ${idDeleteElem}: `);
        console.log(statusDelete);
    }

    // Наглядная проверка, что всё удалилось!
    let dataCheck = await controller.GetAllTasks();
    console.log('ПРОВЕРКА, ЧТО НА СЕРВЕРЕ НЕ ОСТАЛОСЬ МОИХ ЗАДАЧ)))))');
    console.log(`${controller.typeOfService} : Get all task: `);
    console.log(dataCheck);
}

// Создадим экземпляр контроллера
const ControllerServiceFetch = new ControllerService(typeOfService, urlServer);
// Запросы через fetch
GetAllTaskConsole(ControllerServiceFetch);

typeOfService = 'XMLH';
const ControllerServiceXMLH = new ControllerService(typeOfService, urlServer);
// Get запрос через XMLHttpRequest
GetAllTaskConsole(ControllerServiceXMLH);
