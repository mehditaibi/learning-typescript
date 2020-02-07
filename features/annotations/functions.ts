const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny"
};

// const logWeater = (forcast: { date: Date; weather: string }): void => {
//   console.log(forcast.date);
//   console.log(forcast.weather);
// };

const logWeater = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// ES2015

const logWeather = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

logWeater(forecast);
