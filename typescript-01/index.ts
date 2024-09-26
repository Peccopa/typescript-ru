const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

const createError = (msg: string): never => {
  throw new Error(msg);
};

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else if (!isBirthday) {
    return 'Too bad!';
  }
  return createError('Error');
}

console.log(logBrtMsg(isBirthdayData, userNameData, ageData));
