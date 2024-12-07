/* 
    PROTOTYPE DESIGN PATTERN

    Nos permite copiar objetos existentes sin que el código dependa de sus clases

    PROS
        - Permite clonar objetos sin asociarlos a sus clases concretas.
        - Ahorra la creación de muchas subclases
        - Evita código de instanciación de objetos repetido.

    AGAINT
        - Implementar el método de clonación en todas la clases.
        - Referencias circulares con objetos compuestos por otros.

    When use it ?
        - Cuando se requiera o quiera reducir la cantidad de subclases.
        - Cuando quieras beneficiar la reusabilidad.


*/


class PrototypeInterface {

    createClone() {throw new Error(`This method can't be implemented`)}
}

class Airplane extends PrototypeInterface {

    constructor(prototype) {
        super();
        this.flightNumber = prototype?.flightNumber;
        this.agencyName = prototype?.agencyName;
        this.passengersNumber = prototype?.passengersNumber;
    }

    createClone() {
        return new Airplane(this);
    }
    
}

function testApp() {
    const airplane = new Airplane();

    airplane.flightNumber = '753';
    airplane.agencyName = 'Avianca';
    airplane.passengersNumber = 125;

    const airplaneClon = airplane.createClone();

    console.log(airplane);
    console.log(airplaneClon);
    
}

testApp();