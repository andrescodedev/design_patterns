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

//ENTITIES - INTERFACES
class CPUInterface {
    getCpuPrice(){throw new Error(`This method can't be implemented`)}
}

class MemoryInterface {
    getMemoryPrice() {throw new Error(`This method can't be implemented`)}
}

class DisplayInterface {
    getDisplayPrice() {throw new Error(`This method can't be implemented`)}
}

class OperativeSystemInterface {
    getLicensePrice() {throw new Error(`This method can't be implemented`)}
}

class DeviceInterface {
    calculateTotalPrice() {throw new Error(`This method can't be implemented`)}
}

//ENTITIES - IMPLEMENTERS CLASSES
class CPULaptop extends CPUInterface {
    constructor(numberCores, brand, price) {
        this.numberCores = numberCores;
        this.brand = brand;
        this.price = price;
    }

    getCpuPrice() {
        return this.price;
    }
}

class CPUMobile extends CPUInterface {
    constructor(numberCores, brand, price) {
        this.numberCores = numberCores;
        this.brand = brand;
        this.price = price;
    }
    getCpuPrice() {
        return this.price;
    }
}

class MemoryLaptop extends MemoryInterface {
    constructor(capacityInGB, price) {
        this.capacityInGB = capacityInGB;
        this.price = price;
    }

    getMemoryPrice() {
        return this.price;
    }
}

class MemoryMobile extends MemoryInterface {
    constructor(capacityInGB, price) {
        this.capacityInGB = capacityInGB;
        this.price = price;
    }

    getMemoryPrice() {
        return this.price;
    }
}

class DisplayLaptop extends DisplayInterface {
    constructor(numberInches, price) {
        this.numberInches = numberInches;
        this.price = price;
    }

    getDisplayPrice() {
        return this.price;
    }
}

class DisplayPhone extends DisplayInterface {
    constructor(numberInches, price) {
        this.numberInches = numberInches;
        this.price = price;
    }

    getDisplayPrice() {
        return this.price;
    }
}

class DisplayTablet extends DisplayInterface {
    constructor(numberInches, price) {
        this.numberInches = numberInches;
        this.price = price;
    }

    getDisplayPrice() {
        return this.price;
    }
}

class OperativeSystemLaptop extends OperativeSystemInterface {
    constructor(operativeSystem) {
        this.operativeSystem = operativeSystem;
    }
    
    getLicensePrice() {
        return this.operativeSystem.licensePrice;
    }
}

class OperativeSystemMobile extends OperativeSystemInterface {
    constructor(operativeSystem) {
        this.operativeSystem = operativeSystem;
    }
    
    getLicensePrice() {
        return this.operativeSystem.licensePrice;
    }
}

class WindowsOS {
    constructor(version, licensePrice) {
        this.version = version;
        this.licensePrice = licensePrice;
    }

    getLicensePrice() {
        return this.getLicensePrice;
    }

}

class AndroidOS {
    constructor(version) {
        this.version = version;
        this.licensePrice = 0;
    }

    getLicensePrice() {
        return this.licensePrice;
    }
}

class Laptop extends DeviceInterface {
    constructor(cpuPrice, memoryPrice, displayPrice, operativeSystemPrice) {
        this.cpuPrice = cpuPrice;
        this.memoryPrice = memoryPrice;
        this.displayPrice = displayPrice;
        this.operativeSystemPrice = operativeSystemPrice;
        this.price = calculateTotalPrice();
    }

    calculateTotalPrice() {
        return this.cpuPrice+this.memoryPrice+this.displayPrice+this.operativeSystemPrice;
    }

}

class Phone extends DeviceInterface {
    constructor(cpuPrice, memoryPrice, displayPrice, operativeSystemPrice) {
        this.cpuPrice = cpuPrice;
        this.memoryPrice = memoryPrice;
        this.displayPrice = displayPrice;
        this.operativeSystemPrice = operativeSystemPrice;
        this.price = calculateTotalPrice();
    }

    calculateTotalPrice() {
        return this.cpuPrice+this.memoryPrice+this.displayPrice+this.operativeSystemPrice;
    }
}

class Tablet extends DeviceInterface {
    constructor(cpuPrice, memoryPrice, displayPrice, operativeSystemPrice) {
        this.cpuPrice = cpuPrice;
        this.memoryPrice = memoryPrice;
        this.displayPrice = displayPrice;
        this.operativeSystemPrice = operativeSystemPrice;
        this.price = calculateTotalPrice();
    }

    calculateTotalPrice() {
        return this.cpuPrice+this.memoryPrice+this.displayPrice+this.operativeSystemPrice;
    }
}

// ABSTRACT FACTORIES
class LaptopAbstractFactory {
    createCPULaptopInstance() {throw new Error(`this methods can't be implemented`)}
    createMemoryLaptopInstance() {throw new Error(`this methods can't be implemented`)}
    createDisplayLaptopInstance() {throw new Error(`this methods can't be implemented`)}
    createOperativeSystemLaptopInstance() {throw new Error(`this methods can't be implemented`)}
}

class PhoneAbstractFactory {
    createCPUMobileInstance() {throw new Error(`this methods can't be implemented`)}
    createMemoryMobileInstance() {throw new Error(`this methods can't be implemented`)}
    createDisplayPhoneInstance() {throw new Error(`this methods can't be implemented`)}
    createOperativeSystemMobileInstance() {throw new Error(`this methods can't be implemented`)}
}

class TabletAbstractFactory {
    createCPUMobileInstance() {throw new Error(`this methods can't be implemented`)}
    createMemoryMobileInstance() {throw new Error(`this methods can't be implemented`)}
    createDisplayTabletInstance() {throw new Error(`this methods can't be implemented`)}
    createOperativeSystemMobileInstance() {throw new Error(`this methods can't be implemented`)}
}

// FACTORIES - CLASSES THAT BUILD OBJECTS OF ANOTHER CLASSES AND IMPLEMENTERS THE ABSTRACT FACTORIES BEHAVIORS
class LaptopFactory extends LaptopAbstractFactory {
    createCPULaptopInstance(numberCores, brand, price) {
        return new CPULaptop(numberCores, brand, price);
    }

    createMemoryLaptopInstance(capacityInGB, price) {
        return new MemoryLaptop(capacityInGB, price);
    }

    createDisplayLaptopInstance(numberInches, price) {
        return new DisplayLaptop(numberInches, price);
    }

    createOperativeSystemLaptopInstance(operativeSystem) {
        return new OperativeSystemLaptop(operativeSystem);
    }
}

class PhoneFactory extends PhoneAbstractFactory {
    createCPUMobileInstance(numberCores, brand, price) {
        return new CPUMobile(numberCores, brand, price);
    }

    createMemoryMobileInstance(capacityInGB, price) {
        return new MemoryMobile(capacityInGB, price);
    }

    createDisplayPhoneInstance(numberInches,price) {
        return new DisplayPhone(numberInches,price);
    }

    createOperativeSystemMobileInstance(operativeSystem) {
        return new OperativeSystemMobile(operativeSystem);
    }
}

class TabletFactory extends TabletAbstractFactory {

    createCPUMobileInstance(numberCores, brand, price) {
        return new CPUMobile(numberCores, brand, price);
    }

    createMemoryMobileInstance(capacityInGB, price) {
        return new MemoryMobile(capacityInGB, price);
    }

    createDisplayTabletInstance(numberInches,price) {
        return new DisplayTablet(numberInches,price);
    }

    createOperativeSystemMobileInstance(operativeSystem) {
        return new OperativeSystemMobile(operativeSystem);
    }
}




