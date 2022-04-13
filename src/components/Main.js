import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getProfile(), api.getInitialCards()])
            .then(([userData, cardListData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardListData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (

        <main className="main">

            <section className="profile">
                <div className="profile__info">
                    <div className="profile__photo">
                        <img
                            className="profile__avatar"
                            src={userAvatar}
                            alt="Фотография пользователя" />
                        <button
                            className="profile__avatar-button"
                            type="button"
                            aria-label="Редактировать аватар"
                            onClick={onEditAvatar}>
                        </button>
                    </div>
                    <div className="profile__description">
                        <div className="profile__name">
                            <h1 className="profile__title">{userName}</h1>
                            <button
                                className="profile__edit-button"
                                type="button"
                                aria-label="Редактировать профиль"
                                onClick={onEditProfile}>
                            </button>
                        </div>
                        <p className="profile__bio">{userDescription}</p>
                    </div>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить карточку"
                    onClick={onAddPlace}>
                </button>
            </section>

            <section className="cards">
                <ul className="cards__gallery">
                    {cards.map(card => (
                        <Card 
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}/>
                    ))}
                </ul>
            </section>

        </main>
    )
}


export default Main;