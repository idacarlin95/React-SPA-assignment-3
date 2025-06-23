import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>About Page</h2>
                <p>Welcome to the about page!</p>
            </div>
        </div>
    )
}

export default About