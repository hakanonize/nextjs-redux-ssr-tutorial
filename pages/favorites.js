import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies} from '../store/actions/movieAction';


const favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const movies = useSelector(state => state.movie)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
        
    },[]);
    

    return (
        <div>
          
            <a onClick={() => {
                setFavorites(movies.movies)
                console.log(favorites)}}>FAVORİLERİ LİSTELE</a>
                <h1>{favorites.Title}</h1>
        </div>
    )
}

export default favorites
