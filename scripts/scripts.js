const author = document.querySelectorAll(".author");
const closeButton = document.querySelectorAll(".close_modal");
const modal = document.querySelector(".modal");
const modalFilm = document.querySelector(".modal_film");
const screenContent = document.querySelector(".screen-content");
const filmscreen = document.querySelectorAll(".filmscreen");
const modalText = document.querySelector(".modalText");
const biography = document.querySelectorAll(".biography");
const descbook = document.querySelectorAll(".descbook");
const film = document.querySelectorAll(".film");
const book = document.querySelectorAll(".book");
const books = document.querySelectorAll(".books");

const openPopup = (n) => {
  modal.style.display = "flex";
  screenContent.innerHTML = biography[n].innerHTML;
};
const openFilmPopup = (n) => {
  modal.style.display = "flex";
  screenContent.innerHTML = filmscreen[n].innerHTML
};
const openDescbookPopup = (n) => {
  modal.style.display = "flex";
  screenContent.innerHTML = descbook[n].innerHTML;
};

const closePopup = () => {
  modal.style.display = "none";
};

const closeByEsc = (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
};
const closeByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
};


// Открыть попап
for (let n = 0; n < author.length; n++) {
  author[n].addEventListener("click", () => openPopup(n));
}

for (let n = 0; n < film.length; n++) {
  film[n].addEventListener("click", () => openFilmPopup(n));
}
for (let n = 0; n < book.length; n++) {
  book[n].addEventListener("click", () => openDescbookPopup(n));
}

// Закрыть попап
for (let n = 0; n < closeButton.length; n++) {
  closeButton[n].addEventListener("click", closePopup);
}
// closeButton.addEventListener("click", closePopup);
modal.addEventListener("click", closeByOverlay);
window.addEventListener("keyup", closeByEsc);
