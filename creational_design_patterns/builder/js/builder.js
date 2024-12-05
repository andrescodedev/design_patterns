/* 
    BUILDER DESIGN PATTERN

    El patrón de diseño Builder, nos permite dividir la creación de un objetos en pasos. Utilizando el mismo
    proceso de construción, podemos crear diferentes tipos y representaciones de un objeto.

    What does it problem solve?
        1. Problemas de reusablidad.
        2. Problemas de extensibilidad.
        3. Problemas de fuerte acoplamiento.
        4. Problemas de constructor microscópico
        5. Problemas de objeto complejo
        6. Problemas de herencia compleja

    How does it implement?
        1. Crear una clase base / interfaz que define los pasos de construcción de producto que
           todos los tipos de objetos constructores tienen en común.
        2. Los constructores concretos ofrecen distintas implementaciones de los pasos de construcción.
           Los constructores concretos pueden crear productos que no siguen la interfaz común.
        3. Los productos son los objetos resultantes. Los productos construidos por distintos objetos
           constructores, no tienen que pertenecer a la misma jerarquía de clase o interfaz.
        4. La clase directora define el orden en el que se invocaran los pasos de construcción, por
           lo que puedes crear y reutilizar configuraciones específicas de los productos.
        5. 

    PROS
        - Construir objetos paso a paso.
        - Reutilizar el mismo proceso de construcción, para construir diferentes representaciones
          de productos.
        - Aislar las configuraciones de construcción en un solo lugar.
        - Nuevas configuraciones no requieren modificar las existentes.

    AGAINT
        - Demasiado código genérico, nuevo producto -> nuevo builder.
        - Mutación del objeto producto.

    When use it?
        - Cuando quieras evitar tener un constructos telescópico.
        - Cuando requieras que existan diferentes representaciones de algunos productos.
        - Cuando quieras tener control sobre el proceso de creación de un objeto.


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
        builder.setSeats(3);
        builder.setEngine('Sports Engine');
        builder.setGPS('GPS Location');
    }

    buildCarManual(builder) {
        builder.reset();
        builder.setSeats(3)
               .setEngine('Sports Engine')
               .setGPS('GPS Location');
    }
}

function testApp() {
    const director = new Director();
    const carBuilder = new CarBuilder();

    director.buildCar(carBuilder);
    const car = carBuilder.getCar();

    console.log(car);
}

testApp();

