/* 
    BUILDER DESIGN PATTERN

    El patrón de diseño Builder, nos permite dividir la creación de un objetos en pasos. Utilizando el mismo
    proceso de construción, podemos crear diferentes representaciones del mismo objeto.
*/

// BASE CLASS OR INTERFACE
class BuilderInterface {
    setSeats(seatsNumber) {
        throw new Error(`This method can't be implemented`);
    }

    setEngine(engine) {
        throw new Error(`This method can't be implemented`);
    }

    setGPS() {
        throw new Error(`This method can't be implemented`);
    }

    reset() {
        throw new Error(`This method can't be implemented`);
    }
}

class CarBuilder extends BuilderInterface {

    constructor() {
        super();
        this.reset();
    }

    setSeats(seatsNumber) {
        // implementing code
        this.car.seatsNumber = seatsNumber;
        return this;
    }

    setEngine(engine) {
        // implemeting code
        this.car.engine = engine;
        return this;
    }

    setGPS(gps) {
        // implemeting code
        this.car.gps = gps;
        return this;
    }

    reset() {
        // implemeting code
        this.car = new Car();
    }

    getCar() {
        const result = this.car;
        this.reset();
        return result;
    }
}

class CarManualBuilder extends BuilderInterface {
    constructor() {
        super();
        this.reset();
    }

    setSeats(seatsNumber) {
        // implementing code
        this.carManual.seatsNumber = seatsNumber;
        return this;
    }

    setEngine(engine) {
        // implemeting code
        this.carManual.engine = engine;
        return this;
    }

    setGPS(gps) {
        // implemeting code
        this.carManual.gps = gps;
        return this;
    }

    reset() {
        // implemeting code
        this.carManual = new CarManual();
    }

    getCarManual() {
        const result = this.carManual;
        this.reset();
        return result;
    }
}

class Car {
    _seatsNumber;
    _engine;
    _gps;

    get seatsNumber() {
        return this._seatsNumber;
    }

    get engine() {
        return this._engine;
    }

    get gps() {
        return this._gps;
    }

    set seatsNumber(seatsNumber) {
        this._seatsNumber = seatsNumber;
    }

    set engine(engine) {
        this._engine = engine;
    }

    set gps(gps) {
        this._gps = gps;
    }
    
}

class CarManual {
    _seatsNumber;
    _engine;
    _gps;

    get seatsNumber() {
        return this._seatsNumber;
    }

    get engine() {
        return this._engine;
    }

    get gps() {
        return this._gps;
    }

    set seatsNumber(seatsNumber) {
        this._seatsNumber = seatsNumber;
    }

    set engine(engine) {
        this._engine = engine;
    }

    set gps(gps) {
        this._gps = gps;
    }
}

class Director {
    
    buildCar(builder) {
        builder.reset();
        builder.seatsNumber(3);
        builder.setEngine('Sports Engine');
        builder.setGPS('GPS Location');
    }

    buildCarManual(builder) {
        builder.reset();
        builder.seatsNumber(3);
        builder.setEngine('Sports Engine');
        builder.setGPS('GPS Location');
    }
}

/*class testApp() {

}*/