import React from 'react'
import { useSelector } from 'react-redux'


import Photo from '../Gallery/GalleryItem/GalleryItem'
import Popup from '../Popup/Popup'
import ButtonPrev from '../UI/ButtonPrev/index'


const Gallery = props => {
    const [showPopup, setShowPopup] = React.useState(false)
    const [currentViewPhotoPopup, setCurrentViewPhotoPopup] = React.useState()
    const albumId = +props.match.params.id

    const prevPage = useSelector(({ gallery }) => gallery.prevPage)

    
    const currentAlbum = useSelector(({ gallery }) => {
        return gallery.album.filter(el => el.id === albumId)
    })

    const photos = currentAlbum[0].photos


    const onClickPhotoHandler = photo => {
        setShowPopup(!showPopup)
        setCurrentViewPhotoPopup(photo.id)
    }
    
    const onNextPhotoHandler = lastElId => {

        setCurrentViewPhotoPopup( prev => {
            if (lastElId <= currentViewPhotoPopup) {
                prev = photos[0].id - 1
            }
            return prev + 1
        })
    }


    const onPrevPhotoHnadler = firstElId => {

        setCurrentViewPhotoPopup( prev => {
            if (firstElId >= currentViewPhotoPopup) {
                prev = photos.length + currentViewPhotoPopup
            }   
            return prev - 1
        })
    }

    return(
        <div className="main__photos photos">
            <div className="container">
                <div className="photos__wrapper">
                    <ButtonPrev to={prevPage}>
                        Назад
                    </ButtonPrev>

                    <h2 className="photos__title">
                        Альбом - {currentAlbum[0].title}
                    </h2>
                </div>
                

                <ul className="photos__photos-alist photos-alist">
                    {photos.map((photo, index) => {
                        return <Photo   key={index} 
                                        photo={photo}
                                        onClick={photo => onClickPhotoHandler(photo)}
                                />
                    })}
                </ul>


                {showPopup ? <Popup 
                                onClose={() => setShowPopup(false)}
                                photos={photos}
                                onNext={onNextPhotoHandler}
                                onPrev={onPrevPhotoHnadler}
                                currentViewPhotoPopup={currentViewPhotoPopup}
                            /> 
                            : null }
            </div>
        </div>
        
    )
}

export default Gallery