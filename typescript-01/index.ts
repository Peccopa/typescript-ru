const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: 'John',
  messages: {
    error: 'Error',
  },
};

const createError = (msg: string): never => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error: error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));

const departments: string[] = ['dev', 'design', 'marketing'];
const department: string = departments[0];
departments.push('sales');
const report: string[] = departments
  .filter((dep: string) => dep !== 'dev')
  .map((dep: string) => `${dep} - done!`);
console.log(report);

const nums: number[][] = [
  [3, 5, 6],
  [3, 5, 6],
];

const [first] = report;
console.log(first);
