// Класс для работы с беком, используя XMLHttpRequest
// Это сервис

class XMLHService {
    // Конструктор для создания экземпляров класса
    constructor() {
        this.xhr = new XMLHttpRequest();
        console.log("Всё работает! Сервис через XMLHttpRequest создан!");
    }

    async GetAllTasks(url) {
        let urlGet = url+'tasks';

        let dataGetAll = await new Promise((resolve, reject) => {
            this.xhr.open('GET', urlGet);
            this.xhr.onload = () => {
                if (this.xhr.status != 200) {
                    resolve('Ошибка ' + this.xhr.status + " " + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject("Запрос не удался");
            this.xhr.send();
        })
        .then((res) => res)
        .catch((err) => err);

        return dataGetAll;
    }

    async GetTaskById(url, id) {
        let urlGetById = url+'tasks/' + String(id);

        let dataGetById = await new Promise((resolve, reject) => {
            this.xhr.open('GET', urlGetById);
            this.xhr.onload = () => {
                if (this.xhr.status != 200) {
                    resolve('Ошибка ' + this.xhr.status + " " + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject("Запрос не удался");
            this.xhr.send();
        })
        .then((res) => res)
        .catch((err) => err);

        return dataGetById;
    }

    async PostTask(url, newData) {
        let urlPost = url+'tasks';
        newData = JSON.stringify(newData);

        let dataPost = await new Promise((resolve, reject) => {
            this.xhr.open('POST', urlPost);
            this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            this.xhr.onload = () => {
                if (this.xhr.status < 200 || this.xhr.status >= 300) {
                    resolve('Ошибка ' + this.xhr.status + " " + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject("Запрос не удался");
            this.xhr.send(newData);
        })
        .then((res) => res)
        .catch((err) => err);

        return dataPost;
    }

    async PatchTask(url, idPatch, patchTask){
        let urlPatch = url+'tasks/' + String(idPatch);
        patchTask = JSON.stringify(patchTask);

        let dataPatch = await new Promise((resolve, reject) => {
            this.xhr.open('PATCH', urlPatch);
            this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            this.xhr.onload = () => {
                if (this.xhr.status < 200 || this.xhr.status >= 300) {
                    resolve('Ошибка ' + this.xhr.status + " " + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject("Запрос не удался");
            this.xhr.send(patchTask);
        })
        .then((res) => res)
        .catch((err) => err);

        return dataPatch;
    }

    async DeleteTask(url, idDelete){
        let urlDelete = url+'tasks/' + String(idDelete);

        let statusDelete = await new Promise((resolve, reject) => {
            this.xhr.open('DELETE', urlDelete);
            this.xhr.onload = () => {
                if (this.xhr.status != 200) {
                    resolve('Ошибка ' + this.xhr.status + " " + this.xhr.statusText);
                } else {
                    resolve(JSON.parse(this.xhr.response));
                }
            };
            this.xhr.onerror = () => reject("Запрос не удался");
            this.xhr.send();
        })
        .then((res) => res)
        .catch((err) => err);

        return statusDelete;
    }
}