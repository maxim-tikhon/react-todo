import { useRef } from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.scss';

function TextInput({ className, placeholder, onEnter }) {
	const inputRef = useRef(null);

	const handlePress = (e) => {
		if (e.key === 'Enter' && e.target.value) {
			onEnter(e.target.value);
			inputRef.current.value = '';
		}
	};

	return (
		<input
			type="text"
			className={classNames(styles.textInput, className)}
			placeholder={placeholder}
			ref={inputRef}
			onKeyDown={handlePress}
		/>
	);
}

export default TextInput;
