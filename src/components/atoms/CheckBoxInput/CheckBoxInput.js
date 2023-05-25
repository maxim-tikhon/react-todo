import styles from './CheckBoxInput.module.scss';

function CheckBoxInput({ disabled, checked, label, onCheck }) {
  return (
    <>
      <input
        type="checkbox"
        id={label}
        disabled={disabled}
        checked={checked}
        onChange={(e) => onCheck(e.target.checked)}
        className={styles.customCheckbox}
      />

      {label && (
        <label className={styles.label} htmlFor={label} data-testid="task">
          {label}
        </label>
      )}
    </>
  );
}

export default CheckBoxInput;
