import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';
import  api  from '../utils/Api.js';
import Card from './Card';


function App() {
  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen,setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard,setSelectedCard] = useState(null);
  function closeAllPopups () {
    setisEditAvatarPopupOpen(false);
    setisAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  return (
    <div className="App">
  <Header />
    <Main 
    onEditAvatar={() => setisEditAvatarPopupOpen(true)} 
    onEditProfile ={() => setIsEditProfilePopupOpen(true)} 
    onAddPlace={() => setisAddPlacePopupOpen(true)}
    onCardClick={(selectedCard) => handleCardClick(selectedCard)} 
     />
    <Footer />
    <PopupWithForm 
    name='popup_edit' 
    title='Редактировать профиль' 
    submitname='Сохранить'
    isOpen={isEditProfilePopupOpen}
    onClose ={ () => closeAllPopups(true)} 
    >
    <fieldset className="popup__fieldset">
          <input
            type="text"
            name="name"
            id="username"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            className="popup__profile popup__profile_title popup__input"
            required
          />
          <span id="username-error" className="popup__input-error"></span>
        </fieldset>
        <fieldset className="popup__fieldset">
          <input
            type="text"
            name="about"
            id="about"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            className="popup__profile popup__profile_subtitle popup__input"
            required
          />
          </fieldset>
    </PopupWithForm>

    <PopupWithForm 
    name='popup_elements' 
    title='Новое место' 
    submitname='Создать'
    isOpen={isAddPlacePopupOpen}
    onClose ={ () => closeAllPopups(true)} 
    >
    <fieldset className="popup__fieldset">
          <input
            type="text"
            name="name"
            id="imgname"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            className="popup__profile popup__input popup__profile_title popup__profile_elements popup__profile_title_elements"
            required
          />
          <span id="imgname-error" className="popup__input-error"></span>
        </fieldset>
        <fieldset className="popup__fieldset">
          <input
            type="url"
            name="link"
            id="imglink"
            placeholder="Ссылка на картинку"
            className="popup__profile popup__input popup__profile_subtitle popup__profile_elements popup__profile_subtitle_elements"
            required
          />
          <span id="imglink-error" className="popup__input-error"></span>
        </fieldset>
    </PopupWithForm>

    <PopupWithForm 
    name='popup_avatar' 
    title='Обновить аватар' 
    submitname='Сохранить'
    isOpen={isEditAvatarPopupOpen}
    onClose ={ () => closeAllPopups(true)} 
    >
   <fieldset className="popup__fieldset">
          <input
            type="url"
            name="link"
            id="avatarlink"
            placeholder="Ссылка на картинку"
            className="popup__profile popup__input popup__profile_subtitle"
            required
          />
          <span id="avatarlink-error" className="popup__input-error"></span>
        </fieldset>
    </PopupWithForm>
{/* 
    <PopupWithForm 
    name='popup_sure' 
    title='Обновить Вы уверены?' 
    submitname='Да'
    isOpen={}
    /> */}
    <ImagePopup 
    card={selectedCard}
  
    onClose ={ () => closeAllPopups(true)} 
    />

    </div>
  );
}

export default App;
