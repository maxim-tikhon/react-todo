import styles from './CheckBoxInput.module.scss';

function CheckBoxInput({ disabled, checked, onCheck }) {
	return (
		<input
			type="checkbox"
			disabled={disabled}
			checked={checked}
			onChange={(e) => onCheck(e.target.checked)}
			className={styles.customCheckbox}
		/>
	);
}

export default CheckBoxInput;