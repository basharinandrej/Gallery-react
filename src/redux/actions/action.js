import  {    
            FETCH_START,
            FETCH_AUTHORS_SUCCESS,
            FETCH_ERROR,
            FETCH_ALBUM_SUCCESS
        } from './actionTypes'


export const fetchAuthors = () => {
    return async dispatch => {
        dispatch(fetchStart())

        try {
            await fetch('https://jsonplaceholder.typicode.com/users/?_limit=3').then(response => {
                return response.json()
            }).then(json => {

                let newJson = json.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        username: item.username
                    }
                })

                dispatch(fetchAuthorsSuccess(newJson))
            })
        } catch(e) {
            dispatch(fetchError(e))
        }
    }
}

export const fetchAlbum = () => {
    return async dispatch => {
        dispatch(fetchStart())

        try {
            await fetch('https://jsonplaceholder.typicode.com/albums?_embed=photos').then(response => {
                return response.json()
            }).then(json => {
                dispatch(fetchAlbumSuccess(json))
            })
        } catch(e) {
            dispatch(fetchError(e))
        }
    }
}




export const fetchAlbumSuccess = json => {
    return {
        type: FETCH_ALBUM_SUCCESS,
        json
    }
}


export const fetchStart = () => {
    return {
        type: FETCH_START
    }
}

export const fetchAuthorsSuccess = json => {
    return {
        type: FETCH_AUTHORS_SUCCESS,
        json
    }
}

export const fetchError = e => {
    return {
        type: FETCH_ERROR,
        payload: e
    }
}