export const countResult = function (answers, lifescount) {
  if (answers.length < 10) {
    return -1;
  }
  if (lifescount === 0) {
    return -1;
  }
  let count = 0;
  answers.forEach(function ({isValid, time}) {
    if (isValid === true && time < 30) {
      count = count + 2;
    } else if (isValid === true) {
      count = count + 1;
    }
    if (isValid === false) {
      count = count - 2;
    }
  });
  return count;
};
