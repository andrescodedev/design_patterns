/* 
    HTTP ADAPTER CHALLENGE
*/

//ENTITIES
class Car {
    static cars = [];

    constructor(id, name, model, price) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.price = price;
    }
}

class MastodonCar extends Car {
    static mastodonCars = [];

    constructor(id, name, model, price) {
        super(id,name,model,price);
    }
}

class RhinoCar extends Car {
    static rhinoCars = [];

    constructor(id, name, model, price) {
        super(id, name, model, price);
    }
}


//SERVICES
class CarServiceInterface {
    getCars(){throw new Error(`This method can't be implemented`);}
    getCarsByType(carType){throw new Error(`This method can't be implemented`);}
    addCar(car){throw new Error(`This method can't be implemented`);}
    updateCar(car){throw new Error(`This method can't be implemented`);}
    deleteCar(carId){throw new Error(`This method can't be implemented`);}
}

class MastodonCarService extends CarServiceInterface {

    getCars() {
        console.log(Car.cars);
    }

    getCarsByType(carType) {
        MastodonCar.mastodonCars = Car.cars.filter(car => car instanceof carType);
        console.log(MastodonCar.mastodonCars);
    }

    addCar(car) {
        Car.cars.push(car);
    }

    updateCar(car) {
       console.log(`Mastodon car updated successfully`);
    }

    deleteCar(carId) {
        console.log(`Mastodon car deleted successfully`);
    }

}

class RhinoCarService extends CarServiceInterface {

    getCars() {
        console.log(Car.cars);
    }

    addCar(car) {
        Car.cars.push(car);
    }

    updateCar(car) {
        console.log(`Rhino car updated successfully`);
    }

    deleteCar(carId) {
        console.log(`Rhino car deleted successfully`);
    }

}

class CarServiceInterfaceFactory {
    makeCarService() {
        throw new Error(`The interface method can't be implemented`);
    }
}

class MastodonCarServiceFactory extends CarServiceInterfaceFactory {
    makeCarService() {
        return new MastodonCarService();
    }
}

class RhinoCarServiceFactory extends CarServiceInterfaceFactory {
    makeCarService() {
        return new RhinoCarService();
    }
}

class InterfaceHttpAdapter {
    get() {throw new Error(`This method can't be implemented`)}
    getByType(carType) {throw new Error(`This method can't be implemented`)}
    post(json) {throw new Error(`This method can't be implemented`)}
    put(json) {throw new Error(`This method can't be implemented`)}
    delete(carId) {throw new Error(`This method can't be implemented`)}
}

class NestJs extends InterfaceHttpAdapter {
    carService;

    constructor(carServiceFactory) {
        super();
        this.carService = carServiceFactory.makeCarService();
    }
    
    get() {
        this.carService.getCars();
    }

    getByType(carType) {
        this.carService.getCarsByType(carType);
    }

    post(json) {
        this.carService.addCar(json);
    }

    put(json) {
        this.carService.updateCar(json);
    }

    delete(carId) {
        this.carService.deleteCar(carId);
    }
    
}

class ExpressJs extends InterfaceHttpAdapter {
    carService;

    constructor(carServiceFactory) {
        super();
        this.carService = carServiceFactory.makeCarService();
    }
    
    get() {
        this.carService.getCars();
    }

    post(json) {
        this.carService.addCar(json);
    }

    put(json) {
        this.carService.updateCar(json);
    }

    delete(carId) {
        this.carService.deleteCar(carId);
    }
}

class InterfaceHttpAdapterFactory {
    useHttpAdapter(carServiceFactory) {throw new Error(`This method can't be implemented`)}
}

class NestJsFactory extends InterfaceHttpAdapterFactory {
    useHttpAdapter(carServiceFactory) {
        return new NestJs(carServiceFactory);
    }
}

class ExpressJsFactory extends InterfaceHttpAdapterFactory {
    useHttpAdapter(carServiceFactory) {
        return new ExpressJs(carServiceFactory);
    }
}

function testNestJsAdapter() {
    const car1 = new MastodonCar('1','mastodon X','2016',35000000);
    const car2 = new MastodonCar('2','mastodon L','2020',45000000);
    const car3 = new RhinoCar('50','Rhino L','2020',85000000);
    const car4 = new RhinoCar('51','Rhino M','2020',85000000);
    const car5 = new RhinoCar('52','Rhino P','2022',95000000);

    const nestJsFactory = new NestJsFactory(); 
    const nestJsAdapter1= nestJsFactory.useHttpAdapter(new MastodonCarServiceFactory());
    const nestJsAdapter2= nestJsFactory.useHttpAdapter(new RhinoCarServiceFactory());

    nestJsAdapter1.post(car1);
    nestJsAdapter1.post(car2);
    nestJsAdapter2.post(car3);
    nestJsAdapter2.post(car4);
    nestJsAdapter2.post(car5);

    nestJsAdapter1.get();
    nestJsAdapter1.getByType(RhinoCar);
}

function testExpressJsAdapter() {
    const car6 = new MastodonCar('3','Mastodon Q','2024',125000000);

    const expressJsFactory = new ExpressJsFactory();
    const expressJsAdapter = expressJsFactory.useHttpAdapter(new MastodonCarServiceFactory());

    expressJsAdapter.post(car6);
    expressJsAdapter.get();
}

testNestJsAdapter();
//testExpressJsAdapter();