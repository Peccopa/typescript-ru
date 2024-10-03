type A<T> = T;
type B = A<string>;
type C = A<'hello'>;
type D = A<number>;

type MyArray<T> = T[];
const arr: MyArray<string> = ['Hello', 'TS'];

function echo12<T>(x: T): T {
  return x;
}

const echo13: <T>(x: T) => T = <T>(x: T): T => x;

// const result = echo13('Hello!!!');
const result = echo13<string>('Hello!!!');

// class List<T> {
//   elements: T[] = [];

//   add(element: T) {
//     this.elements.push(element);
//   }
// }

// const list = new List<string>();
// list.add('Hello');

interface IList<T> {
  elements: T[];
  add(element: T): void;
}

// function test(val: number): number;

// function test(val: number, t: string): number;

// function test(val: string): number;

// function test(val: number, t?: string): number;

// function test(val: string, t?: string): number;

// test1('5');
// test(1);

//
