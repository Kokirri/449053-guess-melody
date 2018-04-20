export const createTimer = function (time) {
  if (typeof time !== `number`) {
    return `Время должно быть числовым значением`;
  }
  if (time < 0) {
    return `Заданное время не может быть меньше нуля`;
  }
  if (time === 0) {
    return `Время вышло`;
  }

  return {
    time,
    tick: () => {
      return createTimer(time - 1);
    }
  };
};
