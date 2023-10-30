// Класс для работы с беком, используя fetch
// Это сервис

class FetchSrvice {
    // Конструктор для создания экземпляров класса
    constructor() {
        console.log("Всё работает! Сервис через Fetch создан!");
    }

    async GetAllTasks(url) {
        let urlGetAll = url+'tasks';
        const dataGetAll = await fetch(urlGetAll, {
            method: 'GET'
        }).then((res) => res.json())
        .catch((err) => err);

        return dataGetAll;
    }

    async GetTaskById(url, id) {
        let urlGetById = url+'tasks/' + String(id);
        let dataGetById;
        let errorGetById;
        let response = await fetch(urlGetById, {
            method: 'GET'
        });        
        if (response.ok) { 
            dataGetById = response.json();
            return dataGetById;
        } else {
            errorGetById = "Ошибка HTTP: " + response.status;
            return errorGetById;
        }
    }

    async PostTask(url, newData) {
        let urlPost = url+'tasks';
        newData = JSON.stringify(newData);
        let dataPost = await fetch(urlPost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: newData
        }).then((res) => res.json())
        .catch((err) => err);

        return dataPost;
    }

    async PatchTask(url, idPatch, patchData) {
        let urlPatch = url+'tasks/' + String(idPatch);
        patchData = JSON.stringify(patchData);

        let dataPatch = await fetch(urlPatch, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: patchData
        }).then((res) => res.json())
        .catch((err) => err);

        return dataPatch;
    }

    async DeleteTask(url, idDelete) {
        let urlDelete = url + 'tasks/' + String(idDelete);

        let statusDelete = await fetch(urlDelete, {
            method: 'DELETE'
        }).then((res) => res.json())
        .catch((err) => err);

        return statusDelete;
    }
}
