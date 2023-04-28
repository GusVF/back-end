export default class student {
  private _enrollment: string;
  private _name: string;
  private _testScore: number[];
  private _homeWorkScore: number[];

  constructor(enrollment: string, name: string, testSCore: number[], homeWorkScore:number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this._testScore = testSCore;
    this._homeWorkScore  = homeWorkScore;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('Name should be 3 or more characters');
    }
    this.name = value;
  }

  get testScore(): number[] {
    return this._testScore;
  }

  set tesScore(value: number[]) {
    if (value.length > 4) {
      throw new Error('A minimum of 4 scores is needed!');
    }
    this._testScore = value;
  }

  get homeWorkScore(): number[] {
  return this._homeWorkScore;
  }

  set homeWorkScore(value: number[]) {
    if (value.length > 2) {
      throw new Error('A minimum of 2 scores is needed!');
    }
    this._homeWorkScore = value
  }
  sumGrades(): number {
    return [...this._testScore, ...this._homeWorkScore]
    .reduce((accu, curr) => {
      const nextNote =   curr + accu;
      return nextNote;
    }, 0);
  }

  averageGrade(): number {
    const grades = this.sumGrades()
    const divider = this._testScore.length + this._homeWorkScore.length;
    const result = grades / divider;
      return Math.round(result);
  }
}

const student1 = new student('12/3/2022', 'Gustavo', [7,7,7,7], [8,8]);
student1.tesScore = [9,9,9,9];
student1.homeWorkScore = [8,8];
console.log(student1);
console.log('A soma das notas sao:', student1.sumGrades());
console.log('A media das suas notas e: ', student1.averageGrade());
// npx tsc
// node ./dist/exercises.js
