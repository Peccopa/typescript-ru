namespace Utils {
  export function log(text: string, color: string): void;
  export function log(text: string, color: string, fontSize: number): void;
  export function log(text: string, color: string, fontSize?: number) {
    if (fontSize) {
      console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
    } else {
      console.log(`%c${text}`, `color: ${color};`);
    }
  }
  log('Text', '#fff', 30);
}
Utils.log('Text', '#ccc', 30);

namespace Animals {
  export abstract class Animal {
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }

    abstract say(): void;
  }

  export namespace Pets {
    export class Cat extends Animal {
      say(): void {
        Utils.log(`${this.name}: mrrr... `, 'green', 30);
      }
    }
    export class Dog extends Animal {
      say(): void {
        Utils.log(`${this.name}: Awwww... `, 'green', 30);
      }
    }
  }
}

namespace Animals {
  export class Tiger extends Animals.Animal {
    private text: string;
    #text: string;
    constructor(name: string, text: string) {
      super(name);
      this.text = text;
      this.#text = text;
    }

    say() {
      Utils.log(`${this.name}: ${this.text} ${this.#text}`, '#444', 11);
    }
  }
}

const tiger = new Animals.Tiger('Tiger', 'Arrr!');
tiger.say();

const cat = new Animals.Pets.Cat('Box');
cat.say();

const dog = new Animals.Pets.Dog('Crack');
dog.say();

//
