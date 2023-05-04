"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    constructor(enrollment, name, testSCore, homeWorkScore) {
        this._enrollment = enrollment;
        this._name = name;
        this._testScore = testSCore;
        this._homeWorkScore = homeWorkScore;
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('Name should be 3 or more characters');
        }
        this.name = value;
    }
    get testScore() {
        return this._testScore;
    }
    set tesScore(value) {
        if (value.length > 4) {
            throw new Error('A minimum of 4 scores is needed!');
        }
        this._testScore = value;
    }
    get homeWorkScore() {
        return this._homeWorkScore;
    }
    set homeWorkScore(value) {
        if (value.length > 2) {
            throw new Error('A minimum of 2 scores is needed!');
        }
        this._homeWorkScore = value;
    }
    sumGrades() {
        return [...this._testScore, ...this._homeWorkScore]
            .reduce((accu, curr) => {
            const nextNote = curr + accu;
            return nextNote;
        }, 0);
    }
    averageGrade() {
        const grades = this.sumGrades();
        const divider = this._testScore.length + this._homeWorkScore.length;
        const result = grades / divider;
        return Math.round(result);
    }
}
exports.default = student;
const student1 = new student('12/3/2022', 'Gustavo', [7, 7, 7, 7], [8, 8]);
student1.tesScore = [9, 9, 9, 9];
student1.homeWorkScore = [8, 8];
console.log(student1);
console.log('A soma das notas sao:', student1.sumGrades());
console.log('A media das suas notas e: ', student1.averageGrade());
// npx tsc
// node ./dist/exercises.js
