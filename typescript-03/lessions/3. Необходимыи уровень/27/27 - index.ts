{
  let a = 'str';

  // let salary: number;
  const salary = 500;

  interface IUser {
    isName: boolean;
    age: number;
  }

  const userData: string = '{"isName": true, "age": 25}';

  const arr = ['str', 111, true];

  const usr: IUser = JSON.parse(userData);
  console.log(usr);

  const isOk = true;
  let movement: boolean | string = false;

  if (isOk) {
    movement = 'moovinh';
  }
}
