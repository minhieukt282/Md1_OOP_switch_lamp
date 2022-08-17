class ElectricLamp {
    status;

    constructor(status) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    setStatus(value) {
        this.status = value;
    }

    electricLamp() {
        if (this.getStatus())
            console.log("den Sang")
        else console.log("den Tat")
    }
}

class SwitchButton {
    status;

    constructor() {

    }

    switchOn() {
        return this.status = true;
    }

    switchOff() {
        return this.status = false;
    }
}

let lamp = new ElectricLamp(false);
let button = new SwitchButton();
for (let i = 0; i < 10; i++) {
    lamp.setStatus(button.switchOn())
    lamp.electricLamp()
    lamp.setStatus(button.switchOff())
    lamp.electricLamp()
}




