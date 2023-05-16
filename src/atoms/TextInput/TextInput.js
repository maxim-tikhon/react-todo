import styles from "./TextInput.module.scss";

const TextInput = ({ className, onEnter }) => {
  const handlePress = e => {
    if (e.key === "Enter") {
      onEnter(e.target.value);
    }
  }

	return <input
    type="text"
    className={`${styles.textInput} ${className}`}
    onKeyDown={handlePress}
  />;
};

export default TextInput;
