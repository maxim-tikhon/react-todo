import renderer from 'react-test-renderer';
import CheckBoxInput from './CheckBoxInput';

describe('CheckBoxInput', () => {
	it('renders correctly', () => {
		const output = renderer.create(<CheckBoxInput checked={false} />).toJSON();
		expect(output).toMatchSnapshot();
	});
});
