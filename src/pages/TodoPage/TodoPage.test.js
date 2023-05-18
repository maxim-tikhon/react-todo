import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TodoPage from './TodoPage';
import store from '../../store/store';

describe('TodoPage', () => {
	it('renders correctly', () => {
		const output = renderer
			.create(
				<Provider store={store}>
					<TodoPage />
				</Provider>
			)
			.toJSON();
		expect(output).toMatchSnapshot();
	});
});
