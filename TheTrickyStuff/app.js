function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}  

Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}

Vehicle.prototype.honk = function() {
    if (this.isRunning) {
        return "beep";
    }
}

var vehicle1 = new Vehicle("lexus", "ct200h", 2017);
var vehicle2 = new Vehicle("ford", "focus", 2017);

vehicle1.turnOn();
vehicle2.turnOff();

console.log(vehicle1.honk());
console.log(vehicle2.honk());