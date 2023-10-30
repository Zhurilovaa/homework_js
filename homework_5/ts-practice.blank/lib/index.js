'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('Домашка');
class XMLHService {
    constructor() {
        this.xhr = new XMLHttpRequest();
        console.log('Всё·работает!·Сервис·через·XMLHttpRequest·создан!');
    }
    GetAllTasks(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlGet = url + 'tasks';
            const dataGetAll = yield new Promise((resolve, reject) => {
                this.xhr.open('GET', urlGet);
                this.xhr.onload = () => {
                    if (this.xhr.status != 200) {
                        resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                    }
                    else {
                        resolve(JSON.parse(this.xhr.response));
                    }
                };
                this.xhr.onerror = () => reject('Запрос не удался');
                this.xhr.send();
            })
                .then((res) => res)
                .catch((err) => err);
            return dataGetAll;
        });
    }
    GetTaskById(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlGetById = url + 'tasks/' + String(id);
            const dataGetById = yield new Promise((resolve, reject) => {
                this.xhr.open('GET', urlGetById);
                this.xhr.onload = () => {
                    if (this.xhr.status != 200) {
                        resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                    }
                    else {
                        resolve(JSON.parse(this.xhr.response));
                    }
                };
                this.xhr.onerror = () => reject('Запрос не удался');
                this.xhr.send();
            })
                .then((res) => res)
                .catch((err) => err);
            return dataGetById;
        });
    }
    PostTask(url, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlPost = url + 'tasks';
            const newData_str = JSON.stringify(newData);
            const dataPost = yield new Promise((resolve, reject) => {
                this.xhr.open('POST', urlPost);
                this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                this.xhr.onload = () => {
                    if (this.xhr.status < 200 || this.xhr.status >= 300) {
                        resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                    }
                    else {
                        resolve(JSON.parse(this.xhr.response));
                    }
                };
                this.xhr.onerror = () => reject('Запрос не удался');
                this.xhr.send(newData_str);
            })
                .then((res) => res)
                .catch((err) => err);
            return dataPost;
        });
    }
    PatchTask(url, idPatch, patchTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlPatch = url + 'tasks/' + String(idPatch);
            const patchTask_str = JSON.stringify(patchTask);
            const dataPatch = yield new Promise((resolve, reject) => {
                this.xhr.open('PATCH', urlPatch);
                this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                this.xhr.onload = () => {
                    if (this.xhr.status < 200 || this.xhr.status >= 300) {
                        resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                    }
                    else {
                        resolve(JSON.parse(this.xhr.response));
                    }
                };
                this.xhr.onerror = () => reject('Запрос не удался');
                this.xhr.send(patchTask_str);
            })
                .then((res) => res)
                .catch((err) => err);
            return dataPatch;
        });
    }
    DeleteTask(url, idDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlDelete = url + 'tasks/' + String(idDelete);
            const statusDelete = yield new Promise((resolve, reject) => {
                this.xhr.open('DELETE', urlDelete);
                this.xhr.onload = () => {
                    if (this.xhr.status != 200) {
                        resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                    }
                    else {
                        resolve(JSON.parse(this.xhr.response));
                    }
                };
                this.xhr.onerror = () => reject('Запрос не удался');
                this.xhr.send();
            })
                .then((res) => res)
                .catch((err) => err);
            return statusDelete;
        });
    }
}
class FetchSrvice {
    constructor() {
        console.log('Всё работает! Сервис через Fetch создан!');
    }
    GetAllTasks(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlGetAll = url + 'tasks';
            const dataGetAll = yield fetch(urlGetAll, {
                method: 'GET',
            })
                .then((res) => res.json())
                .catch((err) => err);
            return dataGetAll;
        });
    }
    GetTaskById(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlGetById = url + 'tasks/' + String(id);
            let dataGetById;
            let errorGetById;
            const response = yield fetch(urlGetById, {
                method: 'GET',
            });
            if (response.ok) {
                dataGetById = response.json();
                return dataGetById;
            }
            else {
                errorGetById = 'Ошибка HTTP: ' + response.status;
                return errorGetById;
            }
        });
    }
    PostTask(url, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlPost = url + 'tasks';
            const newData_str = JSON.stringify(newData);
            const dataPost = yield fetch(urlPost, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: newData_str,
            })
                .then((res) => res.json())
                .catch((err) => err);
            return dataPost;
        });
    }
    PatchTask(url, idPatch, patchData) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlPatch = url + 'tasks/' + String(idPatch);
            const patchData_str = JSON.stringify(patchData);
            const dataPatch = yield fetch(urlPatch, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: patchData_str,
            })
                .then((res) => res.json())
                .catch((err) => err);
            return dataPatch;
        });
    }
    DeleteTask(url, idDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlDelete = url + 'tasks/' + String(idDelete);
            const statusDelete = yield fetch(urlDelete, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .catch((err) => err);
            return statusDelete;
        });
    }
}
class ControllerService {
    constructor(typeOfService, urlServer) {
        this.typeOfService = typeOfService;
        if (typeOfService === 'fetch') {
            this.service = new FetchSrvice();
        }
        else if (typeOfService === 'XMLH') {
            this.service = new XMLHService();
        }
        else {
            console.log('Do not find service with this type!');
        }
        this.url = urlServer;
        console.log('Всё работает! Controller создан!');
    }
    GetTypeOfService() {
        return this.typeOfService;
    }
    GetAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataGetAll = yield this.service.GetAllTasks(this.url);
            return dataGetAll;
        });
    }
    GetTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataGetById = yield this.service.GetTaskById(this.url, id);
            return dataGetById;
        });
    }
    PostTask(newTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataPost = yield this.service.PostTask(this.url, newTask);
            return dataPost;
        });
    }
    PatchTask(idPatch, patchTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataPatch = yield this.service.PatchTask(this.url, idPatch, patchTask);
            return dataPatch;
        });
    }
    DeleteTask(idDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusDelete = yield this.service.DeleteTask(this.url, idDelete);
            return statusDelete;
        });
    }
}
let typeOfService = 'fetch';
const urlServer = 'http://37.220.80.108/';
function GetAllTaskConsole(controller) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataGetAll = yield controller.GetAllTasks();
        console.log(`${controller.GetTypeOfService()} : Get all task: `);
        console.log(dataGetAll);
        const idGet = [27, 28, 29];
        GetTaskById(controller, idGet);
    });
}
function GetTaskById(controller, idGet) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`id for Post : ${idGet}`);
        for (const idGetElem of idGet) {
            const dataGetById = yield controller.GetTaskById(idGetElem);
            console.log(`${controller.GetTypeOfService()} : Get task by id = ${idGetElem}: `);
            console.log(dataGetById);
        }
        const dataGetById = yield controller.GetTaskById(-1);
        console.log(`${controller.GetTypeOfService()} : Get task by id = ${-1}: `);
        console.log(dataGetById);
        PostTask(controller);
    });
}
function PostTask(controller) {
    return __awaiter(this, void 0, void 0, function* () {
        const newTasks = [
            {
                'name': 'my_task',
                'info': `(my my task)))) ${controller.GetTypeOfService()}`,
                'isImportant': false,
            },
            {
                'name': 'my_task_2',
                'info': `(my my task_2)))) ${controller.GetTypeOfService()}`,
                'isImportant': false,
            },
            {
                'name': 'my_task_3',
                'info': `(my my task_3))))${controller.GetTypeOfService()}`,
                'isImportant': true,
            },
        ];
        const idPatch = [1751, 1752, 1753];
        for (const newTaskElem of newTasks) {
            const dataPost = yield controller.PostTask(newTaskElem);
            console.log(`${controller.GetTypeOfService()} : Post task: `);
            console.log(typeof dataPost);
            console.log(dataPost);
        }
        PatchTask(controller, idPatch);
    });
}
function PatchTask(controller, idPatch) {
    return __awaiter(this, void 0, void 0, function* () {
        const patchTasks = [
            {
                'name': `my_task_patch ${controller.GetTypeOfService()}`,
                'info': `_patch_(my my task)))) ${controller.GetTypeOfService()}`,
                'isImportant': false,
            },
            {
                'name': `my_task_2_patch ${controller.GetTypeOfService()}`,
                'info': `_patch_(my my task_2)))) ${controller.GetTypeOfService()}`,
                'isImportant': false,
            },
            {
                'name': `my_task_3_patch ${controller.GetTypeOfService()}`,
                'info': `_patch_(my my task_3))))${controller.GetTypeOfService()}`,
                'isImportant': true,
            },
        ];
        for (let index = 0; index < 3; index++) {
            const dataPatch = yield controller.PatchTask(idPatch[index], patchTasks[index]);
            console.log(`${controller.GetTypeOfService()} : Patch task: `);
            console.log(dataPatch);
        }
        DeleteTask(controller, idPatch);
    });
}
function DeleteTask(controller, idDelete) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const idDeleteElem of idDelete) {
            const statusDelete = yield controller.DeleteTask(idDeleteElem);
            console.log(`${controller.GetTypeOfService()} : Delete task by id = ${idDeleteElem}: `);
            console.log(statusDelete);
        }
        const dataCheck = yield controller.GetAllTasks();
        console.log('Проверка, что данные удалились (ну или что их там уже нет)))');
        console.log(`${controller.GetTypeOfService()} : Get all task: `);
        console.log(dataCheck);
    });
}
const ControllerServiceFetch = new ControllerService(typeOfService, urlServer);
GetAllTaskConsole(ControllerServiceFetch);
typeOfService = 'XMLH';
const ControllerServiceXMLH = new ControllerService(typeOfService, urlServer);
GetAllTaskConsole(ControllerServiceXMLH);
for (let id = 1754; id < 1783; id++) {
    ControllerServiceFetch.DeleteTask(id);
}
//# sourceMappingURL=index.js.map