import * as types from '../types';

const initialState = {
    movies : []
}
export const movieReducer = (state = initialState, action) => {

    switch(action.type){
        case types.GET_MOVIES:
            return {
             ...state,
             movies: action.payload
            }
        case types.ADD_FAVORITES:
            return{
            ...state,
            movies: [...state.movies, ...action.payload]

            }
            default:
                return state
        
    }
} 