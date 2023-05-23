import classNames from 'classnames';
import styles from './LinkButton.module.scss';

function LinkButton({ children, isActive, onClick }) {
	const buttonClass = classNames(styles.linkButton, {
		[styles.active]: isActive,
	});

	return (
		<button type="button" className={buttonClass} onClick={onClick}>
			{children}
		</button>
	);
}

export default LinkButton;
