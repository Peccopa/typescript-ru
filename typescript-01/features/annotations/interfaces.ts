interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const cola2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `Sugar: ${this.sugar}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(cola2);
