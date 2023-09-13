class Vehicle {
    constructor(public color: string) {}

    protected drive(): void {
        console.log('chugga chugga');
    }

    protected honk(): void {
        console.log('beep');
    }
};

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);
    }
    public drive(): void {
        console.log('vrooom');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);