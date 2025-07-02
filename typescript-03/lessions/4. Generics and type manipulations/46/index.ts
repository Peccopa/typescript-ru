{
  function processingData<T>(data: T): T {
    // ...some logic

    return data;
  }

  let res1 = processingData(1);
  let res2 = processingData(`1`);

  const num = 10;
  const res3 = processingData<number>(num);

  interface PrintUK {
    design: number;
  }

  interface PrintES {
    design: string;
  }

  interface Print<T> {
    design: T;
  }

  const somePrint1: Print<string> = {
    design: '',
  };

  const somePrint2: Print<number> = {
    design: 1,
  };
}
