const getElement = function (htmlString) {
  const div = document.createElement(`div`);
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

export default getElement;
