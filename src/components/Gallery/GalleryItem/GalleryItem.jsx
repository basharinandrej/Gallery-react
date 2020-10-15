import React from 'react'




const Photo = ({ photo, onClick }) => {

    return <li onClick={() => onClick(photo)} className="photos-alist__item">
                <img src={photo.url} alt="img"/>
            </li>
    
}

export default Photo