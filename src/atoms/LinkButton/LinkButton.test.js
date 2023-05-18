import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
	it('renders correctly', () => {
		const output = renderer.create(<LinkButton isActive>Test Bustton</LinkButton>).toJSON();
		expect(output).toMatchSnapshot();
	});

	it('displays the text inside the button', () => {
		const buttonText = 'Test button';
		render(<LinkButton>{buttonText}</LinkButton>);

		const buttonElement = screen.getByText(buttonText);

		expect(buttonElement).toBeInTheDocument();
	});

	it('calls onClick callback when the button is clicked', () => {
		const onClickMock = jest.fn();
		render(<LinkButton onClick={onClickMock}>Button</LinkButton>);

		const buttonElement = screen.getByText('Button');
		fireEvent.click(buttonElement);

		expect(onClickMock).toHaveBeenCalledTimes(1);
	});

	it('applies "active" class to the button when isActive prop is true', () => {
		render(<LinkButton isActive>Button</LinkButton>);

		const buttonElement = screen.getByText('Button');

		expect(buttonElement.classList.contains('active')).toBeTruthy();
	});
});
