const profile = {
  name: 'Jack',
  age: 25,
  coords: {
    lat: 1,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
