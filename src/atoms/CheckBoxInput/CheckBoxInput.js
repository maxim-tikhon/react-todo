import styles from "./CheckBoxInput.module.scss";

const CheckBoxInput = (props) => {
  // fix onChange
  return <input type="checkbox" onChange={() => {}} {...props} className={styles.customCheckbox} />;
}

export default CheckBoxInput;
