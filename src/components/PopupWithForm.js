function PopupWithForm(props) {
  return (
    <div
      className={
        `popup popup_${props.name}` + (props.isOpen && " popup_active")
      }
    >
      <form className="popup__container" name={props.name} noValidate onSubmit={props.onSubmit}>
        <button
          type="button"
          className="popup__close popup__close-profile"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__save popup__save-profile">
          {props.submitname}
        </button>
      </form>
    </div>
  );
}

// function PopupWithPopup() {
//     return (
//     <>
// <div className="popup popup_edit">
//       <form className="popup__container" novalidate>
//         <button
//           type="button"
//           className="popup__close popup__close-profile"
//         ></button>
//         <h2 className="popup__title">Редактировать профиль</h2>
//         <fieldset className="popup__fieldset">
//           <input
//             type="text"
//             name="name"
//             id="username"
//             placeholder="Имя"
//             minlength="2"
//             maxlength="40"
//             className="popup__profile popup__profile_title popup__input"
//             required
//           />
//           <span id="username-error" className="popup__input-error"></span>
//         </fieldset>
//         <fieldset className="popup__fieldset">
//           <input
//             type="text"
//             name="about"
//             id="about"
//             placeholder="О себе"
//             minlength="2"
//             maxlength="200"
//             className="popup__profile popup__profile_subtitle popup__input"
//             required
//           />
//           <span id="about-error" className="popup__input-error"></span>
//         </fieldset>
//         <button type="submit" className="popup__save popup__save-profile">
//           Сохранить
//         </button>
//       </form>
//     </div>
//     <div className="popup popup_elements">
//       <form className="popup__container_elements popup__container" novalidate>
//         <button
//           type="button"
//           className="popup__close popup__close_elements"
//         ></button>
//         <h2 className="popup__title_elements popup__title">Новое место</h2>
//         <fieldset className="popup__fieldset">
//           <input
//             type="text"
//             name="name"
//             id="imgname"
//             placeholder="Название"
//             minlength="2"
//             maxlength="30"
//             className="popup__profile popup__input popup__profile_title popup__profile_elements popup__profile_title_elements"
//             required
//           />
//           <span id="imgname-error" className="popup__input-error"></span>
//         </fieldset>
//         <fieldset className="popup__fieldset">
//           <input
//             type="url"
//             name="link"
//             id="imglink"
//             placeholder="Ссылка на картинку"
//             className="popup__profile popup__input popup__profile_subtitle popup__profile_elements popup__profile_subtitle_elements"
//             required
//           />
//           <span id="imglink-error" className="popup__input-error"></span>
//         </fieldset>
//         <button type="submit" className="popup__save popup__save_elements">
//           Создать
//         </button>
//       </form>
//     </div>
//     <div className="popup popup_sure">
//       <div className="popup__container">
//         <button type="button" className="popup__close popup__close_sure"></button>
//         <h2 className="popup__title_sure popup__title">Вы уверены?</h2>
//         <button type="button" className="popup__save popup__sure">Да</button>
//       </div>
//     </div>
//     <div className="popup popup_avatar">
//       <form className="popup__container popup__container_avatar" novalidate>
//         <button type="button" className="popup__close popup__close-avatar"></button>
//         <h2 className="popup__title">Обновить аватар</h2>
//         <fieldset className="popup__fieldset">
//           <input
//             type="url"
//             name="link"
//             id="avatarlink"
//             placeholder="Ссылка на картинку"
//             className="popup__profile popup__input popup__profile_subtitle"
//             required
//           />
//           <span id="avatarlink-error" className="popup__input-error"></span>
//         </fieldset>
//         <button type="submit" className="popup__save popup__save-avatar">
//           Сохранить
//         </button>
//       </form>
//     </div>
//     </>
//     );
//   }

export default PopupWithForm;
