import React from 'react'
import { connect } from 'react-redux'



import { ItemAuthor } from './ItemAuthor/index'
import { fetchAuthors } from '../../redux/actions/action'
import { fetchAlbum } from '../../redux/actions/action'



class ListAuthor extends React.Component {

    componentDidMount() {
        this.props.fetchAuthors()
    }

    onClickItemAuthorHandler = () => {
        this.props.fetchAlbum()
    }

    render() {
        return (
            <div className="body__app app">
                <div className="container">
                    <h1 className="app__title title">Фотогаллерея</h1>

                    <h2 className="title">Список авторов</h2>
                    
                    <ol className="main-alist">
                        {!this.props.isLoading ? this.props.authors.map((authors, index) => {
                            return <ItemAuthor 
                                        key={index}
                                        authors={authors} 
                                        index={index}
                                        onClick={this.onClickItemAuthorHandler}
                                    />
                        }) : <p>Загружаем.....</p>
                    }
                    </ol>

                </div>
		    </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authors: state.gallery.authors,
        isLoading: state.gallery.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAuthors: () => {
            dispatch(fetchAuthors())
        },
        fetchAlbum: () => {
            dispatch(fetchAlbum())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAuthor)
