import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import TaskItem from './TaskItem';

describe('TaskItem', () => {
  const mockTask = {
    id: 1,
    description: 'Task description',
    completed: false,
  };

  const mockOnDeleteTask = jest.fn();
  const mockOnCheckTask = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const task = {
      id: 1,
      description: 'Test Task',
      completed: true,
    };

    const output = renderer.create(<TaskItem task={task} />).toJSON();
    expect(output).toMatchSnapshot();
  });

  it('renders task description', () => {
    render(<TaskItem task={mockTask} />);

    const taskDescription = screen.getByText('Task description');

    expect(taskDescription).toBeInTheDocument();
  });

  test('renders unchecked checkbox and active task when task is not completed', () => {
    const task = { ...mockTask };

    render(<TaskItem task={task} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox.checked).toBe(false);
  });

  test('renders checked checkbox and completed task when task is completed', () => {
    const completedTask = { ...mockTask, completed: true };

    render(<TaskItem task={completedTask} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox.checked).toBe(true);
  });

  test('calls onDeleteTask callback when ClearIcon is clicked', () => {
    const task = { ...mockTask };

    render(<TaskItem task={task} onDeleteTask={mockOnDeleteTask} onCheckTask={mockOnCheckTask} />);

    const clearIcon = screen.getByTestId('ClearIcon');

    fireEvent.click(clearIcon);

    expect(mockOnDeleteTask).toHaveBeenCalledTimes(1);
    expect(mockOnDeleteTask).toHaveBeenCalledWith(1);
  });

  test('calls onCheckTask callback when task is clicked', () => {
    const task = { ...mockTask };

    render(<TaskItem task={task} onDeleteTask={mockOnDeleteTask} onCheckTask={mockOnCheckTask} />);

    const taskDescription = screen.getByText('Task description');

    fireEvent.click(taskDescription);

    expect(mockOnCheckTask).toHaveBeenCalledTimes(1);
    expect(mockOnCheckTask).toHaveBeenCalledWith({ id: 1, checked: true });
  });

  test('calls onCheckTask callback when checkbox is clicked', () => {
    const task = { ...mockTask };

    render(<TaskItem task={task} onDeleteTask={mockOnDeleteTask} onCheckTask={mockOnCheckTask} />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(mockOnCheckTask).toHaveBeenCalledTimes(1);
    expect(mockOnCheckTask).toHaveBeenCalledWith({ id: 1, checked: true });
  });
});
