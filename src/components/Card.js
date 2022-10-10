function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="element">
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button type="button" className="element__basket"></button>
      <div className="element__text">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likes">
          <button type="button" className="element__heart"></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
