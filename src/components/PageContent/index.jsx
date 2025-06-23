import styles from './pageContent.module.css'

const PageContent = ({ children }) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default PageContent