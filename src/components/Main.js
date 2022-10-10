import React, { useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card";
import pencil from "../images/pencil.svg";

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileData(), api.getInitialCards()])
      .then(([profile, cards]) => {
        setUserName(profile.name);
        setUserDescription(profile.about);
        setUserAvatar(profile.avatar);
        // cards.forEach((card) => {
        //   card.canDelete = card.owner._id == profile._id;
        //   card.iLike = false;
        //   card.likes.forEach((like) => {
        //     if (like._id === profile._id) {
        //       card.iLike = true;
        //     }
        //   });
        // });
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка; ${err}`);
      });
  });

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button type="submit" className="profile__button-change">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар"
              onClick={props.onEditAvatar}
            />
            <img className="profile__pencil" src={pencil} alt="Карандаш" />
          </button>
          <div className="profile__text">
            <div className="profile__edit">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                className="profile__button-add"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__button-edit"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
export default Main;
