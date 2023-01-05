const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__redact-btn');
const openPopup = function () {
  popupElement.classList.add('popup_opened');
}
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}
const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closePopup();
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__item_type_name');
let jobInput = formElement.querySelector('.form__item_type_job');
function handleFormSubmit (evt) {
  evt.preventDefault();
let getValueOfName = document.querySelector('.form__item_type_name').value;
let getValueOfJob = document.querySelector('.form__item_type_job').value;
document.querySelector('.profile__name').textContent = getValueOfName;
document.querySelector('.profile__description').textContent = getValueOfJob;
}
formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', closePopup);
