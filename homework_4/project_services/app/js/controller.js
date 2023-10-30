// Класс контроллер(фасад)  
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
        console.log("Всё работает! Controller создан!");
    }

    // Get запросы
    async GetAllTasks() {
        const dataGetAll = await this.service.GetAllTasks(this.url);
        return dataGetAll;
    }

    async GetTaskById(id) {
        const dataGetById = await this.service.GetTaskById(this.url, id);
        return dataGetById;
    }
    
    // Post запрос
    async PostTask(newTask) {
        let dataPost = await this.service.PostTask(this.url, newTask);        
        return dataPost; 
    }

    // Patch запрос
    async PatchTask(idPatch, patchTask) {
        let dataPatch = await this.service.PatchTask(this.url, idPatch, patchTask);        
        return dataPatch; 
    }

    // Delete запрос
    async DeleteTask(idDelete) {
        let statusDelete = await this.service.DeleteTask(this.url, idDelete);        
        return statusDelete; 
    }
}