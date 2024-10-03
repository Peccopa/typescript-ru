function a(x: number, y: number): number {
  return x + y;
}

let b = (x: number, y: number) => x + y;

let c: (x: number, y: number) => number; // Signature
c = function (x: number, y: number): number {
  return x + y;
};

function d(x: number, y: number): void {
  console.log(x + y);
}

function e(x: string): never {
  throw new Error(x);
}

function f(x: number, y: number): number; // Overload
function f(x: string, y: number): string; // Overload
function f(x: any, y: any): any {
  if (typeof x === 'number') {
    return x + y;
  } else if (typeof x === 'string') {
    x = x.toUpperCase();
    return `${x} ${y}`;
  }
}

console.log(f(1, 2));
console.log(f('hello', 2));

//
