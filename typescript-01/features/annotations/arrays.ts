const colors2: string[] = ['red', 'green', 'yellow'];
const dates = [new Date(), new Date()];
const fruitsByColor = [['tomato'], ['apple'], ['lemon']];
const fruitsByColor1: string[][] = [['tomato'], ['apple'], ['lemon']];

//Help with inference when extractinf values
const color2 = colors2[0];
const color2_2 = colors2.pop();

// Prevent incompatible values
// colors.push(true);

// Help with 'map'
colors2.map((color: string): string => {
  return color.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2025-11-11'];
importantDates.push('12-12-12');
