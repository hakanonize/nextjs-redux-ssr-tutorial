import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies,addToFavorites } from '../store/actions/movieAction';
import { useEffect,useState } from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/nav';
import SearchBar from '../components/searchbar'
import Layout from "../components/Layout"


export default function Home() {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie)
   

  
     
  return (
    <Layout>
  
      
     
      <Nav/>
      
      <div className={styles.poster}>
        <div className={styles.poster_text}>
          <p>Welcome to <br></br> </p>
          <p>MovieUP</p>
        </div>
        <div className={styles.poster_detail}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
        </div>
      </div>

      <SearchBar/>
      
      
      <div className={styles.popular_movies}>
        <p>Popular Movies</p>
        <button>View More</button>
      </div>

      <div className={styles.movie_grid_container}>
        <div className={styles.movie_grid}>
            <div className={styles.movie_poster}>

            </div>
            <div className={styles.movie_details}>
              <div className={styles.upper_info}>

                <div className={styles.upper_left}>
                    <div className={styles.imdb_icon}>
                          IMDB
                        </div>
                        <div className={styles.imdb_point}>
                          <span>8.8 </span>
                        
                        </div>
                  </div>
                  

                  <div className={styles.upper_right}>
                       <div>Action</div>
                       <div>Biography</div>
                  </div>

                  <div className={styles.movie_year}>
                    <span> 2019</span>
                  </div>
                 
                  
              </div>
             <div className={styles.movie_info}>
              <div className={styles.movie_title}>
                <span>The Godfather</span>
              </div>

              <div className={styles.movie_detail}>
                <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</p>
              </div>
             </div>

             <div className={styles.movie_footer}>
               <button onClick={() => dispatch(addToFavorites())}>Add to favorites</button>
                <p>View Details</p>
             </div>

            </div>

        </div>

      </div>
      {/* <h1>{movies.movies[0].Title}</h1> */}
     
   
    </Layout>
  )
}
