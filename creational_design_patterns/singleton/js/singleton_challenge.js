class Product {
    id;
    name;
    cost;

    constructor(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    /*get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get cost() {
        return this.#cost;
    }*/
}


class ShoppingCar {
    #products = [];

    static #shoppingCar = undefined;

    static createShoppingCar() {
        if(!ShoppingCar.#shoppingCar) {
            ShoppingCar.#shoppingCar = new ShoppingCar();
        }

        return ShoppingCar.#shoppingCar;
    }

    addProduct(product) {
        this.#products.push(product);
    }

    deleteById(id) {
        this.#products = this.#products.filter(product => product.id != id);
    }

    cancelShoppingCar() {
        this.#products = [];
    }

    get shoppingCar() {
        return ShoppingCar.#shoppingCar;
    }

    get products() {
        return this.#products;
    }
}

function testShoppingCar() {
    const product1 = new Product('1','guayos',135000);
    const product2 = new Product('2','canilleras',50000);
    const product3 = new Product('3','guantes',120000);

    const shoppingCar = ShoppingCar.createShoppingCar();
    shoppingCar.addProduct(product1);
    shoppingCar.addProduct(product2);
    shoppingCar.addProduct(product3);
    console.log(shoppingCar.products);
    
    const shoppingCar2 = ShoppingCar.createShoppingCar();
    const product50 = new Product('50','trapeador',25500);
    const product51 = new Product('51','escoba',25000);
    const product52 = new Product('52','recojedor',15000);
    shoppingCar2.addProduct(product50);
    shoppingCar2.addProduct(product51);
    shoppingCar2.addProduct(product52);
    console.log(shoppingCar2.products);

    shoppingCar2.cancelShoppingCar();
    console.log(shoppingCar2.products);
}

testShoppingCar();