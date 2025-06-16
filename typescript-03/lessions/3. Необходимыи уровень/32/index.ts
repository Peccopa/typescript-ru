{
  // let something: unknown;
  // something = 'str';

  // let data: string[] = something;
  // data.find((e) => e);

  // const someValue: unknown = 10;
  // someValue.method();

  function fetchData(data: unknown): void {
    if (typeof data === 'string') data.toLowerCase();
    if (typeof data === 'number') data.toFixed();
  }

  const userData = '{"isTrue": true, "age": 45, "name": "John"}';

  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }

  const data = safeParse(userData);

  console.log(data);

  function transferData(d: unknown): void {
    if (typeof d === 'string') d.toLowerCase();
    if (typeof d === 'object' && d) console.log(d);
  }

  try {
    if (true) {
      throw new Error('error');
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log(typeof e.message);
    } else if (typeof e === 'string') {
      console.log(e.toLowerCase());
    }
  }

  type T0 = any | unknown;
  type T1 = number | unknown;
  type T2 = any & unknown;
  type T3 = number & unknown;
}
