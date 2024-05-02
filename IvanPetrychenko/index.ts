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

let salary: number;
salary = 5000;

const userData =
  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

const userObj: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
} = JSON.parse(userData);
console.log(userObj);

const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Congrats ${userName}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
};

// logBrtMsg(isBirthdayData, userNameData, ageData);
