import React from "react"
import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
          <div className={styles.videobackground}>
            <video autoPlay loop muted playsInline>
              <source src="/hcbfdd2ba_4153440.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
    
          <div className={styles.content}>
            <h1>Welcome to the House of Flowers</h1>
            <p>Explore our beautiful collection of flowers.</p>
          </div>
        </div>
      );
}

export default Home