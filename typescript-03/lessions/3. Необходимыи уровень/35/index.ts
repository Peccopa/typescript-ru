{
  const fetchData = (url: string, method: 'GET' | 'POST'): void => {
    console.log(method);
  };

  const reqOptions1 = {
    url: 'https://someurl.com',
    method: 'false-GET',
  };

  const reqOptions2 = {
    url: 'https://someurl.com',
    method: 'false-GET' as 'GET',
  };

  const reqOptions3 = {
    url: 'https://someurl.com',
    method: 'false-GET',
  } as const;

  const reqOptions4 = {
    url: 'https://someurl.com',
    method: 'false-GET',
  };

  const str = 'str';
  const method = 'GET';

  fetchData('qqq', 'GET');
  fetchData(reqOptions1.url, method);
  fetchData(reqOptions1.url, reqOptions1.method as 'GET');
  fetchData(reqOptions1.url, reqOptions2.method);
  fetchData(reqOptions1.url, <'GET'>reqOptions1.method);

  const box = document.querySelector('.box') as HTMLElement;
  const input1 = document.querySelector('input') as HTMLInputElement;
  const input2 = <HTMLInputElement>document.querySelector('input');
  const someNum: number = input1.value as any as number;
  console.log(someNum.toFixed());

  // box.classList.add('');

  let a = 'value' as const;
  let b = { f: 100 } as const;
  let c = [] as const;

  let value = 'value';
  let arr = ['aa', 'ff'];
  let obj = { d: '333' };

  // let T0 = value as const;
}
