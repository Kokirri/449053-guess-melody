export const getResult = function (statistics, playerResult) {
  if (playerResult.remainingNotes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  if (playerResult.remainingTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  const currentPoint = playerResult.points;
  const newStatistics = [...statistics, currentPoint];
  newStatistics.sort((a, b) => b - a);

  const place = newStatistics.indexOf(currentPoint) + 1;
  const playersAmount = newStatistics.length;
  const percentageOfPlayers = Math.round((playersAmount - place) / playersAmount * 100);
  return `Вы заняли ${place} место из ${playersAmount} игроков. Это лучше, чем у ${percentageOfPlayers}% игроков`;
};
