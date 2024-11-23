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
        this.#products = this.#products.map((product) => product.id != id);
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

    console.log(shoppingCar.products);
    shoppingCar.deleteById('2');
    console.log(shoppingCar.products);

}

testShoppingCar();