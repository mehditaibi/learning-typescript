const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

// const carsByMake: string[][] = [];
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference with extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent icompatible values
// carMakers.push(100);

// Help with 'map'

carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push('2030-10-10');
importantDates.push(new Date());
