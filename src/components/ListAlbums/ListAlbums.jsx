import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


import ListAlbumItem from './ListAlbumsItem/ListAlbumItem'
import { fetchAlbum } from '../../redux/actions/action'



class ListAlbums extends React.Component {



    componentDidMount() {
        this.props.fetchAlbum()
    }



    render() {
        let currentPageId = +this.props.match.params.id 
        let nameAuthors =  this.props.authors[currentPageId - 1].username

        return (
            <div className="body__list-album list-album">
                <div className="container">

                    <div className="app__wrapper-title">
                        <NavLink to="/" className="app__link-prev">
                            Назад
                        </NavLink>
                        <h2 className="app__title-albums">
                            { currentPageId } - { nameAuthors }
                        </h2>
                    </div>
                
                    <ul className="list-albums">
                        {this.props.albums.map((album, index) => {
                            return album.userId === currentPageId
                            ?   <ListAlbumItem
                                    key={index} 
                                    album={album} 
                                />
                            : null
                        })}
                    </ul>

                </div>
            </div>
        )
    }   
}


const mapStateToProps = state => {
    return {
        albums: state.gallery.album,
        authors: state.gallery.authors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbum: () => {
            dispatch(fetchAlbum())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbums)