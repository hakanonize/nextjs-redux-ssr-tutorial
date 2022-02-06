import Nav from '../../../components/nav'
import styles from './movies.module.scss'
import Layout from '../../../components/Layout'

const index = ({movie}) => {
    return (
        <Layout>
           
         <Nav />
         
        <div className={styles.route_container}>
            <div className={styles.routes}>
              <span className={styles.yellow}>Home</span> / <span>{movie.Title}</span>
            </div>
            
        </div>

     
        </Layout>
       
      
    )
}

export const getServerSideProps = async (context) => {
   const name = context.params.id;
   
    var querystring = await fetch(`http://www.omdbapi.com/?i=${name}&apikey=`)
  
    const movie = await querystring.json();
    
    console.log(movie);

   return {
       props: {
           movie
       }
   }
}
export default index
