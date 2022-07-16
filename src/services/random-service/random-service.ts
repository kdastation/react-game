export class RandomService {
  static randomValueInArray(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
