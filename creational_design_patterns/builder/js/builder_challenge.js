/* 
    BUILDER CHALLENGE
*/

// USE CASE PROBLEM
// HERE, WE HAVE THE COMPLEX OBJECT PROBLEM
/*class Laptop {

    // HERE, WE HAVE THE MICROSCOPIC CONSTRUCTOR PROBLEM
    constructor(cpu, memory, hardDisk, keyboard, screen, camera, microphone, battery, usbPorts, tactileMouse, hdmiPorts, earphonePort, sdPort, graphicCard, operativeSystem) {


    }
}*/

// THIS IS COMPLEX OBJECT PROBLEM
/*class Phone {
    // HERE, WE HAVE THE MICROSCOPIC CONSTRUCTOR PROBLEM
    constructor(cpu, memory, screen, camera, microphone, battery, earphonePort, gps, sensors, operativeSystem) {

    }
}*/

// THIS IS COMPLEX OBJECT PROBLEM
/*class Tablet {
    // HERE, WE HAVE THE MICROSCOPIC CONSTRUCTOR PROBLEM
    constructor(cpu, memory, screen, camera, microphone, battery, earphonePort, gps, sensors, operativeSystem) {

    }
}*/

//SOLUTION TO COMPLEX OBJECT PROBLEM AND MICROSCOPIC CONSTRUCTOR PROBLEM
class CPU {

    constructor(serie, brand, coresNumber, price) {
        this.serie = serie;
        this.brand = brand;
        this.coresNumber = coresNumber;
        this.application = 'Laptop';
        this.price = price;
    }

    getCPUSerie() {
        return this.serie;
    }

    getCPUBrand() {
        return this.brand;
    }

    getCPUCoresNumber() {
        return this.coresNumber;
    }

    getCPUApplication() {
        return this.application;
    }

    getCPUPrice() {
        return this.price;
    }
}

class LaptopCPU extends CPU {
    constructor(serie, brand, coresNumber, price) {
        super(serie, brand, coresNumber, price);
    }
}

class PhoneCPU extends CPU {
    constructor(serie, brand, coresNumber, price) {
        super(serie, brand, coresNumber, price);
    }
}

class TabletCPU extends CPU {
    constructor(serie, brand, coresNumber, price) {
        super(serie, brand, coresNumber, price);
    }
}

class Memory {

    constructor(brand, capacityInGB, price) {
        this.brand = brand;
        this.capacityInGB = capacityInGB;
        this.price = price;
    }

    getMemoryBrand() {
        return this.brand;
    }

    getMemoryCapacityInGB() {
        return this.capacityInGB;
    }

    getMemoryPrice() {
        return this.price;
    }
}

class RAMMemory extends Memory {

    constructor(brand, capacityInGB, price) {
        super(brand, capacityInGB, price);
        this.application = ['Laptop', 'Phone', 'Tablet'];
    }

    getMemoryApplication() {
        return this.application;
    }
}

class EMMCMemory extends Memory {

    constructor(brand, capacityInGB, price) {
        super(brand, capacityInGB, price);
        this.application = ['Phone', 'Tablet'];
    }

    getMemoryApplication() {
        return this.application;
    }
}

class Screen {

    constructor(brand, inches, type, price) {
        this.brand = brand;
        this.inches = inches;
        this.type = type;
        this.price = price;
    }

    getScreenBrand() {
        return this.brand;
    }

    getScreenInches() {
        return this.inches;
    }

    getScreenType() {
        return this.type;
    }

    getScreenPrice() {
        return this.price;
    }
}

class LaptopScreen extends Screen {

    constructor(brand, inches, type, price) {
        super(brand, inches, type, price);
        this.application = 'Laptop';
    }

    getScreenApplication() {
        return this.application;
    }
}

class PhoneScreen extends Screen {

    constructor(brand, inches, type, price) {
        super(brand, inches, type, price);
        this.application = 'Phone';
    }

    getScreenApplication() {
        return this.application;
    }
}

class TabletScreen extends Screen {

    constructor(brand, inches, type, price) {
        super(brand, inches, type, price);
        this.application = 'Tablet';
    }

    getScreenApplication() {
        return this.application;
    }
}

// FACTORY DESIGN PATTERN
// FACTORIES
class CPUFactory {

    fabricateLaptopCPU(serie, brand, coresNumber, price) {
        return new LaptopCPU(serie, brand, coresNumber, price);
    }

    fabricatePhoneCPU(serie, brand, coresNumber, price) {
        return new PhoneCPU(serie, brand, coresNumber, price);
    }

    fabricateTabletCPU(serie, brand, coresNumber, price) {
        return new TabletCPU(serie, brand, coresNumber, price);
    }

}

class MemoryFactory {

    fabricateRamMemory(brand, capacityInGB, price) {
        return new RAMMemory(brand, capacityInGB, price);
    }

    fabricateEMMCMemory(brand, capacityInGB, price) {
        return new EMMCMemory(brand, capacityInGB, price);
    }
}

class ScreenFactory {

    fabricateLaptopScreen(brand, inches, type, price) {
        return new LaptopScreen(brand, inches, type, price);
    }

    fabricatePhoneScreen(brand, inches, type, price) {
        return new PhoneScreen(brand, inches, type, price);
    }
    
    fabricateTabletScreen(brand, inches, type, price) {
        return new TabletScreen(brand, inches, type, price);
    }
}

// BUILDER DESIGN PATTERN
// PRODUCT CLASSES
class Laptop {
    
    set cpu(cpu) {
        this.cpu = cpu;
    }

    get cpu() {
        return this.cpu;
    }

    set memory(memory) {
        this.memory = memory;
    }

    get memory() {
        return this.memory;
    }

    set screen(screen) {
        this.screen = screen;
    }

    get screen() {
        return this.screen;
    }

}

class Phone {

    set cpu(cpu) {
        this.cpu = cpu;
    }

    get cpu() {
        return this.cpu;
    }

    set memory(memory) {
        this.memory = memory;
    }

    get memory() {
        return this.memory;
    }

    set screen(screen) {
        this.screen = screen;
    }

    get screen() {
        return this.screen;
    }
}

class Tablet {

    set cpu(cpu) {
        this.cpu = cpu;
    }

    get cpu() {
        return this.cpu;
    }

    set memory(memory) {
        this.memory = memory;
    }

    get memory() {
        return this.memory;
    }

    set screen(screen) {
        this.screen = screen;
    }

    get screen() {
        return this.screen;
    }
}


// BUILDERS INTERFACES
class LaptopBuilderInterface {

    reset() {throw new Error(`This method can't be implemented`)}

    setCPU(cpu) {throw new Error(`This method can't be implemented`)}

    setMemory(memory) {throw new Error(`This method can't be implemented`)}

    setScreen(screen) {throw new Error(`This method can't be implemented`)}

    getLaptop() {throw new Error(`This method can't be implemented`)}
}

class MobileBuilderInterface {

    reset() {throw new Error(`This method can't be implemented`)}

    setCPU(cpu) {throw new Error(`This method can't be implemented`)}

    setMemory(memory) {throw new Error(`This method can't be implemented`)}

    setScreen(screen) {throw new Error(`This method can't be implemented`)}

    getMobile() {throw new Error(`This method can't be implemented`)}
}

// BUILDERS CLASSES
class LaptopBuilder extends LaptopBuilderInterface {

    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.laptop = new Laptop();
    }

    setCPU(cpu) {
        this.laptop.cpu = cpu;
    }

    setMemory(memory) {
        this.laptop.memory = memory;
    }

    setScreen(screen) {
        this.laptop.screen = screen;
    }

    getLaptop() {
        const laptop = this.laptop;
        this.reset();
        return laptop;
    }
}

class PhoneBuilder extends MobileBuilderInterface {

    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.phone = new Phone();
    }

    setCPU(cpu) {
        this.phone.cpu = cpu;
    }

    setMemory(memory) {
        this.phone.memory = memory;
    }

    setScreen(screen) {
        this.phone.screen = screen;
    }

    getMobile() {
        const phone = this.phone;
        this.reset();
        return phone;
    }
}

class TabletBuilder extends MobileBuilderInterface {

    constructor() {
        super();
        this.reset();
    }

    reset() {
        this.tablet = new Tablet();
    }

    setCPU(cpu) {
        this.tablet.cpu = cpu;
    }

    setMemory(memory) {
        this.tablet.memory = memory;
    }

    setScreen(screen) {
        this.tablet.screen = screen;
    }

    getMobile() {
        const tablet = this.tablet;
        this.reset();
        return tablet;
    }
}

// DIRECTORS CLASSES
class DeviceDirector {

    setBuilder(builder) {
        this.builder = builder;
    }

    buildLaptop(components) {
        this.builder.setCPU(components.cpu);
        this.builder.setMemory(components.memory);
        this.builder.setScreen(components.screen);
    }

    buildPhone() {}

    buildTablet() {}
}

function getLaptopComponents() {
    const cpuFactory = new CPUFactory();
    const memoryFactory = new MemoryFactory();
    const screenFactory = new ScreenFactory();

    const cpu = cpuFactory.fabricateLaptopCPU('core i5','intel',4,152000);
    const memory = memoryFactory.fabricateRamMemory('SODimm','8',85000);
    const screen = screenFactory.fabricateLaptopScreen('lenovo','21','LCD',95000);


    return {
        cpu: cpu,
        memory:memory,
        screen:screen
    }
    
}

function createLaptop() {
    const laptopBuilder = new LaptopBuilder();
    const deviceDirector = new DeviceDirector();

    deviceDirector.setBuilder(laptopBuilder);
    deviceDirector.buildLaptop(getLaptopComponents());

    const laptop = laptopBuilder.getLaptop();
    console.log(laptop);

}

createLaptop();



