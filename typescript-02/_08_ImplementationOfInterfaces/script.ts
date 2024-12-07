type IPerson2 = {
  name: string;
  age: number;
  sayHello(): string;
};

type Test1 = {};

type Test2 = IPerson2 &
  Test1 & {
    text: string;
  };

interface Test {}

interface IPerson3 {
  name: string;
}

interface IPerson extends IPerson3, Test {
  age: number;
}

interface IPerson {
  // age?: number;
  // sayHello: () => string;
  sayHello(): string;
}

abstract class Person09 implements IPerson {
  public name: string = '';
  // private name: string = '';
  // protected name: string = '';
  // public age: number = 0;
  public readonly age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // constructor(public name: string, public age: number) {}

  sayHello(): string {
    return `Hello, my name is ${this.name}`;
  }

  abstract description(): string;
}

abstract class Person08 {
  name: string = '';
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): string {
    return `Hello, my name is ${this.name}`;
  }

  abstract description(): string;
}

class Student08 extends Person08 {
  group: string = '';
  course: number = 0;

  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this.group = group;
    this.course = course;
  }

  sayHello(): string {
    // return `I\`m a situdent ${this.name}`
    const text = super.sayHello();
    return `${text}. I\`m from ${this.group} group`;
  }
  description(): string {
    return `
    Name: ${this.name}
    Age: ${this.age}
    Group: ${this.group}
    Course: ${this.course}
    `;
  }
}

class Teacher08 extends Person08 {
  disciplines: string[] = [];

  constructor(name: string, age: number, disciplines: string[]) {
    super(name, age);
    this.disciplines = disciplines;
  }
  description(): string {
    return `
    Name: ${this.name}
    Age: ${this.age}
    Disc: ${this.disciplines}
    `;
  }
}

// const john08: Person08 = new Person08('John', 44);
const bill08: Student08 = new Student08('Bill', 34, 'TS', 3);
// console.log(bill08);
const bill08_2: Person08 = <Person08>bill08;
// console.log(bill08_2);

const bob08: Person08 = new Student08('Bob', 11, '34', 32);

const lara08: Teacher08 = new Teacher08('Lara', 45, ['math', 'js', 'ts']);
// console.log(john08.sayHello());
console.log(bill08.sayHello());
console.log(bill08.description());
console.log(lara08.sayHello());
console.log(lara08.description());

//
