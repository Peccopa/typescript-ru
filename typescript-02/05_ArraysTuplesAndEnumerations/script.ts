// let a05 = []; // any
let a05: number[] = [];

let b05: Array<number> = [];

let c05: (number | string)[] = [];
let d05: Array<number | string> = [];

let e05: [number, string] = [1, ''];
let f05: [number, string?] = [1];

enum G05 {
  A = 5,
  B,
  C = 'Hello',
}
G05.A; // 5
G05.B; // 6
G05.C; // 'Hello'

const enum F05 {
    A,
    B,
    C,
}

//
