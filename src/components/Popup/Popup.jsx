import React from 'react'



const Popup = ({ onClose, photos, onNext, onPrev, currentViewPhotoPopup }) => {

    return(
        <div className="popup">


            <div className="popup__content">
                <span className="popup__prev" onClick={id => onPrev(photos[0].id)}>Назад</span>

                <p className="popup__close"
                    onClick={onClose}>
                    Закрыть
                </p>

                { photos.map((photo, index) => {
                   return currentViewPhotoPopup === photo.id 
                    ? <img src={photo.url} key={index} className="popup__img" alt="img"/>
                    : null
                })}

                <span   className="popup__next"
                        onClick={id => onNext(photos[photos.length - 1].id)}>
                    Вперёд
                </span>
            </div>

        </div>
    )
}

export default Popup