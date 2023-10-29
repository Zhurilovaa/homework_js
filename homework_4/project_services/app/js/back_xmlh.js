// Класс для работы с беком, используя XMLHttpRequest
// Это сервис

class XMLHService {
    // Конструктор для создания экземпляров класса
    constructor() {
        this.xhr = new XMLHttpRequest();
        console.log("Всё работает! XMLHttpRequest");
    }

    async GetAllTasks(url) {
        let urlGet = url+'tasks';
        this.xhr.open('GET', urlGet, false);
        try {
            this.xhr.send();
            if (this.xhr.status != 200) {
                return 'Ошибка ' + this.xhr.status + " " + this.xhr.statusText;
            } else {
                return this.xhr.response;
            }
        } catch(err) { // для отлова ошибок используем конструкцию try...catch вместо onerror
            return "Запрос не удался";
        }
    }

    async GetTaskById(url, id) {
        let urlGetById = url+'tasks/' + String(id);
        this.xhr.open('GET', urlGetById, false);
        try {
            this.xhr.send();
            if (this.xhr.status != 200) {
                return 'Ошибка ' + this.xhr.status + " " + this.xhr.statusText;
            } else {
                return this.xhr.response;
            }
        } catch(err) { // для отлова ошибок используем конструкцию try...catch вместо onerror
            return "Запрос не удался";
        }
    }
}