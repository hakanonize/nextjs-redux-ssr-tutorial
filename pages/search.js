import { useRouter } from 'next/router'
import Nav from '../components/nav'
import SearchBar from '../components/searchbar'
import Link from 'next/link'
import styles from '../styles/Search.module.scss'
import {useState, useEffect} from 'react'; 
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies,addToFavorites } from '../store/actions/movieAction';

const search = ({ movie }) => {
    const [favorites, setFavorites] = useState([]);
    const movies = useSelector(state => state.movie)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());

    },[]);


  
        //localStorage.setItem('Movies',JSON.stringify(movie));

   
        //var key = JSON.parse(localStorage.getItem('Movies'));
      
   
    return (
        <>
        <Nav/>
        <div className={styles.search_container}>

        <SearchBar/>
        <Link href={`/movies/${movie.imdbID}`} key={movie.name}>
            <a>{movie.Title}</a>
            
        </Link>
        <a onClick={() => {
            
            dispatch(addToFavorites(movie))
            
        }}>Favoriye ekle</a>
        <a onClick={() => {dispatch(fetchMovies())}}>Favorileri Göster</a>
        </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
     const name = context.query.name;
     const type = context.query.type;
     const year = context.query.year;

    if(name !== '' && type !== '' && year !== '') {
        var querystring = await fetch(`http://www.omdbapi.com/?t=${name}?type=${type}?y=${year}&apikey=736934c9`)
    }
    else if (year == '' && type == '' )  {
        var querystring = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=736934c9`)
    
    }
    else if (year == ''){
        var querystring = await fetch(`http://www.omdbapi.com/?t=${name}?type=${type}&apikey=736934c9`)
      
    }
    else {
        var querystring = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=736934c9`)
    }
     const movie = await querystring.json();
     
     console.log(movie);

    return {
        props: {
            movie
        }
    }
}

export default search
