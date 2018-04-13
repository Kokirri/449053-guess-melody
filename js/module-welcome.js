import getElement from './get-element';
import {showSection, removeSection} from './show-section.js';
import moduleArtist from "./module-artist";

const moduleWelcome = getElement(`<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`);

const playButton = moduleWelcome.querySelector(`.main-play`);
playButton.addEventListener(`click`, function () {
  removeSection(moduleWelcome);
  showSection(moduleArtist);
});

export default moduleWelcome;
