import { useRef } from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({ className, onEnter }) => {
  const inputRef = useRef(null);

  const handlePress = e => {
    if (e.key === "Enter") {
      onEnter(e.target.value);
      inputRef.current.value = "";
    }
  }

	return <input
    type="text"
    className={`${styles.textInput} ${className}`}
    ref={inputRef}
    onKeyDown={handlePress}
  />;
};

export default TextInput;
