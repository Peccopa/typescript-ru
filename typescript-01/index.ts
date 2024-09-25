// const isBirthdayData: boolean = true;
// const userNameData: string = 'John';
// const ageData: number = 40;

let salary: number;
salary = 5000;

const userData: string =
  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

const userObj: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData);
console.log(userObj);

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return 'Error ';
  }
}

console.log(
  logBrtMsg(userObj.isBirthdayData, userObj.userNameData, userObj.ageData)
);
