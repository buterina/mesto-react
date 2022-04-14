import React from "react";

function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="card">
            <img
                className="card__photo"
                src={card.link}
                alt={card.name} 
                onClick={handleClick}/>
            <button
                className="card__delete-button"
                type="button"
                aria-label="Удалить">
            </button>
            <div className="card__place">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__likes">
                    <button
                        className="card__like-button"
                        type="button"
                        aria-label="Нравится">
                    </button>
                    <span className="card__like-count">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;