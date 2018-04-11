import {getElement} from "../get-element";
import {removeSection, showSection} from "../show-section";
import moduleWelcome from "../module-welcome";

export const timeout = getElement(`<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`);

const replayButton = timeout.querySelector(`.main-replay`);
replayButton.addEventListener(`click`, function () {
  removeSection(timeout);
  showSection(moduleWelcome);
});
