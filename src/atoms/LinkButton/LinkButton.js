import styles from './LinkButton.module.scss';

function LinkButton({ children, isActive, onClick }) {
	const className = isActive ? `${styles.linkButton} ${styles.active}` : styles.linkButton;

	return (
		<button type="button" className={className} onClick={onClick}>
			{children}
		</button>
	);
}

export default LinkButton;
