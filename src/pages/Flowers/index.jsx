import { dahlias } from '../../data/data.js';
import styles from './flowers.module.css';

const Flowers = () => {
    return (
        <div className={styles.flowerContainer}>
            {dahlias.map((dahlia) => (
                <div key={dahlia.id} className={styles.card}>
                    <img src={dahlia.image} alt={dahlia.name} />
                    <h2>{dahlia.name}</h2>
                    <p>{dahlia.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Flowers