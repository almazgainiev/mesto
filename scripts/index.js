const popupProfile = document.querySelector('.popup-profile');
const popupCloseButtonElement = popupProfile.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__redact-btn');
let getValueOfName = document.querySelector('.form__input_type_name');
let getValueOfJob = document.querySelector('.form__input_type_job');
let ProfileName = document.querySelector('.profile__name');
let ProfileJob = document.querySelector('.profile__description');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_job');
const placeList = document.querySelector('.places');
const template = document.querySelector('#place-item-template');
const popupCard = document.querySelector('.popup-card');
const popupCardCloseButtonElement = popupCard.querySelector('#popup__close_card');
const popupCardOpenButtonElement = document.querySelector('.profile__add-btn');
let formElementCard = document.querySelector('.form_card');
let placeInput = formElementCard.querySelector('.form__input_type_place');
let linkInput = formElementCard.querySelector('.form__input_type_link');
const popupPlace = document.querySelector('.popup-place');
const popupPlacePhoto = popupPlace.querySelector('.popup__photo');
const popupPlaceCloseButtonElement = popupPlace.querySelector('.popup__close_place');
const popupPlaceDescrtiption = popupPlace.querySelector('.popup__description');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
function handleProfileEdit() {
  nameInput.value = ProfileName.textContent;
  jobInput.value = ProfileJob.textContent;
  openPopup(popupProfile);
}
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  ProfileName.textContent = getValueOfName.value;
  ProfileJob.textContent = getValueOfJob.value;
  closePopup(popupProfile);
}
const createCard = (card) => {
  const place = template.content.querySelector('.placeitem').cloneNode(true);
  const addNewDeleteButtonOfPlace = place.querySelector('.place-item__del');
  addNewDeleteButtonOfPlace.addEventListener('click', () => {
    place.remove()
  });
  const addNewNameOfPlace = place.querySelector('.place-item__name');
  addNewNameOfPlace.textContent = card.name;
  const addNewLikeOfPlace = place.querySelector('.place-item__heart');
  addNewLikeOfPlace.addEventListener('click', (evt) => {
    evt.target.classList.toggle('place-item__heart_active');
  });
  const addNewPhotoOfPlace = place.querySelector('.place-item__photo');
  addNewPhotoOfPlace.alt = card.name;
  addNewPhotoOfPlace.src = card.link;
  addNewPhotoOfPlace.addEventListener('click', () => infoOfPlace(card.name, card.link));
  return place;
}
const renderList = (card) => {
  placeList.append(createCard(card));
};
initialCards.forEach((item) => {
  renderList(item);
});
function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const placeitem = createCard({
    name: placeInput.value,
    link: linkInput.value
  });
  placeList.prepend(placeitem);
  closePopup(popupCard);
  formElementCard.reset();
}
function infoOfPlace(name, link) {
  popupPlacePhoto.name = name;
  popupPlacePhoto.src = link;
  popupPlaceDescrtiption.textContent = name;
  openPopup(popupPlace);
}
formElement.addEventListener('submit', handleFormProfileSubmit);
popupOpenButtonElement.addEventListener('click', handleProfileEdit);
popupCloseButtonElement.addEventListener('click', closePopup);
popupCardOpenButtonElement.addEventListener('click', () => openPopup(popupCard));
popupCardCloseButtonElement.addEventListener('click', () => closePopup(popupCard));
formElementCard.addEventListener('submit', handleFormCardSubmit);
popupCloseButtonElement.addEventListener('click', () => closePopup(popupProfile));
popupPlaceCloseButtonElement.addEventListener('click', () => closePopup(popupPlace));


