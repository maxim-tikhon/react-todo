import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
	it('renders correctly', () => {
		const output = renderer.create(<TextInput placeholder="Test" />).toJSON();
		expect(output).toMatchSnapshot();
	});

	it('calls onEnter callback with input value on Enter key press', () => {
		const onEnterMock = jest.fn();
		render(<TextInput onEnter={onEnterMock} />);

		const inputElement = screen.getByRole('textbox');
		const inputValue = 'Test value';

		fireEvent.change(inputElement, { target: { value: inputValue } });
		fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

		expect(onEnterMock).toHaveBeenCalledTimes(1);
		expect(onEnterMock).toHaveBeenCalledWith(inputValue);
	});

	it('resets input value to empty on Enter key press', () => {
		const onEnterMock = jest.fn();
		render(<TextInput onEnter={onEnterMock} />);

		const inputElement = screen.getByRole('textbox');

		fireEvent.change(inputElement, { target: { value: 'Test value' } });
		fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

		expect(inputElement.value).toBe('');
	});
});
