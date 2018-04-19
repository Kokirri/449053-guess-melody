import {assert} from 'chai';
import {countResult} from './count-module';
// mocha.setup(`bdd`);

describe(`Подсчёт набранных баллов игрока`, () => {
  it(`Если игрок потратил все жизни`, () => {
    assert.equal(countResult([
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5}
    ], 0), -1);
  });
  it(`Если игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(countResult([
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5},
      {isValid: true, time: 5}
    ], 3), -1);
  });
  it(`Если игрок ответил на все вопросы правильно и не быстро, и ни разу не ошибся`, () => {
    assert.equal(countResult([
      {isValid: true, time: 35},
      {isValid: true, time: 35},
      {isValid: true, time: 35},
      {isValid: true, time: 35},
      {isValid: true, time: 35},
      {isValid: true, time: 35},
      {isValid: true, time: 35},
      {isValid: true, time: 35},
      {isValid: true, time: 35},
      {isValid: true, time: 35}
    ], 3), 10);
  });
  it(`Если игрок ответил на все вопросы правильно и быстро`, () => {
    assert.equal(countResult([
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20}
    ], 3), 20);
  });
  it(`Если игрок ответил на некоторые вопросы неправильно, но быстро`, () => {
    assert.equal(countResult([
      {isValid: false, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: false, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: true, time: 20},
      {isValid: false, time: 20},
      {isValid: true, time: 20}
    ], 3), 8);
  });
  it(`Если игрок ответил на некоторые вопросы неправильно и с разной скоростью`, () => {
    assert.equal(countResult([
      {isValid: false, time: 20},
      {isValid: true, time: 35},
      {isValid: true, time: 20},
      {isValid: true, time: 40},
      {isValid: false, time: 20},
      {isValid: true, time: 10},
      {isValid: false, time: 20},
      {isValid: true, time: 20},
      {isValid: false, time: 20},
      {isValid: true, time: 32}
    ], 3), 1);
  });
});


