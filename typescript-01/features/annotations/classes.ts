class Vehicle1 {
  // public drive(): void {
  //   console.log(`Vehicle1 - Drive!`);
  // }

  constructor(public color: string) {}

  // public color: string;
  // constructor(color: string) {
  // this.color = color;
  // }

  public stop(): void {
    console.log(`Vehicle1 - Stop!`);
  }
  protected beep(): void {
    console.log(`Vehicle1 - Beep!`);
  }
}

class Car1 extends Vehicle1 {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log(`Car1 - Drive!`);
  }
  public startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

const vehicle1 = new Vehicle1('red');
console.log(vehicle1.color);

// vehicle1.drive();
// vehicle1.stop();

const car1 = new Car1(4, 'silver');
// car1.startDrivingProcess();
// car1.stop();
