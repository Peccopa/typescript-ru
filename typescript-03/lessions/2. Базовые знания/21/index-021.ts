// let msg: 'Hello' = 'Hello';
// msg = 'Hello';

// const port3000: number = 3000;
// const port3001: number = 3001;

// function startServer(
//   protocol: 'http' | 'https',
//   port: 3000 | 3001
// ): 'Server started' {
//   if (port === port3000 || port === port3001) {
//     console.log(`Server started on ${protocol}://server:${port}`);
//   } else {
//     console.error('Invalid port');
//   }
//   return 'Server started';
// }
// startServer('https', 3000);

// type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in' | 'ease-in-out';
// type AnimationID = string | number;

// function createAnimation(
//   id: AnimationID,
//   animName: string,
//   timingFunc: AnimationTimingFunc = 'ease',
//   duration: number,
//   iterCount: 'infinite' | number
// ): void {
//   // const elem = document.querySelector(`#${id}`) as HTMLElement;
//   const elem = { style: { animation: '' } };
//   if (elem) {
//     console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
//     elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
//   } else {
//     console.log('Elem is ' + elem);
//   }
// }

// createAnimation('id', 'fade', 'ease-in-out', 4, 100);
