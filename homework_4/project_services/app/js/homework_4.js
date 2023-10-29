// Перед запуском в терминале npm i (установить node_modules)
// ДЛЯ ЗАПУСКА В ТЕРМИНАЛЕ ДОСТАТОЧНО НАПИСАТЬ gulp

let typeOfService = 'fetch';
const urlServer = "http://37.220.80.108/";
let idGet = [1, 11, 12];

// Создадим экземпляр контроллера
const ControlServiceFetch = new ControllerService(typeOfService, urlServer);

// Get запрос через fetch
// Get всех данных
ControlServiceFetch.GetAllTasks();
// Get конкретного объекта по id
ControlServiceFetch.GetTaskById(idGet[0]);
ControlServiceFetch.GetTaskById(idGet[1]);
ControlServiceFetch.GetTaskById(idGet[2]);
// Выдаст ошибку)
ControlServiceFetch.GetTaskById(0);


typeOfService = 'XMLH';
const ControllerServiceXMLH = new ControllerService(typeOfService, urlServer);
// Get запрос через XMLHttpRequest
// Get всех данных
ControllerServiceXMLH.GetAllTasks();
// Get конкретного объекта по id
ControllerServiceXMLH.GetTaskById(idGet[0]);
ControllerServiceXMLH.GetTaskById(idGet[1]);
ControllerServiceXMLH.GetTaskById(idGet[2]);
// Выдаст ошибку)
ControllerServiceXMLH.GetTaskById(0);

// typeOfService = "str";
// const ControlServiceEmpty = new ControllerService(typeOfService);