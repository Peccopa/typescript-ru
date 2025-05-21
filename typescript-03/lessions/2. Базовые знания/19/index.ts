const message: string | number = 4;
const messages: string[] | number[] = ['a', 'b'];

function printMsg2(msg: string | number): void {
  if (typeof msg === 'string') {
    console.log(msg.toUpperCase());
  } else {
    console.log(msg.toExponential());
  }
}

function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (typeof msg === 'number') {
    console.log(msg.toFixed());
  } else {
    console.log(msg);
  }
}

printMsg(5);

const printReadings1 = (a: string | number, b: number | boolean): void => {
  if (a === b) {
    console.log(a, b);
  }
};

const printReadings2 = (a: string | number[]): void => {
  console.log(a.slice(1, 3));
};

function checkReadings(readings: { system: number } | { user: number }): void {
  if ('system' in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
}

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}
