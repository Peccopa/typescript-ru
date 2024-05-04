// const isBirthdayData: boolean = true;
// const ageData: number = 40;
// const userNameData: string = 'John';

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday) {
//     return `Congrats ${userName}, age: ${age + 1}`;
//   } else {
//     return 'Error';
//   }
// }

// let salary: number;
// salary = 5000;

// const userData =
//   '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

// const userObj: {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
// } = JSON.parse(userData);
// console.log(userObj);

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: 'John',
  messages: {
    error: 'Error',
  },
};

const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex', 'Anna'];
const res = userDataTuple.map((t) => `${t}-data`);
const [bthd, age, userName] = userDataTuple;
console.log(res);

const createError = (msg: string): never => {
  throw new Error('msg');
};

const logBrtMsg = ({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string => {
  if (isBirthdayData) {
    return `Congrats ${userNameData}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
};

console.log(logBrtMsg(userData));

const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];
departments.push('sales');
const report = departments
  .filter((d: string) => d !== 'dev')
  .map((d: string) => `${d} - done`);

console.log(report);
console.log(departments);

const nums: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

const [first, second] = report;
console.log(first, second);
