import renderer from 'react-test-renderer';
import TodoFooter from './TodoFooter';
import { FILTER } from '../../utils/constants';

describe('TodoFooter', () => {
	it('renders correctly', () => {
		const output = renderer.create(<TodoFooter numberOfActiveTasks={3} filter={FILTER.ACTIVE} />).toJSON();
		expect(output).toMatchSnapshot();
	});
});
