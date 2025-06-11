{
  interface User {
    readonly login: string;
    password: string;
    age: number;
    address: string | undefined;
    // address?: string;
    readonly parents?: {
      mother?: string;
      father?: string;
    };
  }

  const user: User = {
    login: 'login',
    password: 'password',
    age: 22,
    address: 'empty',
  };

  const userFreeze: Readonly<User> = {
    login: 'login',
    password: 'password',
    age: 22,
    address: 'empty',
  };

  // userFreeze.login = '11';
  // userFreeze.password = '11';
  // userFreeze.age = 11;

  // user.login = '11';
  // const dbName = 'db';
  let dbName;

  console.log(dbName);

  function sendUserData(obj: User, db?: string): void {
    dbName = 'db';
    console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
  }

  sendUserData(user, dbName);

  class Animal {
    readonly name: string = 'name';
  }

  const basicPorts: ReadonlyArray<number> = [1, 2, 3];
  // basicPorts[0] = 2;
  // basicPorts.push(1);

  // const basicPorts: readonly number[] = [1, 2, 3];
  // basicPorts[0] = 2;
  // basicPorts.push(1)

  // const basicPorts: readonly [number, ...string[]] = [1, '2', '3'];
  // basicPorts[0] = 2;
  // basicPorts.push(1)
}
