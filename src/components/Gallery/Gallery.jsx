import React from 'react'
import { useSelector } from 'react-redux'


const Gallery = props => {
    const currentAlbum = useSelector(({ gallery }) => {
        return gallery.album.filter(el => el.id === +props.match.params.id)
    })
    

    return(
        <div className="main__photos photos">
            <div className="container">
                <h2 className="photos__title">
                    Альбом - {currentAlbum[0].title}
                </h2>

                <ul className="photos__photos-alist photos-alist">
                    {currentAlbum[0].photos.map((photo, index) => {
                        return <li key={index} className="photos-alist__item">
                            <img src={photo.url} alt=""/>
                        </li>
                    })}
                </ul>

            </div>
        </div>
        
    )
}

export default Gallery