class Person {
  public _name: string;
  public _age: number;
  static isAdmin: boolean = false;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0 && value < 100) {
      this._age = value;
    } else {
      throw new Error('Wrong age!')
    }
  }

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public sayHello(): string {
    return `Hello, my name is ${this._name} and i'm ${this._age} years old.`;
  }
  static description(): string {
    return `Description: `;
  }
}

const john: Person = new Person('John', 44);
const bill: Person = new Person('Bill', 33);

console.log(john.sayHello());
console.log(bill.sayHello());
console.log(Person.description());
// console.log(john.age = 1);

if (john instanceof Person) {
  console.log(john);
}

//
