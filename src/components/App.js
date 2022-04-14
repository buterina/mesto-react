import React from 'react';
import '../index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        title="Редактировать профиль"
        children={
          <>
            <label
              class="popup__field">
              <input
                class="popup__input popup__input_type_name"
                id="name-input"
                type="text"
                name="name"
                placeholder="Ваше имя"
                minlength="2"
                maxlength="40"
                autocomplete="off"
                required />
              <span
                class="popup__input-error name-input-error"></span>
            </label>

            <label
              class="popup__field">
              <input
                class="popup__input popup__input_type_about"
                id="bio-input"
                type="text"
                name="about"
                placeholder="Ваш род занятий"
                minlength="2"
                maxlength="200"
                autocomplete="off"
                required />
              <span
                class="popup__input-error bio-input-error"></span>
            </label>
          </>
        }
      />

      <PopupWithForm
        name="edit-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        title="Обновить аватар"
        children={
          <label
            class="popup__field">
            <input
              class="popup__input popup__input_type_avatar"
              type="url" name="avatar"
              id="avatar-input"
              placeholder="Ссылка на аватар"
              autocomplete="off"
              required />
            <span
              class="popup__input-error avatar-input-error"></span>
          </label>
        } />

      <PopupWithForm
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        title="Новое место"
        children={
          <>
            <label
              class="popup__field">
              <input
                class="popup__input popup__input_type_card-name"
                type="text"
                name="place"
                id="place-input"
                placeholder="Название"
                autocomplete="off"
                minlength="2"
                maxlength="30"
                required />
              <span
                class="popup__input-error place-input-error"></span>
            </label>

            <label
              class="popup__field">
              <input
                class="popup__input popup__input_type_card-link"
                type="url"
                name="link"
                id="link-input"
                placeholder="Ссылка на картинку"
                autocomplete="off"
                required />
              <span
                class="popup__input-error link-input-error"></span>
            </label>
          </>
        } />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />

    </div>
  );
}

export default App;


