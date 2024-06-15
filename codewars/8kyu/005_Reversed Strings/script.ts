// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str: string): string {
  return str.split('').reverse().join(''); // reverse this!
}

console.log(solution('123'));
