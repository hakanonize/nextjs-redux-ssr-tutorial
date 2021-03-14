import Head from 'next/head'
import Link from "next/link";
import styles from "./layout.module.scss";


const Layout = ( { children, title = "Movie Up" }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
            </Head>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout
