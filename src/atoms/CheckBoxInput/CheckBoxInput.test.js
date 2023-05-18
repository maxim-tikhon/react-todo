import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import CheckBoxInput from './CheckBoxInput';

describe('CheckBoxInput', () => {
	it('renders correctly', () => {
		const output = renderer.create(<CheckBoxInput checked={false} />).toJSON();
		expect(output).toMatchSnapshot();
	});

	it('renders a checked checkbox when checked prop is true', () => {
		const { container } = render(<CheckBoxInput checked />);
		const checkboxElement = container.querySelector('input[type="checkbox"]');

		expect(checkboxElement.checked).toBe(true);
	});

	it('renders an unchecked checkbox when checked prop is false', () => {
		const { container } = render(<CheckBoxInput checked={false} />);
		const checkboxElement = container.querySelector('input[type="checkbox"]');

		expect(checkboxElement.checked).toBe(false);
	});

	it('triggers the onCheck callback with the checked value on click', () => {
		const onCheckMock = jest.fn();
		const { container } = render(<CheckBoxInput checked={false} onCheck={onCheckMock} />);
		const checkboxElement = container.querySelector('input[type="checkbox"]');

		fireEvent.click(checkboxElement);

		expect(onCheckMock).toHaveBeenCalledTimes(1);
		expect(onCheckMock).toHaveBeenCalledWith(true);
	});
});
