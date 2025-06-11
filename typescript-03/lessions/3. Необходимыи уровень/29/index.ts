{
  interface User {
    login: string;
    password: string;
    age: number;
    address: string | undefined;
    // address?: string;
    parents?: {
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

  // const dbName = 'db';
  let dbName;

  console.log(dbName);

  function sendUserData(obj: User, db?: string): void {
    dbName = 'db';
    console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
  }

  sendUserData(user, dbName);
}
