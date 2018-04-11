const sectionMain = document.querySelector(`section.main`);

export const showSection = function (element) {
  sectionMain.appendChild(element);
};

export const removeSection = function (element) {
  sectionMain.removeChild(element);
};
