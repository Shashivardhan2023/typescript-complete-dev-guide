const add = (a: number, b: number): number => {
    return (a + b);
};

const subtract = (a: number, b: number): number => {
    return (a - b);
};

function divide(a: number, b: number): number {
    return a/b;
};

function multiply(a: number, b: number): number {
    return a*b;
};

const logger = (msg: string): void => {
    console.log(msg);
};

const throwError = (msg: string): void => {
    if (!msg) {
        throw new Error(msg);
    }
};

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
logWeather(todayWeather);
// another way of declaring arguments
const logWeather2 = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};