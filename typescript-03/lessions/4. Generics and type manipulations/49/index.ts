{
  // Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

  interface PlayerData<Game extends number | string, Hours> {
    game: Game;
    hours: Hours;
    server: string;
  }

  const player1: PlayerData<string, number> = {
    game: 'CS:GO',
    hours: 300,
    server: 'basic',
  };

  const player2: PlayerData<number, string> = {
    game: 2048,
    hours: '300 h.',
    server: 'arcade',
  };

  interface IHours {
    total: number;
    inMenu: number;
  }

  const player3: PlayerData<string, IHours> = {
    game: 'Chess',
    hours: {
      total: 500,
      inMenu: 50,
    },
    server: 'chess',
  };

  // Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
  // Каждый объект может еще содержать дополнительные свойства в случайном виде
  // Свойство name может иметь только 4 варианта
  // Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
  // Возвращает она объект-экземпляр AmountOfFigures
  // Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
  // С текущими данными в консоль должно попадать:
  // { squares: 3, circles: 2, triangles: 2, others: 1 }

  enum FigureNames {
    Rect = 'rect',
    Triangle = 'triangle',
    Line = 'line',
    Circle = 'circle',
  }

  type TFigure = 'rect' | 'triangle' | 'line' | 'circle';

  interface Figure {
    name: FigureNames;
  }

  interface AmountOfFigures {
    squares: number;
    circles: number;
    triangles: number;
    others: number;
  }

  function calculateAmountOfFigures<T extends Figure>(
    figures: T[]
  ): AmountOfFigures {
    const amount = {
      squares: 0,
      circles: 0,
      triangles: 0,
      others: 0,
    };

    figures.forEach((figure: Figure) => {
      switch (figure.name) {
        case FigureNames.Rect:
          amount.squares += 1;
          break;
        case FigureNames.Circle:
          amount.circles += 1;
          break;

        case FigureNames.Line:
          amount.others += 1;
          break;

        case FigureNames.Triangle:
          amount.triangles += 1;
          break;

        default:
          break;
      }
    });

    return amount;
  }

  interface CustomFigure extends Figure {
    data?: {};
  }

  const data: CustomFigure[] = [
    {
      name: FigureNames.Rect,
      data: { a: 5, b: 10 },
    },
    {
      name: FigureNames.Rect,
      data: { a: 6, b: 11 },
    },
    {
      name: FigureNames.Triangle,
      data: { a: 5, b: 10, c: 14 },
    },
    {
      name: FigureNames.Line,
      data: { l: 15 },
    },
    {
      name: FigureNames.Circle,
      data: { r: 10 },
    },
    {
      name: FigureNames.Circle,
      data: { r: 5 },
    },
    {
      name: FigureNames.Rect,
      data: { a: 15, b: 7 },
    },
    {
      name: FigureNames.Rect,
    },
  ];

  console.log(calculateAmountOfFigures(data));
}
