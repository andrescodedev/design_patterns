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


//UTILS CLASSES
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

class GPSInterface {
    getGPSPrice() {throw new Error(`This method can't be implemented`)}
    getGPSBrand() {throw new Error(`This method can't be implemented`)}
    getGPSSuport() {throw new Error(`This method can't be implemented`)}
    getGPSSetting() {throw new Error(`This method can't be implemented`)}
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

class TabletCPU extends CPUInterface {

    constructor(serie, brand, coresNumber, price) {
        super();
        this.serie = serie;
        this.brand = brand;
        this.coresNumber = coresNumber;
        this.application = 'Tablet';
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

class TabletSODimmMemory extends MemoryInterface {
    constructor(brand, capacityInGB, price) {
        super();
        this.brand = brand;
        this.capacityInGB = capacityInGB;
        this.application = 'Tablet';
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

class TabletLCDDisplay extends DisplayInterface {
    constructor(brand, inches, price) {
        super();
        this.brand = brand;
        this.inches = inches;
        this.application = 'Tablet';
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

class TabletOperativeSystem extends OperativeSystemInterface {
    constructor(brand, version, price) {
        super();
        this.brand = brand;
        this.version = version;
        this.application = 'Tablet';
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

class GPSLocation extends GPSInterface {
    constructor(brand, hasSupport, canSettings, price) {
        super();
        this.brand = brand;
        this.hasSupport = hasSupport;
        this.canSettings = canSettings;
        this.price = price;
    }

    getGPSBrand() {
        return this.brand;
    }

    getGPSSuport() {
        return this.hasSupport;
    }

    getGPSSetting() {
        return this.canSettings;
    }

    getGPSPrice() {
        return this.price
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
        basePrice,
        gpsList
    ) {
        super();
        this.brand = brand;
        this.cpu = phoneCPU;
        this.memory = phoneMemory;
        this.display = phoneDisplay;
        this.operativeSystem = phoneOperativeSystem;
        this.basePrice = basePrice;
        this.gpsList = gpsList;
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
        const priceCalculateService = priceCalculateServiceFactory.createPriceCalculateServiceInstance();

        let gpsPrices = priceCalculateService.calculateGPSPrices(this.gpsList);


        let prices = [
            this.cpu.price,
            this.memory.price,
            this.display.price,
            this.operativeSystem.price,
            this.basePrice,
            gpsPrices
        ];

        
        return priceCalculateService.calculatePhonePrice(prices);
    }
}

class Tablet extends AssembledDeviceInterface {
    constructor(
        brand,
        tabletCPU,
        tabletMemory,
        tabletDisplay,
        tabletOperativeSystem,
        basePrice,
        gpsList
    ) {
        super();
        this.brand = brand;
        this.cpu = tabletCPU;
        this.memory = tabletMemory;
        this.display = tabletDisplay;
        this.operativeSystem = tabletOperativeSystem;
        this.basePrice = basePrice;
        this.gpsList = gpsList;
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
        const priceCalculateService = priceCalculateServiceFactory.createPriceCalculateServiceInstance();
        let gpsPrices = priceCalculateService.calculateGPSPrices(this.gpsList);


        let prices = [
            this.cpu.price,
            this.memory.price,
            this.display.price,
            this.operativeSystem.price,
            this.basePrice,
            gpsPrices
        ];

        
        return priceCalculateService.calculateTabletPrice(prices);
    }
}

// ENTITIES ABSTRACT FACTORY
class DeviceAbstractFactory {
    createCPUInstance() { throw new Error(`This method can't be implemented`) }
    createSODimmMemoryInstance() { throw new Error(`This method can't be implemented`) }
    createLCDDisplayInstance() { throw new Error(`This method can't be implemented`) }
    createOperativeSystemInstance() { throw new Error(`This method can't be implemented`) }
    createDeviceInstance() { throw new Error(`This method can't be implemented`) }
}

class MobileAbstractFactory {
    createCPUInstance() { throw new Error(`This method can't be implemented`) }
    createSODimmMemoryInstance() { throw new Error(`This method can't be implemented`) }
    createLCDDisplayInstance() { throw new Error(`This method can't be implemented`) }
    createOperativeSystemInstance() { throw new Error(`This method can't be implemented`) }
    createDeviceInstance() { throw new Error(`This method can't be implemented`) }
    createGPSLocationInstance() {throw new Error(`This method can't be implemented`)}
}

// ENTITIES FACTORIES
class LaptopFactory extends DeviceAbstractFactory {
    createCPUInstance(serie, brand, coresNumber, price) {
        return new LaptopCPU(serie, brand, coresNumber, price);
    }

    createSODimmMemoryInstance(brand, capacityInGB, price) {
        return new LaptopSODimmMemory(brand, capacityInGB, price);
    }

    createLCDDisplayInstance(brand, inches, price) {
        return new LaptopLCDDisplay(brand, inches, price);
    }

    createOperativeSystemInstance(brand, version, price) {
        return new LaptopOperativeSystem(brand, version, price);
    }

    createDeviceInstance(brand, laptopCPU, laptopMemory, laptopDisplay, laptopOperativeSystem, basePrice) {
        return new Laptop(brand, laptopCPU, laptopMemory, laptopDisplay, laptopOperativeSystem, basePrice);
    }
}

class PhoneFactory extends MobileAbstractFactory {
    createCPUInstance(serie, brand, coresNumber, price) {
        return new PhoneCPU(serie, brand, coresNumber, price);
    }

    createSODimmMemoryInstance(brand, capacityInGB, price) {
        return new PhoneSODimmMemory(brand, capacityInGB, price);
    }

    createLCDDisplayInstance(brand, inches, price) {
        return new PhoneLCDDisplay(brand, inches, price);
    }

    createOperativeSystemInstance(brand, version, price) {
        return new PhoneOperativeSystem(brand, version, price);
    }

    createGPSLocationInstance(brand, hasSupport, canSettings, price) {
        return new GPSLocation(brand, hasSupport, canSettings, price);
    }

    createDeviceInstance(brand, phoneCPU, phoneMemory, phoneDisplay, phoneOperativeSystem, basePrice, gpsList) {
        return new Phone(brand, phoneCPU, phoneMemory, phoneDisplay, phoneOperativeSystem, basePrice, gpsList);
    }
}

class TabletFactory extends MobileAbstractFactory {
    createCPUInstance(serie, brand, coresNumber, price) {
        return new TabletCPU(serie, brand, coresNumber, price);
    }

    createSODimmMemoryInstance(brand, capacityInGB, price) {
        return new TabletSODimmMemory(brand, capacityInGB, price);
    }

    createLCDDisplayInstance(brand, inches, price) {
        return new TabletLCDDisplay(brand, inches, price);
    }

    createOperativeSystemInstance(brand, version, price) {
        return new TabletOperativeSystem(brand, version, price);
    }

    createGPSLocationInstance(brand, hasSupport, canSettings, price) {
        return new GPSLocation(brand, hasSupport, canSettings, price);
    }

    createDeviceInstance(brand, tabletCPU, tabletMemory, tabletDisplay, tabletOperativeSystem, basePrice, gpsList) {
        return new Tablet(brand, tabletCPU, tabletMemory, tabletDisplay, tabletOperativeSystem, basePrice, gpsList);
    }
}

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

    calculatePhonePrice(prices) {
        let totalPrice = 0;

        for (let price of prices) {
            totalPrice += price;
        }

        totalPrice = totalPrice + ((ConstProfitPercentage.phoneProfitPercentage / 100) * totalPrice);

        return totalPrice;
    }

    calculateTabletPrice(prices) {
        let totalPrice = 0;

        for (let price of prices) {
            totalPrice += price;
        }

        totalPrice = totalPrice + ((ConstProfitPercentage.tabletProfitPercentage / 100) * totalPrice);

        return totalPrice;
    }

    calculateGPSPrices(gpsList) {
        let gpsTotalPrice = 0;

        for(let gps of gpsList) {
            gpsTotalPrice += gps.price;
        }

        return gpsTotalPrice;
    }
}

// SERVICES FACTORY
class PriceCalculateServiceFactory {
    createPriceCalculateServiceInstance() {
        return new PriceCalculateService();
    }
}



// APP TESTING
function testPhoneAndTabletFactory(factory) {
    const cpu = factory.createCPUInstance('core i5','intel',2,120000);
    const memory = factory.createSODimmMemoryInstance('GEFORCE','8',75000);
    const display = factory.createLCDDisplayInstance('lcdp','21',95000);
    const operativeSystem = factory.createOperativeSystemInstance('Microsoft','windows 10',135000);
    const gpsLocation = factory.createGPSLocationInstance('Queclink', true, false, 135000);

    let gpsList = [gpsLocation];

    const device = factory.createDeviceInstance('ASUS',cpu,memory,display,operativeSystem,1200000,gpsList);

    console.log(device);
   
}

function testLaptopFactory(factory) {
    const cpu = factory.createCPUInstance('core i5','intel',2,120000);
    const memory = factory.createSODimmMemoryInstance('GEFORCE','8',75000);
    const display = factory.createLCDDisplayInstance('lcdp','21',95000);
    const operativeSystem = factory.createOperativeSystemInstance('Microsoft','windows 10',135000);

    const device = factory.createDeviceInstance('ASUS',cpu,memory,display,operativeSystem,1200000);

    console.log(device);
   
}

//testPhoneAndTabletFactory(new TabletFactory());
testLaptopFactory(new LaptopFactory());




