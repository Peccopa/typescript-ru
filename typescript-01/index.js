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
var userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error',
    },
};
var createError = function (msg) {
    throw new Error('msg');
};
var logBrtMsg = function (_a) {
    var isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.messages.error;
    if (isBirthdayData) {
        return "Congrats ".concat(userNameData, ", age: ").concat(ageData + 1);
    }
    else {
        return createError(error);
    }
};
console.log(logBrtMsg(userData));
var departments = ['dev', 'design', 'marketing'];
var nums = [1, 2, 3];
