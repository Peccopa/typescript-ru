let a04: any = 1;
let b04: number = a04;

let c04: unknown = 1;
let d04: number = <number>c04;
let e04: number = c04 as number;

let f04: any = 'Hello';
let g04_1: number = (<string>f04).length;
let g04_2: number = (f04 as string).length;

let h04: number | string;
h04 = 5 || 'Hello';

type I = number | string;
let i04: I = 5 || 'Hello';

type J = 1 | 2 | '3' | boolean;
let j04: J = 1;
j04 = 2;
j04 = '3';
j04 = true;
j04 = false;

type M04 = { a: string } | { b: string };
let m04: M04 = { a: 'Hello' };
m04 = { b: 'Hello' };
m04 = { b: 'Hello', a: 'Script' };

type N = { a: string; b: string };
let n04: N = { b: '', a: '' };

type O = { a: string; b?: string };
let o04: O = { a: '' };
o04 = { a: '', b: '' };
if ('b' in o04) {
  console.log('Hello!');
}
//
