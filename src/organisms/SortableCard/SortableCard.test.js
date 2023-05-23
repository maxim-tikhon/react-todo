import renderer from 'react-test-renderer';
import SortableCard from './SortableCard';

describe('SortableCard', () => {
	it('renders correctly', () => {
		const output = renderer.create(<SortableCard>Test</SortableCard>).toJSON();
		expect(output).toMatchSnapshot();
	});
});
