/* 
    PROTOTYPE DESIGN PATTERN

    Nos permite copiar objetos existentes sin que el código dependa de sus clases


*/

class PrototypeInterface {

    createClone() {throw new Error(`This method can't be implemented`)}
}

class Airplane extends PrototypeInterface {

    createClone() {
        console.log(`Creating clone`);
    }

    createClone(flightNumber) {
        console.log(`The flight number is ${flightNumber}`);
    }
    
}

function testApp() {
    const airplane = new Airplane();

    airplane.createClone();
}

testApp();