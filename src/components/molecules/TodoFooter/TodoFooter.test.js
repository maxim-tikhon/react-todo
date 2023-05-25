import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoFooter from './TodoFooter';
import { FILTER } from '../../../utils/constants';

describe('TodoFooter', () => {
  const mockNumberOfActiveTasks = 2;
  const mockFilter = FILTER.ACTIVE;
  const mockOnChangeFilter = jest.fn();
  const mockOnClearCompletedTasks = jest.fn();

  it('renders correctly', () => {
    const output = renderer.create(<TodoFooter numberOfActiveTasks={3} filter={FILTER.ACTIVE} />).toJSON();
    expect(output).toMatchSnapshot();
  });

  test('displays correct text when numberOfActiveTasks = 0', () => {
    render(<TodoFooter numberOfActiveTasks={0} />);

    const totalCount = screen.getByText('All tasks completed');

    expect(totalCount).toBeInTheDocument();
  });

  test('displays correct text when numberOfActiveTasks = 1', () => {
    render(<TodoFooter numberOfActiveTasks={1} />);

    const totalCount = screen.getByText('1 task left');

    expect(totalCount).toBeInTheDocument();
  });

  test('displays correct text when numberOfActiveTasks > 1', () => {
    render(<TodoFooter numberOfActiveTasks={mockNumberOfActiveTasks} />);

    const totalCount = screen.getByText('2 tasks left');

    expect(totalCount).toBeInTheDocument();
  });

  test('displays 3 filter links (All, Active, Completed)', () => {
    render(<TodoFooter />);

    const allFilterLink = screen.getByText('All');
    const activeFilterLink = screen.getByText('Active');
    const completedFilterLink = screen.getByText('Completed');

    expect(allFilterLink).toBeInTheDocument();
    expect(activeFilterLink).toBeInTheDocument();
    expect(completedFilterLink).toBeInTheDocument();
  });

  test('calls onChangeFilter callback with correct value when filter link is clicked', () => {
    render(<TodoFooter filter={mockFilter} onChangeFilter={mockOnChangeFilter} />);

    const allFilterLink = screen.getByText('All');
    const activeFilterLink = screen.getByText('Active');
    const completedFilterLink = screen.getByText('Completed');

    fireEvent.click(allFilterLink);
    fireEvent.click(activeFilterLink);
    fireEvent.click(completedFilterLink);

    expect(mockOnChangeFilter).toHaveBeenCalledTimes(3);
    expect(mockOnChangeFilter).toHaveBeenNthCalledWith(1, FILTER.ALL);
    expect(mockOnChangeFilter).toHaveBeenNthCalledWith(2, FILTER.ACTIVE);
    expect(mockOnChangeFilter).toHaveBeenNthCalledWith(3, FILTER.COMPLETED);
  });

  test('calls onClearCompletedTasks callback when "Clear Completed" link is clicked', () => {
    render(<TodoFooter onClearCompletedTasks={mockOnClearCompletedTasks} />);

    const clearCompletedLink = screen.getByText('Clear Completed');

    fireEvent.click(clearCompletedLink);

    expect(mockOnClearCompletedTasks).toHaveBeenCalledTimes(1);
  });
});
