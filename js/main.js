let consts = {
  RIGHT_KEYCODE: 39,
  LEFT_KEYCODE: 37
};
const arr = [];
const sectionMain = document.querySelector(`section.main`);
const template = document.querySelector(`#templates`);
const mainWelcome = template.content.querySelector(`.main--welcome`).cloneNode(true);
const mainLevelGenre = template.content.querySelector(`.main--level-genre`).cloneNode(true);
const mainLevelArtist = template.content.querySelector(`.main--level-artist`).cloneNode(true);
const mainResult = template.content.querySelector(`.main--result`).cloneNode(true);
arr.push(mainWelcome);
arr.push(mainLevelGenre);
arr.push(mainLevelArtist);
arr.push(mainResult);

const showSection = function (i) {
  sectionMain.appendChild(arr[i]);
};

const removeSection = function (i) {
  sectionMain.removeChild(arr[i]);
};
showSection(0);

let i = 0;

document.addEventListener(`keydown`, function (evt) {
  if (evt.altKey === true && evt.keyCode === consts.RIGHT_KEYCODE) {
    removeSection(i);
    if (i === arr.length - 1) {
      i = 0;
    } else {
      i++;
    }
    showSection(i);
  }
  if (evt.altKey === true && evt.keyCode === consts.LEFT_KEYCODE) {
    removeSection(i);
    if (i === 0) {
      i = arr.length - 1;
    } else {
      i--;
    }
    showSection(i);
  }
});


