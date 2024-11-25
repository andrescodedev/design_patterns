/* 
    HTTP ADAPTER CHALLENGE
*/

class InterfaceCar {
    getCars(){throw new Error(`This method can't be implemented`);}
    addCar(car){throw new Error(`This method can't be implemented`);}
    updateCar(car){throw new Error(`This method can't be implemented`);}
    deleteCar(carId){throw new Error(`This method can't be implemented`);}
}

class MastodonCar extends InterfaceCar {
    static mastodonCars = [];

    constructor(id, name, model, price) {
        super();
        this.id = id;
        this.name = name;
        this.model = model;
        this.price = price;
    }

    getCars() {
        return MastodonCar.mastodonCars;
    }

    addCar(car) {
        MastodonCar.mastodonCars.push(car);
    }

    updateCar(car) {
       console.log(`Mastodon car updated successfully`);
    }

    deleteCar(carId) {
        console.log(`Mastodon car deleted successfully`);
    }

}

class RhinoCar extends InterfaceCar {
    static rhinoCars = [];

    constructor(id, name, model, price) {
        super();
        this.id = id;
        this.name = name;
        this.model = model;
        this.price = price;
    }

    getCars() {
        return RhinoCar.rhinoCars;
    }

    addCar(car) {
        RhinoCar.rhinoCars.push(car);
    }

    updateCar(car) {
        console.log(`Rhino car updated successfully`);
    }

    deleteCar(carId) {
        console.log(`Rhino car deleted successfully`);
    }

}

class InterfaceCarFactory {
    makeCar() {
        throw new Error(`The interface method can't be implemented`);
    }
}

class MastodonCarFactory extends InterfaceCarFactory {
    makeCar(id, name, model, price) {
        //Work constructor method without parameters.
        return new MastodonCar(id, name, model, price);
    }
}

class RhinoCarFactory extends InterfaceCarFactory {
    makeCar(id, name, model, price) {
        return new RhinoCar(id, name, model, price);
    }
}

class InterfaceHttpAdapter {
    get(carFactory) {throw new Error(`This method can't be implemented`)}
    post(carFactory,json) {throw new Error(`This method can't be implemented`)}
    put(carFactory) {throw new Error(`This method can't be implemented`)}
    delete(carFactory) {throw new Error(`This method can't be implemented`)}
}

class NestJs extends InterfaceHttpAdapter {
    
    get(carFactory, json) {
        
    }

    
}