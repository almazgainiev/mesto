const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__redact-btn');
console.log(popupOpenButtonElement);
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

/**addPopupVisibility();**/

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
