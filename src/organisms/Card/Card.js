import styles from './Card.module.scss';

function Card({ children }) {
	return <div className={styles.card}>{children}</div>;
}

export default Card;
