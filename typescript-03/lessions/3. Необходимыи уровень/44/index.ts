{
  type voidFunc = () => void;

  const retString: voidFunc = () => {
    // ... some logic
    return 'string';
  };

  const s = retString();

  console.log(s);

  const names = ['anna', 'john'];
  const newArr = names.slice();

  names.forEach((e, i, arr) => arr.push('bob'));
}
