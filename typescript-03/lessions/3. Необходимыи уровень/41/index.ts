{
  type Animal = 'cat' | 'dog' | 'bird';

  interface Request {
    animal: Animal;
    breed: string;
    sterilized?: string;
  }

  interface Response1 {
    status: 'available';
    data: {
      animal: Animal;
      breed: string;
      sterilized?: string;
      location: string;
      age?: number;
    };
  }

  interface Response2 {
    status: 'not available';
    data: {
      message: string;
      nextUpdateIn: Date;
    };
  }

  function checkAnimalData({ status, data }: Response1 | Response2) {
    if (status === 'available') {
      return data;
    } else {
      return `${data}, you can try in ${data.nextUpdateIn}`;
    }
  }
}
