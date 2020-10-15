import React from 'react'
import { connect } from 'react-redux'


import ListAlbumItem from './ListAlbumsItem/ListAlbumItem'
import { fetchAlbum, actionPrevPage } from '../../redux/actions/action'
import ButtonPrev from '../UI/ButtonPrev'



class ListAlbums extends React.Component {


    componentDidMount() {
        this.props.actionPrevPage(this.props.location.pathname)
    }

   

    render() {

        let currentPageId = +this.props.match.params.id 
        let nameAuthors =  this.props.authors[currentPageId - 1].username

        return (
            <div className="body__list-album list-album">
                <div className="container">

                    <div className="app__wrapper-title">
                        <ButtonPrev to="/">
                            Назад
                        </ButtonPrev>
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
        },
        actionPrevPage: url => [
            dispatch(actionPrevPage(url))
        ]
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbums)