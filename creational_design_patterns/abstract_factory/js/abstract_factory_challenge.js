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

class AssembledLaptopInterface {
    getAssembledLaptopBrand() { throw new Error(`This method can't be implemented`) }
    getAssembledLaptopCPU() { throw new Error(`This method can't be implemented`) }
    getAssembledLaptopMemory() { throw new Error(`This method can't be implemented`) }
    getAssembledLaptopDisplay() { throw new Error(`This method can't be implemented`) }
    getAssembledLaptopOperativeSystem() { throw new Error(`This method can't be implemented`) }
    getAssembledLaptopBasePrice() { throw new Error(`This method can't be implemented`) }
    getAssembledLaptopSalePrice() { throw new Error(`This method can't be implemented`) }
}

//ENTITIES - IMPLEMENTERS CLASSES
class IntelCPU extends CPUInterface {

    constructor(serie, brand, application, price) {
        this.serie = serie;
        this.brand = brand;
        this.application = application;
        this.price = price;
    }

    getCPUSerie() {
        return this.serie;
    }

    getCPUBrand() {
        return this.brand;
    }

    getCPUApplication() {
        return this.application;
    }

    getCPUPrice() {
        return this.price;
    }
}

class SODimmMemory extends MemoryInterface {
    constructor(brand, capacityInGB, application, price) {
        this.brand = brand;
        this.capacityInGB = capacityInGB;
        this.application = application;
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

class LCDDisplay extends DisplayInterface {
    constructor(brand, inches, application, price) {
        this.brand = brand;
        this.inches = inches;
        this.application = application;
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

class WindowsOperativeSystem extends OperativeSystemInterface {
    constructor(brand, version, application, price) {
        this.brand = brand;
        this.version = version;
        this.application = application;
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

class AsusLaptop extends AssembledLaptopInterface {
    constructor(brand, cpu, memory, display, operativeSystem, basePrice) {
        this.brand = brand;
        this.cpu = cpu;
        this.memory = memory;
        this.display = display;
        this.operativeSystem = operativeSystem;
        this.basePrice = basePrice;
        this.salePrice = this.getAssembledLaptopSalePrice(new PriceCalculateServiceFactory());
    }

    getAssembledLaptopBrand() {
        return this.brand;
    }

    getAssembledLaptopCPU() {
        return this.cpu;
    }

    getAssembledLaptopMemory() {
        return this.memory;
    }

    getAssembledLaptopDisplay() {
        return this.display;
    }

    getAssembledLaptopOperativeSystem() {
        return this.operativeSystem;
    }

    getAssembledLaptopBasePrice() {
        return this.basePrice;
    }

    getAssembledLaptopSalePrice(priceCalculateServiceFactory) {
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

// ENTITIES ABSTRACT FACTORY

// ENTITIES FACTORIES

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




