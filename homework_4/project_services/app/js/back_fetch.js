// Класс для работы с беком, используя fetch
// Это сервис

class FetchSrvice {
    // Конструктор для создания экземпляров класса
    constructor() {
        console.log("Всё работает! Fetch");
    }

    async GetAllTasks(url) {
        let urlGetAll = url+'tasks';
        const response = await fetch(urlGetAll, {
            method: 'GET'
        }).then((res) => res.json())
        .catch((err) => err);

        return response;
    }

    async GetTaskById(url, id) {
        let urlGetById = url+'tasks/' + String(id);
        let dataResponse;
        let errorResponse;
        let response = await fetch(urlGetById, {
            method: 'GET'
        });        
        if (response.ok) { 
            // получаем тело ответа (см. про этот метод ниже)
            dataResponse = await response.json();
            return dataResponse;
        } else {
            errorResponse = "Ошибка HTTP: " + response.status;
            return errorResponse;
        }
    }
}
