"use strict";
class Person07 {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello, my name is ${this.name}`;
    }
}
class Student07 extends Person07 {
    constructor(name, age, group, course) {
        super(name, age);
        this.group = '';
        this.course = 0;
        this.group = group;
        this.course = course;
    }
    sayHello() {
        // return `I\`m a situdent ${this.name}`
        const text = super.sayHello();
        return `${text}. I\`m from ${this.group} group`;
    }
}
class Teacher extends Person07 {
    constructor(name, age, disciplines) {
        super(name, age);
        this.disciplines = [];
        this.disciplines = disciplines;
    }
}
const john07 = new Person07('John', 44);
const bill07 = new Student07('Bill', 34, 'TS', 3);
console.log(bill07);
const bill07_2 = bill07;
console.log(bill07_2);
const bob = new Student07('Bob', 11, '34', 32);
const lara = new Teacher('Lara', 45, ['math', 'js', 'ts']);
console.log(john07.sayHello());
console.log(bill07.sayHello());
console.log(bill07_2.sayHello());
console.log(lara.sayHello());
//
//# sourceMappingURL=script.js.map