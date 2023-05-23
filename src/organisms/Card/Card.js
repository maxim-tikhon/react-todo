import classNames from 'classnames';
import styles from './Card.module.scss';

function Card({ children, single }) {
	const cardClass = classNames(styles.card, {
		[styles.single]: single,
	});

	return <div className={cardClass}>{children}</div>;
}

export default Card;
