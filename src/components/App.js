import React from 'react';
import '../index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import { api } from '../utils/Api';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  // const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

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
      />

      <PopupWithForm
        name="edit-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        title="Обновить аватар" />

      <PopupWithForm
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        title="Новое место" />


      <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}/>

    
    </div>
  );
}

export default App;


