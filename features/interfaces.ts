const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

// long annotation
const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
    console.log(vehicle);
};

interface Vehicle {
    name: string,
    year: number,
    broken: boolean,
    summary: () => string;
};

const newCivic: Vehicle = {
    name: 'civic',
    year: 2020,
    broken: false,
    summary(){
        return this.name;
    }
}

const printVehicleInterface = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);
printVehicleInterface(newCivic);

interface Reportable {
    summary: () => string;
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

// printSummary(vehicle); // error
printSummary(newCivic);