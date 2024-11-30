/* 
    DISEÑE UN SISTEMA PARA UN NEGOCIO DE VENTA DE PRODUCTOS TECNOLOÓGICOS
    QUE LE PERMITA AL ADMIN DEFINIR LAS PARTES Y SO PARA EL DISPOSITIVO Y CALCULE SU VALOR TOTAL.

    PARTES
        - CPU (cpuLaptop, cpuMobile)
        - MEMORY (memorylaptop, memorymobile)
        - DISPLAY(displaylaptop, displayphone, displaytablet)

    DISPOSITIVOS
        - PHONE
        - LAPTOP
        - TABLET

    SISTEMAS OPERATIVOS
        - ANDROID (phone, tablet)
        - WINDOWS (laptop, tablet )
*/


//UTILS
class ConstProfitPercentage {
    static laptopProfitPercentage = 0.6; // 60%
    static phoneProfitPercentage = 0.4; //40%
    static tabletProfitPercentage = 0.3; //30%
}

//ENTITIES INTERFACES
class CPUInterface {
    getCPUPrice() { throw new Error(`This method can't be implemented`) }
    getCPUSerie() { throw new Error(`This method can't be implemented`) }
    getCPUApplication() { throw new Error(`This method can't be implemented`) }
    getCPUBrand() { throw new Error(`This method can't be implemented`) }
    getCPUCoresNumber() { throw new Error(`This method can't be implemented`) }
}

class MemoryInterface {
    getMemoryPrice() { throw new Error(`This method can't be implemented`) }
    getMemoryCapacityInGb() { throw new Error(`This method can't be implemented`) }
    getMemoryApplication() { throw new Error(`This method can't be implemented`) }
    getMemoryBrand() { throw new Error(`This method can't be implemented`) }
}

class DisplayInterface {
    getDisplayPrice() { throw new Error(`This method can't be implemented`) }
    getDisplayInches() { throw new Error(`This method can't be implemented`) }
    getDisplayApplication() { throw new Error(`This method can't be implemented`) }
    getDisplayBrand() { throw new Error(`This method can't be implemented`) }
}

class OperativeSystemInterface {
    getOperativeSystemLicensePrice() { throw new Error(`This method can't be implemented`) }
    getOperativeSystemVersion() { throw new Error(`This method can't be implemented`) }
    getOperativeSystemApplication() { throw new Error(`This method can't be implemented`) }
    getOperativeSystemBrand() { throw new Error(`This method can't be implemented`) }
}

class AssembledDeviceInterface {
    getAssembledDeviceBrand() { throw new Error(`This method can't be implemented`) }
    getAssembledDeviceCPU() { throw new Error(`This method can't be implemented`) }
    getAssembledDeviceMemory() { throw new Error(`This method can't be implemented`) }
    getAssembledDeviceDisplay() { throw new Error(`This method can't be implemented`) }
    getAssembledDeviceOperativeSystem() { throw new Error(`This method can't be implemented`) }
    getAssembledDeviceBasePrice() { throw new Error(`This method can't be implemented`) }
    getAssembledDeviceSalePrice() { throw new Error(`This method can't be implemented`) }
}

//ENTITIES - IMPLEMENTERS CLASSES
class LaptopCPU extends CPUInterface {

    constructor(serie, brand, coresNumber, price) {
        super();
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

class PhoneCPU extends CPUInterface {

    constructor(serie, brand, coresNumber, price) {
        super();
        this.serie = serie;
        this.brand = brand;
        this.coresNumber = coresNumber;
        this.application = 'Phone';
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

class LaptopSODimmMemory extends MemoryInterface {
    constructor(brand, capacityInGB, price) {
        super();
        this.brand = brand;
        this.capacityInGB = capacityInGB;
        this.application = 'Laptop';
        this.price = price;
    }

    getMemoryBrand() {
        return this.brand;
    }

    getMemoryCapacityInGb() {
        return this.capacityInGB;
    }

    getMemoryApplication() {
        return this.application;
    }

    getMemoryPrice() {
        return this.price;
    }
}

class PhoneSODimmMemory extends MemoryInterface {
    constructor(brand, capacityInGB, price) {
        super();
        this.brand = brand;
        this.capacityInGB = capacityInGB;
        this.application = 'Phone';
        this.price = price;
    }

    getMemoryBrand() {
        return this.brand;
    }

    getMemoryCapacityInGb() {
        return this.capacityInGB;
    }

    getMemoryApplication() {
        return this.application;
    }

    getMemoryPrice() {
        return this.price;
    }
}

class LaptopLCDDisplay extends DisplayInterface {
    constructor(brand, inches, price) {
        super();
        this.brand = brand;
        this.inches = inches;
        this.application = 'Laptop';
        this.price = price;
    }

    getDisplayBrand() {
        return this.brand;
    }

    getDisplayInches() {
        return this.inches;
    }

    getDisplayApplication() {
        return this.application;
    }

    getDisplayPrice() {
        return this.price;
    }
}

class PhoneLCDDisplay extends DisplayInterface {
    constructor(brand, inches, price) {
        super();
        this.brand = brand;
        this.inches = inches;
        this.application = 'Phone';
        this.price = price;
    }

    getDisplayBrand() {
        return this.brand;
    }

    getDisplayInches() {
        return this.inches;
    }

    getDisplayApplication() {
        return this.application;
    }

    getDisplayPrice() {
        return this.price;
    }
}

class LaptopOperativeSystem extends OperativeSystemInterface {
    constructor(brand, version, price) {
        super();
        this.brand = brand;
        this.version = version;
        this.application = 'Laptop';
        this.price = price;
    }

    getOperativeSystemBrand() {
        return this.brand;
    }

    getOperativeSystemVersion() {
        return this.version;
    }

    getOperativeSystemApplication() {
        return this.application;
    }

    getOperativeSystemLicensePrice() {
        return this.price;
    }
}

class PhoneOperativeSystem extends OperativeSystemInterface {
    constructor(brand, version, price) {
        super();
        this.brand = brand;
        this.version = version;
        this.application = 'Phone';
        this.price = price;
    }

    getOperativeSystemBrand() {
        return this.brand;
    }

    getOperativeSystemVersion() {
        return this.version;
    }

    getOperativeSystemApplication() {
        return this.application;
    }

    getOperativeSystemLicensePrice() {
        return this.price;
    }
}

class Laptop extends AssembledDeviceInterface {
    constructor(
        brand,
        laptopCPU,
        laptopMemory,
        laptopDisplay,
        laptopOperativeSystem,
        basePrice
    ) {
        super();
        this.brand = brand;
        this.cpu = laptopCPU;
        this.memory = laptopMemory;
        this.display = laptopDisplay;
        this.operativeSystem = laptopOperativeSystem;
        this.basePrice = basePrice;
        this.salePrice = this.getAssembledDeviceSalePrice(new PriceCalculateServiceFactory());
    }

    getAssembledDeviceBrand() {
        return this.brand;
    }

    getAssembledDeviceCPU() {
        return this.cpu;
    }

    getAssembledDeviceMemory() {
        return this.memory;
    }

    getAssembledDeviceDisplay() {
        return this.display;
    }

    getAssembledDeviceOperativeSystem() {
        return this.operativeSystem;
    }

    getAssembledDeviceBasePrice() {
        return this.basePrice;
    }

    getAssembledDeviceSalePrice(priceCalculateServiceFactory) {
        let prices = [
            this.cpu.price,
            this.memory.price,
            this.display.price,
            this.operativeSystem.price,
            this.basePrice
        ];

        const priceCalculateService = priceCalculateServiceFactory.createPriceCalculateServiceInstance();
        return priceCalculateService.calculateLaptopPrice(prices);
    }
}

class Phone extends AssembledDeviceInterface {
    constructor(
        brand,
        phoneCPU,
        phoneMemory,
        phoneDisplay,
        phoneOperativeSystem,
        basePrice
    ) {
        super();
        this.brand = brand;
        this.cpu = phoneCPU;
        this.memory = phoneMemory;
        this.display = phoneDisplay;
        this.operativeSystem = phoneOperativeSystem;
        this.basePrice = basePrice;
        this.salePrice = this.getAssembledDeviceSalePrice(new PriceCalculateServiceFactory());
    }

    getAssembledDeviceBrand() {
        return this.brand;
    }

    getAssembledDeviceCPU() {
        return this.cpu;
    }

    getAssembledDeviceMemory() {
        return this.memory;
    }

    getAssembledDeviceDisplay() {
        return this.display;
    }

    getAssembledDeviceOperativeSystem() {
        return this.operativeSystem;
    }

    getAssembledDeviceBasePrice() {
        return this.basePrice;
    }

    getAssembledDeviceSalePrice(priceCalculateServiceFactory) {
        let prices = [
            this.cpu.price,
            this.memory.price,
            this.display.price,
            this.operativeSystem.price,
            this.basePrice
        ];

        const priceCalculateService = priceCalculateServiceFactory.createPriceCalculateServiceInstance();
        return priceCalculateService.calculatePhonePrice(prices);
    }
}

// ENTITIES ABSTRACT FACTORY
class LaptopAbstractFactory {
    createLaptopCPUInstance() { throw new Error(`This method can't be implemented`) }
    createLaptopSODimmMemoryInstance() { throw new Error(`This method can't be implemented`) }
    createLaptopLCDDisplayInstance() { throw new Error(`This method can't be implemented`) }
    createLaptopOperativeSystemInstance() { throw new Error(`This method can't be implemented`) }
    createLaptopInstance() { throw new Error(`This method can't be implemented`) }
}

class PhoneAbstractFactory {
    createPhoneCPUInstance() { throw new Error(`This method can't be implemented`) }
    createPhoneSODimmMemoryInstance() { throw new Error(`This method can't be implemented`) }
    createPhoneLCDDisplayInstance() { throw new Error(`This method can't be implemented`) }
    createPhoneOperativeSystemInstance() { throw new Error(`This method can't be implemented`) }
    createPhoneInstance() { throw new Error(`This method can't be implemented`) }
}

// ENTITIES FACTORIES
class LaptopFactory extends LaptopAbstractFactory {
    createLaptopCPUInstance(serie, brand, coresNumber, price) {
        return new LaptopCPU(serie, brand, coresNumber, price);
    }

    createLaptopSODimmMemoryInstance(brand, capacityInGB, price) {
        return new LaptopSODimmMemory(brand, capacityInGB, price);
    }

    createLaptopLCDDisplayInstance(brand, inches, price) {
        return new LaptopLCDDisplay(brand, inches, price);
    }

    createLaptopOperativeSystemInstance(brand, version, price) {
        return new LaptopOperativeSystem(brand, version, price);
    }

    createLaptopInstance(brand, laptopCPU, laptopMemory, laptopDisplay, laptopOperativeSystem, basePrice) {
        return new Laptop(brand, laptopCPU, laptopMemory, laptopDisplay, laptopOperativeSystem, basePrice);
    }
}

/*class PhoneFactory extends PhoneAbstractFactory {
    createGeneralCPUInstance(serie, brand, coresNumber, application, price) {
        return new GeneralCPU(serie, brand, coresNumber, application, price);
    }
}*/

//SERVICES INTERFACES

//SERVICES
class PriceCalculateService {

    calculateLaptopPrice(prices) {
        let totalPrice = 0;

        for (let price of prices) {
            totalPrice += price;
        }

        totalPrice = totalPrice + ((ConstProfitPercentage.laptopProfitPercentage / 100) * totalPrice);

        return totalPrice;
    }

    calculatePhonePrice(prices) { }

    calculateTabletPrice(prices) { }
}

// SERVICES FACTORY
class PriceCalculateServiceFactory {
    createPriceCalculateServiceInstance() {
        return new PriceCalculateService();
    }
}



// APP TESTING
function testApp() {
    const laptopFactory = new LaptopFactory();
    const cpu = laptopFactory.createLaptopCPUInstance('core i5','intel',2,120000);
    const memory = laptopFactory.createLaptopSODimmMemoryInstance('GEFORCE','8',75000);
    const display = laptopFactory.createLaptopLCDDisplayInstance('lcdp','21',95000);
    const operativeSystem = laptopFactory.createLaptopOperativeSystemInstance('Microsoft','windows 10',135000);

    const laptop = laptopFactory.createLaptopInstance('ASUS',cpu,memory,display,operativeSystem,1200000);

    console.log(laptop);
   
}

testApp();




