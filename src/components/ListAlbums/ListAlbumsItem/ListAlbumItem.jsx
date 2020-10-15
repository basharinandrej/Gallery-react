import React from 'react'
import {NavLink} from 'react-router-dom'



const ListAlbumItem = ({ album }) => {


    return  <NavLink to={"/gallery/" + album.id} 
                    className="list-albums__link">
                <li className="list-albums__item">
                    <h3 className="list-albums__title">
                        {album.title}
                    </h3>

                    <img 
                        src={album.photos[0].url} 
                        alt="img"/>
                

                    <span>
                        Всего фотографий: <b>{album.photos.length}</b>
                    </span>
                </li>
            </NavLink>
    
}

export default ListAlbumItem