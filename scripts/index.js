const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__redact-btn');
let getValueOfName = document.querySelector('.form__input_type_name');
let getValueOfJob = document.querySelector('.form__input_type_job');
let ProfileName = document.querySelector('.profile__name');
let ProfileJob = document.querySelector('.profile__description');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_job');
const openPopup = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = ProfileName.textContent;
  jobInput.value = ProfileJob.textContent;
}
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
function handleFormSubmit(evt) {
  evt.preventDefault();
  ProfileName.textContent = getValueOfName.value;
  ProfileJob.textContent = getValueOfJob.value;
  closePopup();
}
formElement.addEventListener('submit', handleFormSubmit);

