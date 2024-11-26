/* 
    FACTORY DESIGN PATTERN

    - Patrón de diseño que nos provee de una interfaz para crear objetos basados
      en una superclase, brindando la posibilidad a las subclases creadoras que
      alteren el tipo de objeto a retornar en su proceso de fabricación.

    Qué problema resuelve?
        1. Problemas de reusablidad.
        2. Problemas de extensibilidad.
        3. Problemas de fuerte acoplamiento.

    Como utilizarlo?
        1. El patrón sugiere que en lugar de usar el operador new(), se invoque
           a un método fábrica que se encargue de la creación de los objetos.
        2. Éstos objetos son llamados productos.
        3. Internamente, el método fábrica seguira usando el operador new().
        4. Las superclases fábricas, estarán basadas en una clase/interfaz común,
           esto permite intercambiarlas según sea requerido.
        5. Los productos retornados por las fábricas deben estar basados en una
           clase base o interfaz.

    Como implementarlo?
        1. Creamos una interfaz base que definirá el comportamiento de sus clases implementadoras.
        2. Creamos las clases implementadoras de la interfaz base, cada una redefine su comportamiento.
        3. Creamos la interfaz factory que definirá el comportamiento de las clases factory.
        4. Creamos las clases factory, que se encargan de la creación de los objetos de las clases implementadoras
           de la interfaz base, a través de un metodo de fabricación.

    Pros
        - Evitamos un alto acoplamiento entre las clases factory y las clases (fabricadas) cuyos objetos 
          son fabricados por dichas clases factory.
        - La creación de objetos de las clases fabricadas suceden en un único punto.
        - Agregar nuevas clases fabricadas no requiere modificar el código existente.

    Contra
        - Demsadiado código genérico.
        - Muchas abstracciones.

    Cuándo usarlo?
        1. Cuando no sabes cuántas clases fabricadas diferentes habrá o puede llegar a haber.
        2. Cuando necesites desacoplar el uso de las clases fabricadas con su creación.
        3. Extender el funcionamiento de frameworks o  librerías.
*/

class InterfaceCar {

    showCost() {
        throw new Error(`The interface method can't be implemented`);
    }
}

class MastodonCar extends InterfaceCar {

    constructor(price) {
        super();
        this.price = price;
    }

    showCost() {
        console.log(`Mastodon car cost is $${this.price} cop`);
    }
}

class RhinoCar extends InterfaceCar {

    constructor(price) {
        super();
        this.price = price;
    }
    
    showCost() {
        console.log(`Rhino car cost is $${this.price} cop`);
    }
}

class InterfaceCarFactory {
    makeCar() {
        throw new Error(`The interface method can't be implemented`);
    }
}

class MastodonCarFactory extends InterfaceCarFactory {
    makeCar() {
        return new MastodonCar(60000000);
    }
}

class RhinoCarFactory extends InterfaceCarFactory {
    makeCar() {
        return new RhinoCar(85000000);
    }
}

function testFactory(factory) {
    const car = factory.makeCar();
    car.showCost();
}

testFactory(new MastodonCarFactory());