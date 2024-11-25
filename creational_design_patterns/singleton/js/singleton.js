/* 
    SINGLETON DESIGN PATTERN

    Patrón de diseño que nos permite asegurar que no se pueda crear más de una instancia de un objeto,
    con esto aseguramos un único punto global de acceso a la instancia.

    Qué problema resuelve?
        1.Asegurar el acceso a un recurso compartido en diferentes partes de la app.
        2.Asegurar que la modificación al recurso compartido se lleve a cabo en un solo punto de acceso.
    
    Cuando usarlo ?
        1.Cuando requieras un único punto de acceso a los recursos compartidos y que pueda ser usado
          por diversos clientes.
        2.Bibliotecas de manejo de estados.

    Como implementarlo ?
        1.Hacer privado el constructor de la clase, para evitar que sea usado al utilizar el keyword new.
        2.Crear un método estático que actúe de constructor y llame al constructor privado para crear
          un objeto.
        3.Crear una variable privada y estática que funcionará como cache, guardando el objeto creado por
          el constructor privado.

    Pros
        -Certeza de que solo existirá una sola instancia de una clase.
        -Un solo punto de acceso global a dicha instancia.
        -La instancia es inicializada solo cuando se requiere por primera vez.

    Contra
        -Vulnera el principio de responsabilidad única.
        -Incrementa su complejidad en ambientes de múltiple hilos de ejecución.
        -Dificulta las pruebas unitarias debido al uso de elementos estáticos.

    

*/

 class UserSingleton {

    static #uniqueInstance = undefined;

    constructor(name,lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    static createInstance(name, lastName) {
        if(!UserSingleton.#uniqueInstance) {
            UserSingleton.#uniqueInstance  = new UserSingleton(name,lastName);
        }
        
        return UserSingleton.#uniqueInstance;
    }

    static getInstance() {
        return UserSingleton.#uniqueInstance;
    }

 }

 const user1 = UserSingleton.createInstance('andrew','pirlo');
 const user2 = UserSingleton.createInstance('andrea','rooney');
 const user3 = UserSingleton.getInstance(); 
 

 console.log(user1 === user2);//true
 console.log(user1 === user3);//true
 console.log(user2 === user3);//true
 console.log(user1);
 console.log(user2);
 console.log(user3);
 
