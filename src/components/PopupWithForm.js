function PopupWithForm({ name, title, children, buttonText, isOpen, onClose }) {
    return (
        <article className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button
                    className="popup__close-button"
                    type="button"
                    aria-label="Закрыть"
                    onClick={onClose}>
                </button>
                <h2 className="popup__title">{title}</h2>
                <form
                    className="popup__form" 
                    name={name}
                    noValidate>

                    {children}

                    <button
                        className="popup__button"
                        type="submit">{buttonText}
                    </button>
                </form>
            </div>
        </article>
    )
}

export default PopupWithForm;