{
  const isBirthdayData: boolean = true;
  const userNameData: string = 'John';
  const ageData: number = 40;

  function logBrtMsgFoo(
    isBirthday: boolean,
    userName: string,
    age: number
  ): string {
    if (isBirthday) {
      return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
    } else {
      return 'Error';
    }
  }

  const logBrtMsgArrow = (
    isBirthday: boolean,
    userName: string,
    age: number
  ): string => {
    if (isBirthday) {
      return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
    } else {
      return 'Error ';
    }
  };

  console.log(logBrtMsgArrow(isBirthdayData, userNameData, ageData));
}
