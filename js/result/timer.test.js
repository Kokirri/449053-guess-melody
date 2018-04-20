import {assert} from 'chai';
import {createTimer} from "./timer";

describe(`Создаем таймер для игры`, () => {
  it(`Если время закончилось`, () => {
    assert.equal(`Время вышло`, createTimer(1).tick());
    assert.equal(`Время вышло`, createTimer(0));
  });
});
