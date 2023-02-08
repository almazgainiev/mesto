const popupProfile = document.querySelector('.popup-profile');
const closeButtons = document.querySelectorAll('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__redact-btn');
const getValueOfName = document.querySelector('.form__input_type_name');
const getValueOfJob = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');
const placeList = document.querySelector('.places');
const template = document.querySelector('#place-item-template');
const popupCard = document.querySelector('.popup-card');
const popupCardOpenButtonElement = document.querySelector('.profile__add-btn');
const formElementCard = document.querySelector('.form_card');
const placeInput = formElementCard.querySelector('.form__input_type_place');
const linkInput = formElementCard.querySelector('.form__input_type_link');
const popupPlace = document.querySelector('.popup-place');
const popupPlacePhoto = popupPlace.querySelector('.popup__photo');
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

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


function handleProfileEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
}
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = getValueOfName.value;
  profileJob.textContent = getValueOfJob.value;
  closePopup(popupProfile);;
}
const createCard = (card) => {
  const placeTemplate = template.content.querySelector('.place').cloneNode(true);
  const addNewDeleteButtonOfPlace = placeTemplate.querySelector('.place__del');
  addNewDeleteButtonOfPlace.addEventListener('click', () => {
    placeTemplate.remove()
  });
  const addNewNameOfPlace = placeTemplate.querySelector('.place__name');
  addNewNameOfPlace.textContent = card.name;
  const addNewLikeOfPlace = placeTemplate.querySelector('.place__heart');
  addNewLikeOfPlace.addEventListener('click', (evt) => {
    evt.target.classList.toggle('place__heart_active');
  });
  const addNewPhotoOfPlace = placeTemplate.querySelector('.place__photo');
  addNewPhotoOfPlace.alt = card.name;
  addNewPhotoOfPlace.src = card.link;
  addNewPhotoOfPlace.addEventListener('click', () => openPopupImage(card.name, card.link));
  return placeTemplate;
}
const renderList = (card) => {
  placeList.append(createCard(card));
};
initialCards.forEach((item) => {
  renderList(item);
});
function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const place = createCard({
    name: placeInput.value,
    link: linkInput.value
  });
  placeList.prepend(place);
 closePopup(popupCard);
  formElementCard.reset();
}
function openPopupImage(name, link) {
  popupPlacePhoto.name = name;
  popupPlacePhoto.src = link;
  popupPlaceDescrtiption.textContent = name;
  openPopup(popupPlace);
}
formElement.addEventListener('submit', handleFormProfileSubmit);
popupOpenButtonElement.addEventListener('click', handleProfileEdit);
popupCardOpenButtonElement.addEventListener('click', () => openPopup(popupCard));
formElementCard.addEventListener('submit', handleFormCardSubmit);



