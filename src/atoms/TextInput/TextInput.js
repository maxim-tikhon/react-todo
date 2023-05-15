import styles from "./TextInput.module.scss";

const TextInput = ({className, ...props}) => {
  return (
    <input
      type="text"
      {...props}
      className={`${styles.textInput} ${className}`}
    />
  );
}

export default TextInput;
