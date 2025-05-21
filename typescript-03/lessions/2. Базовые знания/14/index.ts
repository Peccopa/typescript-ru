{
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
}
