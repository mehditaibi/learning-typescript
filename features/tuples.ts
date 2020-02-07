const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pespi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

const carSpecs: [number, number] = [400, 3354];

interface carStats {
  horsepower: number;
  weight: number;
}

const carStats: carStats = {
  horsepower: 400,
  weight: 3354
};
