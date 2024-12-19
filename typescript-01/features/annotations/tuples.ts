const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];
const cola: Drink = ['brown', true, 40];
const sprite: Drink = ['cleat', true, 40];
const coffee: Drink = ['black', false, 0];

const carSpecs: [number, number] = [400, 3354];
const carSpecsObj = {
  hp: 400,
  w: 3354,
};
