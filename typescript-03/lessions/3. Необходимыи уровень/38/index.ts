{
  function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
      msg.forEach((m) => console.log(m));
    } else if (isNumber(msg)) {
      console.log(msg);
    } else {
      console.log(msg);
    }
    console.log(msg);
  }

  printMsg(4);

  // function isNumber(n: string[] | number | boolean): n is number {
  // 	return typeof n === "number";
  // }
  function isNumber(n: unknown): n is number {
    return typeof n === 'number';
  }

  type Vehicle = Car | Ship | Airplane | SuperJet;

  interface Car {
    name: 'car';
    engine: string;
    wheels: {
      number: number;
      type: string;
    };
  }

  interface Ship {
    name: 'ship';
    engine: string;
    sail: string;
  }

  interface Airplane {
    name: 'plane';
    engine: string;
    wings: string;
  }

  interface SuperJet {
    name: 'SuperJet';
    engine: string;
    wings: string;
  }

  function repairVehicle(vehicle: Vehicle) {
    // if (isCar(vehicle)) {
    //   vehicle.wheels;
    // } else if (isShip(vehicle)) {
    //   vehicle.sail;
    // } else {
    //   vehicle.wings;
    // }

    switch (vehicle.name) {
      case 'car':
        console.log(vehicle.name);
        break;
      case 'ship':
        console.log(vehicle.name);
        break;
      case 'plane':
        console.log(vehicle.name);
        break;
      case 'SuperJet':
        console.log(vehicle.name);
        break;
      default:
        const smth: never = vehicle;
        console.log('Nope!');
        break;
    }
  }

  function isCar(car: Vehicle): car is Car {
    return (car as Car).wheels.number !== undefined;
  }

  function isShip(ship: Vehicle): ship is Ship {
    return 'sail' in ship;
  }
}
