/* 
    PROTOTYPE DESIGN PATTERN FOR GET VERSIONS AN OBJECT
*/

class AirplaneVersionsInterface {

    flightNumberConfiguration() {throw new Error(`This method can't be implemented`)}
    agencyNameConfiguration() {throw new Error(`This method can't be implemented`)}
    passengersNumberConfiguration() {throw new Error(`This method can't be implemented`)}
}

class Airplane extends AirplaneVersionsInterface {

    flightNumberConfiguration(flightNumber) {
        const flightNumberConfiguration = new Airplane();
        flightNumberConfiguration.flightNumber = flightNumber;

        return flightNumberConfiguration;
    }

    agencyNameConfiguration(agencyName) {
        const agencyNameConfiguration = new Airplane();
        agencyNameConfiguration.agencyName = agencyName;

        return agencyNameConfiguration;
    }

    passengersNumberConfiguration(passengersNumber) {
        const passengersNumberConfiguration = new Airplane();
        passengersNumberConfiguration.passengersNumber = passengersNumber;

        return passengersNumberConfiguration;
    }
    
}

function testApp() {
    const airplane = new Airplane();

    const flightNumberConfiguration = airplane.flightNumberConfiguration('789');
    const agencyNameConfiguration = airplane.agencyNameConfiguration('Avianca');
    const passengersNumberConfiguration = airplane.passengersNumberConfiguration(165);

    console.log(flightNumberConfiguration);
    console.log(agencyNameConfiguration);
    console.log(passengersNumberConfiguration);
    
}

testApp();