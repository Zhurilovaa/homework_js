// Класс контроллер(фасад)  
// Результаты всех запросов также вывести в консоль
// Сделать нужно все запросы которые есть в API

class ControllerService {
    // Конструктор для создания экземпляров класса
    constructor(typeOfService, urlServer) {
        this.typeOfService = typeOfService;
        (typeOfService === 'fetch') ?
            this.service = new FetchSrvice() :
            (typeOfService === 'XMLH') ?
                this.service = new XMLHService() : 
                console.log("Don't find service with this type!");

        this.url = urlServer;
        console.log(`urlServer = ${this.url}`);
        console.log("Всё работает!");
    }

    // Get запросы
    async GetAllTasks() {
        const dataGet = await this.service.GetAllTasks(this.url);
        console.log(`${this.typeOfService} : Get all task: `);
        console.log(dataGet);
    }

    async GetTaskById(id) {
        const dataGet = await this.service.GetTaskById(this.url, id);
        console.log(`${this.typeOfService} : Get task by id = ${id}: `);
        console.log(dataGet);
    }
}