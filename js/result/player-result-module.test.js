import {assert} from 'chai';
import {getResult} from "./player-result-module";

const STATTSTICS = [18, 6, 11, 2, 15];

const GAME_RESULT = [
  {
    points: 14,
    remainingNotes: 2,
    remainingTime: 26
  },
  {
    points: 0,
    remainingNotes: 0,
    remainingTime: 30
  },
  {
    points: 15,
    remainingNotes: 2,
    remainingTime: 0
  }
];

describe(`Получить результат игрока`, () => {
  it(`Должны получить результат игры`, () => {
    const i = 3;
    const t = STATTSTICS.length + 1;
    const n = Math.round((t - i) / t * 100);
    assert.equal(`Вы заняли ${i} место из ${t} игроков. Это лучше, чем у ${n}% игроков`, getResult(STATTSTICS, GAME_RESULT[0]));
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getResult(STATTSTICS, GAME_RESULT[2]));
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getResult(STATTSTICS, GAME_RESULT[1]));
  });
});
