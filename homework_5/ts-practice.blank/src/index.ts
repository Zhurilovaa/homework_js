'use strict';
// 'tabWidth': 2, у меня 2 visual code подсвечивает(
// Поэтому пока что поставила 4

console.log('Домашка');

interface DataTask {
    'name'?: string;
    'info'?: string;
    'isImportant'?: boolean;
    'isCompleted'?: boolean;
    'id': number;
}

// Класс для работы с беком, используя XMLHttpRequest
// Это сервис
class XMLHService {
    private xhr: XMLHttpRequest;
    // Конструктор для создания экземпляров класса
    constructor() {
        this.xhr = new XMLHttpRequest();
        console.log('Всё·работает!·Сервис·через·XMLHttpRequest·создан!');
    }

    async GetAllTasks(url: string): Promise<object[]> {
        const urlGet = url + 'tasks';

        const dataGetAll: Promise<object[]> = await new Promise<string>((resolve, reject) => {
            this.xhr.open('GET', urlGet);
            this.xhr.onload = () => {
                if (this.xhr.status != 200) {
                    resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject('Запрос не удался');
            this.xhr.send();
        })
            .then((res) => res)
            .catch((err) => err);

        return dataGetAll;
    }

    async GetTaskById(url: string, id: number): Promise<string> {
        const urlGetById = url + 'tasks/' + String(id);

        const dataGetById: Promise<string> = await new Promise<string>((resolve, reject) => {
            this.xhr.open('GET', urlGetById);
            this.xhr.onload = () => {
                if (this.xhr.status != 200) {
                    resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject('Запрос не удался');
            this.xhr.send();
        })
            .then((res) => res)
            .catch((err) => err);

        return dataGetById;
    }

    async PostTask(url: string, newData: object): Promise<object> {
        const urlPost = url + 'tasks';
        const newData_str: string = JSON.stringify(newData);

        const dataPost: Promise<object> = await new Promise<string>((resolve, reject) => {
            this.xhr.open('POST', urlPost);
            this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            this.xhr.onload = () => {
                if (this.xhr.status < 200 || this.xhr.status >= 300) {
                    resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject('Запрос не удался');
            this.xhr.send(newData_str);
        })
            .then((res) => res)
            .catch((err) => err);

        return dataPost;
    }

    async PatchTask(url: string, idPatch: number, patchTask: object): Promise<string> {
        const urlPatch = url + 'tasks/' + String(idPatch);
        const patchTask_str: string = JSON.stringify(patchTask);

        const dataPatch: Promise<string> = await new Promise<string>((resolve, reject) => {
            this.xhr.open('PATCH', urlPatch);
            this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            this.xhr.onload = () => {
                if (this.xhr.status < 200 || this.xhr.status >= 300) {
                    resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject('Запрос не удался');
            this.xhr.send(patchTask_str);
        })
            .then((res) => res)
            .catch((err) => err);

        return dataPatch;
    }

    async DeleteTask(url: string, idDelete: number): Promise<string> {
        const urlDelete = url + 'tasks/' + String(idDelete);

        const statusDelete: Promise<string> = await new Promise<string>((resolve, reject) => {
            this.xhr.open('DELETE', urlDelete);
            this.xhr.onload = () => {
                if (this.xhr.status != 200) {
                    resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject('Запрос не удался');
            this.xhr.send();
        })
            .then((res) => res)
            .catch((err) => err);

        return statusDelete;
    }
}

// Класс для работы с беком, используя fetch
// Это сервис
class FetchSrvice {
    // Конструктор для создания экземпляров класса
    constructor() {
        console.log('Всё работает! Сервис через Fetch создан!');
    }

    async GetAllTasks(url: string): Promise<object[]> {
        const urlGetAll = url + 'tasks';
        const dataGetAll: Promise<object[]> = await fetch(urlGetAll, {
            method: 'GET',
        })
            .then((res) => res.json())
            .catch((err) => err);

        return dataGetAll;
    }

    async GetTaskById(url: string, id: number): Promise<string> {
        const urlGetById = url + 'tasks/' + String(id);
        let dataGetById;
        let errorGetById;
        const response: Response = await fetch(urlGetById, {
            method: 'GET',
        });
        if (response.ok) {
            dataGetById = response.json();
            return dataGetById;
        } else {
            errorGetById = 'Ошибка HTTP: ' + response.status;
            return errorGetById;
        }
    }

    async PostTask(url: string, newData: object): Promise<object> {
        const urlPost = url + 'tasks';
        const newData_str: string = JSON.stringify(newData);
        const dataPost: object = await fetch(urlPost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: newData_str,
        })
            .then((res) => res.json())
            .catch((err) => err);

        return dataPost;
    }

    async PatchTask(url: string, idPatch: number, patchData: object): Promise<string> {
        const urlPatch = url + 'tasks/' + String(idPatch);
        const patchData_str: string = JSON.stringify(patchData);

        const dataPatch: string = await fetch(urlPatch, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: patchData_str,
        })
            .then((res) => res.json())
            .catch((err) => err);

        return dataPatch;
    }

    async DeleteTask(url: string, idDelete: number): Promise<string> {
        const urlDelete = url + 'tasks/' + String(idDelete);

        const statusDelete: string = await fetch(urlDelete, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .catch((err) => err);

        return statusDelete;
    }
}

// Класс контроллер(фасад)
// Сделать нужно все запросы которые есть в API
class ControllerService {
    private typeOfService: string;
    private url: string;
    private service: XMLHService | FetchSrvice;
    // Конструктор для создания экземпляров класса
    constructor(typeOfService: string, urlServer: string) {
        this.typeOfService = typeOfService;

        if (typeOfService === 'fetch') {
            this.service = new FetchSrvice();
        } else if (typeOfService === 'XMLH') {
            this.service = new XMLHService();
        } else {
            console.log('Do not find service with this type!');
        }
        this.url = urlServer;
        console.log('Всё работает! Controller создан!');
    }

    GetTypeOfService(): string {
        return this.typeOfService;
    }

    // Get запросы
    async GetAllTasks(): Promise<object[]> {
        const dataGetAll: object[] = await this.service.GetAllTasks(this.url);
        return dataGetAll;
    }

    async GetTaskById(id: number): Promise<string> {
        const dataGetById: string = await this.service.GetTaskById(this.url, id);
        return dataGetById;
    }

    // Post запрос
    async PostTask(newTask: object): Promise<object> {
        const dataPost: object = await this.service.PostTask(this.url, newTask);
        return dataPost;
    }

    // Patch запрос
    async PatchTask(idPatch: number, patchTask: object): Promise<string> {
        const dataPatch: string = await this.service.PatchTask(this.url, idPatch, patchTask);
        return dataPatch;
    }

    // Delete запрос
    async DeleteTask(idDelete: number): Promise<string> {
        const statusDelete: string = await this.service.DeleteTask(this.url, idDelete);
        return statusDelete;
    }
}

// Основной код)
let typeOfService = 'fetch';
const urlServer = 'http://37.220.80.108/';

// Исключительно для однообразного вывода в консоль
async function GetAllTaskConsole(controller: ControllerService) {
    const dataGetAll: object[] = await controller.GetAllTasks();
    console.log(`${controller.GetTypeOfService()} : Get all task: `);
    console.log(dataGetAll);

    // Существующие id меняются каждый день))))
    const idGet = [27, 28, 29];
    // GetId запрос
    GetTaskById(controller, idGet);
}

async function GetTaskById(controller: ControllerService, idGet: number[]) {
    console.log(`id for Post : ${idGet}`);
    for (const idGetElem of idGet) {
        const dataGetById: string = await controller.GetTaskById(idGetElem);
        console.log(`${controller.GetTypeOfService()} : Get task by id = ${idGetElem}: `);
        console.log(dataGetById);
    }

    // Выведет ошибку (несуществующий id)
    const dataGetById: string = await controller.GetTaskById(-1);
    console.log(`${controller.GetTypeOfService()} : Get task by id = ${-1}: `);
    console.log(dataGetById);

    // Post запрос через
    PostTask(controller);
}

async function PostTask(controller: ControllerService) {
    const newTasks: object[] = [
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

    const idPatch: number[] = [1789, 1790, 1791];

    for (const newTaskElem of newTasks) {
        const dataPost: object = await controller.PostTask(newTaskElem);
        console.log(`${controller.GetTypeOfService()} : Post task: `);
        console.log(typeof dataPost);
        console.log(dataPost);
    }

    // Patch запрос через
    PatchTask(controller, idPatch);
}

async function PatchTask(controller: ControllerService, idPatch: number[]) {
    const patchTasks: object[] = [
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
        const dataPatch: string = await controller.PatchTask(idPatch[index]!, patchTasks[index]!);
        console.log(`${controller.GetTypeOfService()} : Patch task: `);
        console.log(dataPatch);
    }

    DeleteTask(controller, idPatch);
}

async function DeleteTask(controller: ControllerService, idDelete: number[]) {
    for (const idDeleteElem of idDelete) {
        const statusDelete = await controller.DeleteTask(idDeleteElem);
        console.log(`${controller.GetTypeOfService()} : Delete task by id = ${idDeleteElem}: `);
        console.log(statusDelete);
    }

    // Наглядная проверка, что всё удалилось!
    const dataCheck = await controller.GetAllTasks();
    console.log('Проверка, что данные удалились (ну или что их там уже нет)))');
    console.log(`${controller.GetTypeOfService()} : Get all task: `);
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
