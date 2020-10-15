import { FETCH_AUTHORS_SUCCESS,
        FETCH_START,
        FETCH_ALBUM_SUCCESS,
        PREV_PAGE } 
        from '../actions/actionTypes'

const initialState = {
    authors: [],
    album: [],
    isLoading: false,
    prevPage: null
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
        case PREV_PAGE:
            return {
                ...state,
                prevPage: action.payload
            }



        
        default: return state
    }
}
