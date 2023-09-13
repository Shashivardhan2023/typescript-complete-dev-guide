var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};
// long annotation
var printVehicle = function (vehicle) {
    console.log(vehicle);
};
;
var newCivic = {
    name: 'civic',
    year: 2020,
    broken: false,
    summary: function () {
        return this.name;
    }
};
var printVehicleInterface = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
printVehicleInterface(newCivic);
var printSummary = function (item) {
    console.log(item.summary());
};
// printSummary(vehicle); // error
printSummary(newCivic);
