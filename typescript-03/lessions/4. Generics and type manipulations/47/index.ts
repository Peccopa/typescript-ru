{
  function processingData<T, S>(data: T[], options: S): string {
    switch (typeof data) {
      case 'string':
        return `${data}, speed ${options}`;
        break;
      case 'number':
        return `${data}, speed ${options}`;
        break;
      default:
        return 'Not valid';
        break;
    }
  }

  let res1 = processingData([1], 'fast');
  let res2 = processingData([`1`], 'slow');

  const num = [10];
  const str = 'str';
  const res3 = processingData<number, string>(num, str);

  function processing<T>(data: T): T {
    return data;
  }

  interface processingFn {
    <T>(data: T): T;
  }

  interface DataSaver {
    // processing: typeof processing;
    processing: processingFn;
  }

  let newFu: processingFn = processing;

  const saver: DataSaver = {
    // processing(data) {
    //   console.log(data);
    //   return data;
    // },

    // processing: <T>(data: T): T => {
    //   return data;
    // },

    // processing: (data) => {
    //   return data;
    // },

    processing: processing,
  };
}
