{
  interface Car {
    name: 'car';
    engine: string;
    wheels: number;
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

  interface ComplexVehicle {
    name: 'car' | 'ship' | 'plane';
    engine: string;
    wheels?: string;
    wings?: string;
    sail?: string;
  }

  type Vehicle = Car | Ship | Airplane;

  function isCar(car: Vehicle): car is Car {
    return (car as Car).wheels !== undefined;
  }

  function isShip(ship: Vehicle): ship is Ship {
    return 'sail' in ship;
  }

  const car: ComplexVehicle = {
    name: 'car',
    engine: 'v8',
  };

  function repairVehicle(vehicle: ComplexVehicle) {
    switch (vehicle.name) {
      case 'car':
        console.log(vehicle.wheels);
        break;
      case 'ship':
        console.log(vehicle.name);
        break;
      case 'plane':
        console.log(vehicle.name);
        break;
      default:
        // const smth: never = vehicle;
        console.log('Nope!');
        break;
    }
  }

  repairVehicle(car);
}
