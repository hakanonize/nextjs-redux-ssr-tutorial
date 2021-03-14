import styles from './searchbar.module.scss'
import Link from 'next/link'
import { useEffect,useState } from 'react'

const searchbar = () => {
    const [year , setYear] = useState("");
    const [type , setType] = useState("");
    const [name , setName] = useState("");



    const onYearChange = (e) => {
        e.preventDefault();
        setYear( e.target.value);
    
    }

    const onMovieNameChange = (e) => {
        e.preventDefault();
        setName( e.target.value);
    
    }

    const handleTypeChange = (e) => {
        e.preventDefault();
        setType(e.target.value)
    }


    return (
        <div className={styles.search_container}>

        <div className={styles.year}>
          <input onChange={onYearChange} placeholder="Year" type="text"></input>

        </div>
       
        <div className={styles.type}>
        <select onClick={handleTypeChange}>
          <option></option>
          <option>Movie</option>
          <option>Series</option>
          <option>Episode</option>
        </select>
        </div>
        <div className={styles.name}>
          <input onChange={onMovieNameChange} type="text" placeholder="Enter movie name here"></input>
        </div>
        <div className={styles.search_button}>
          <Link href={{pathname:'/search',query:{type: type , year : year, name: name}}}>
          <a>Search</a>
          </Link>

        </div>
        
      </div>
    )
}

export default searchbar
