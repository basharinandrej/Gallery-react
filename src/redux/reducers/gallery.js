import { FETCH_AUTHORS_SUCCESS,
        FETCH_START,
        FETCH_ALBUM_SUCCESS } 
        from '../actions/actionTypes'

const initialState = {
    authors: [],
    album: [],
    isLoading: false
}

export const gallery = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_AUTHORS_SUCCESS:
            return {
                ...state,
                authors: action.json,
                isLoading: false
            }
        case FETCH_ALBUM_SUCCESS:
            return {
                ...state,
                album: action.json
            }




        
        default: return state
    }
}
