/* 
    ABSTRACT FACTORY

    Patrón de diseño que nos provee de una estrategia para encapsular múltiples fabricas de diferentes
    productos bajo una misma familia sin especificar clases concretas.

    Qué problema resuelve?
        1. Problemas de reusablidad.
        2. Problemas de extensibilidad.
        3. Problemas de fuerte acoplamiento.

    Como implementarlo?
        1. Declarar clases base/interfaces por cada uno de los productos en el catálogo(Mastodon, Rhino).
        2. Implementar clases concretas de los productos por cada una de las familias de versiones(sedan,hatchback).
        3. Declarar la clase base/interfaz abstract factory, en la cual se deben declarar métodos de creación
           por cada uno de los productos en el catálogo.
        4. Crear clases factory concretas por cada una de las familias de versiones que implementen los
           métodos de creación.

    PROS
        - Evitamos un acoplamiento alto entre los elementos creadores y los productos.}
        - Los productos retornados por las fábricas son intercambiables.
        - La creación de los productos sucede en un único punto.
        - Agregar nuevos productos no requiere modificar el código existente, lo extiende.

    CONTRA
        - Demasiado código genérico, nueva versión, nuevos productos, nuevo método de creación.
        - Si los productos base agregan algún elemento, todos los productos concretos deben de implementar el cambio.
        - Depende de que exista familia de productos.

    Cuando usarlo?
        - Úsalo cuando tengas variantes de los productos base, que compartan similitudes y puedan ser agrupados.
        - Cuando necesitamos que los productos nuevos se integren con los existentes.
*/

//STEP 1 - INTERFACES
class CarInterface {
    useGps() {throw new Error(`This method can't be implemented`)}
}

class MastodonCarInterface extends CarInterface {
    useGps() {throw new Error(`This method can't be implemented`)}
    turnOnScreens() {throw new Error(`This method can't be implemented`)}
}

class RhinoCarInterface extends CarInterface {
    useGps() {throw new Error(`This method can't be implemented`)}
    turnOnRgbLights() {throw new Error(`This method can't be implemented`)}
}

//STEP 2 - CONCRETE CLASSES THAT IMPLEMENT INTERFACES
class SedanMastodonCar extends MastodonCarInterface {
    useGps() {
        console.log(`Using gps on sedan mastodon car ...`);
    }

    turnOnScreens() {
        console.log(`Turning on sedan tactile screens ...`);
    }
}

class HatchbackMastodonCar extends MastodonCarInterface {
    useGps() {
        console.log(`Using gps on hatchback mastodon car ...`);
    }

    turnOnScreens() {
        console.log(`Turning on hatchback tactile screens ...`);
    }
}

class SedanRhinoCar extends RhinoCarInterface {
    useGps() {
        console.log(`Using gps on sedan rhino car ...`);
    }

    turnOnRgbLights() {
        console.log(`Turning on sedan rgb lights ...`);
    }
}

class HatchbackRhinoCar extends RhinoCarInterface {
    useGps() {
        console.log(`Using gps on hatchback rhino car ...`);
    }

    turnOnRgbLights() {
        console.log(`Turning on hatchback rgb lights ...`);
    }
}

//STEP 3 - ABSTRACT FACTORY CLASS THAT CONTAINS ABSTRACT CREATOR METHODS
class CarAbstractFactory {
    makeMastodonCar() {throw new Error(`This method can't be implemented`)}
    makeRhinoCar() {throw new Error(`This method can't be implemented`)}
}

//STEP 4 - CONCRETE FACTORY CLASSES THAT IMPLEMENT ABSTRACT FACTORY CLASS METHODS
class SedanCarFactory extends CarAbstractFactory {
    makeMastodonCar() {
        return new SedanMastodonCar();
    }

    makeRhinoCar() {
        return new SedanRhinoCar();
    }
}

class HatchbackCarFactory extends CarAbstractFactory {
    makeMastodonCar() {
        return new HatchbackMastodonCar();
    }

    makeRhinoCar() {
        return new HatchbackRhinoCar();
    }
}

//TESTING
function testCarApp(factory) {
    const mastodonCar = factory.makeMastodonCar();
    const rhinoCar = factory.makeRhinoCar();

    mastodonCar.useGps();
    rhinoCar.turnOnRgbLights();
}

testCarApp(new SedanCarFactory());



