{
  interface ProcessingFn {
    <T>(data: T): T;
  }

  function processing<T>(data: T): T {
    return data;
  }

  let newFunc: ProcessingFn = processing;

  type Smth<T> = T;

  const numL: Smth<number> = 5;

  type User<T> = {
    login: T;
    age: number;
  };

  const user1: User<string> = {
    login: '',
    age: 1,
  };

  const user2: User<'aaa'> = {
    login: 'aaa',
    age: 1,
  };

  type OrNull<Type> = Type | null;
  type OneOrMany<Type> = Type | Type[];

  const data: OneOrMany<number[]> = [1, 2];

  interface ParentsOfUser {
    mother: string;
    father: string;
  }

  interface User1<ParentsData extends ParentsOfUser> {
    login: string;
    age: number;
    parents: ParentsData;
  }

  const user3: User1<{ mother: string; father: string; maried: boolean }> = {
    login: 'aaa',
    age: 1,
    parents: {
      mother: '',
      father: '',
      maried: true,
    },
  };

  const depositMoney = <T extends number | string>(amount: T): T => {
    console.log(`req to serv ${amount}`);
    return amount;
  };

  depositMoney(444);
  depositMoney('22');
}
