{
  const TOP = 'Top';
  const RIGHT = 'Right';

  enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM,
  }

  enum TimingFunc {
    EASE = 'ease',
    EASE_IN = 'ease-in',
    LINEAR = 'linear',

    // EASE_IN = `${ease}-in`,
    // ERROR = 5,
  }

  const enum TimingFuncN {
    EASE = 1,
    EASE_IN = 2,
    LINEAR = EASE * 3,

    // EASE_IN = `${ease}-in`,
    // ERROR = 5,
  }

  function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
    if (dir === Directions.RIGHT) {
      console.log(dir);
      console.log(tFunc);
    }
  }

  frame('id', Directions.RIGHT, TimingFunc.EASE);
}
