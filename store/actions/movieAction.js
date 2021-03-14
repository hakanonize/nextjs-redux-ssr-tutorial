import * as types from '../types'

export const fetchMovies = () => async dispatch => {
    var key = JSON.parse(localStorage.getItem('Movies'));
    dispatch({
        type: types.GET_MOVIES,
        payload:[key]
    })

}

export const addToFavorites = (item) => {
    
   return {
       type: types.ADD_FAVORITES,
       payload: [item]
   }

}
