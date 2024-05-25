class Person07 {
  name: string = '';
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): string {
    return `Hello, my name is ${this.name}`;
  }
}

class Student07 extends Person07 {
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
    return `${text}. I\`m from ${this.group} group`
  }
}

class Teacher extends Person07 {
  disciplines: string[] = [];

  constructor(name: string, age: number, disciplines: string[]) {
    super(name, age);
    this.disciplines = disciplines;
  }
}

const john07: Person07 = new Person07('John', 44);
const bill07: Student07 = new Student07('Bill', 34, 'TS', 3);
console.log(bill07);
const bill07_2: Person07 = <Person07>bill07;
console.log(bill07_2);

const bob: Person07 = new Student07('Bob', 11, '34', 32);

const lara: Teacher = new Teacher('Lara', 45, ['math', 'js', 'ts']);
console.log(john07.sayHello());
console.log(bill07.sayHello());
console.log(bill07_2.sayHello());
console.log(lara.sayHello());

//
