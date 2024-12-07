/* 
    PROTOTYPE DESIGN PATTERN

    Nos permite copiar objetos existentes sin que el código dependa de sus clases


*/

class PrototypeInterface {

    createClone() {throw new Error(`This method can't be implemented`)}
}

class Airplane extends PrototypeInterface {

    flightNumber;
    agencyName;
    passengersNumber;

    /*createClone() {
        return new Airplane(this);
    }*/

    createClonA() {}
    createClonB() {}

    createCloneC(passengersNumber) {
        this.passengersNumber = passengersNumber;
        return new Airplane(this);
    }
    
}

function testApp() {
    const airplane = new Airplane();

    //airplane.flightNumber = '753';
    //airplane.agencyName = 'Avianca';

    //const airplaneClon = airplane.createClone();
    const clonC = airplane.createCloneC(150);

    //console.log(airplane);
    //console.log(airplaneClon);
    console.log(clonC);

    
}

testApp();