var link = document.querySelector(".map-button");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".button-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var question = popup.querySelector("[name=user-question]");

var isStorageSupport = true
var nameStorage = "";
var emailStorage = "";

try {
  nameStorage = localStorage.getItem("name");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  overlay.classList.add("overlay-show");
  if (nameStorage && emailStorage) {
    name.value = nameStorage;
    email.value = emailStorage;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !question.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-feedback-show");
      overlay.classList.remove("overlay-show");
    }
  }
});
