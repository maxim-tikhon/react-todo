import './App.scss';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
  return (
    <div className='App'>
      <section className='todo-container'>
        <header>
          <h1 className='todo-header'>TODO</h1>
        </header>

        <div className='card'>
          <div className='row'>
            <input type='checkbox' className='custom-checkbox ' />
            <input type='text' />
          </div>
        </div>

        <div className='card'>
          <div className='row'>
            <input type='checkbox' checked className='custom-checkbox ' />
            <span className='task completed'>Read React documentation</span>
          </div>
          <div className='row'>
            <input type='checkbox' className='custom-checkbox ' />
            <span className='task'>Complete React course</span>
            <ClearIcon className='delete-icon' />
          </div>
          <div className='row'>
            <input type='checkbox' className='custom-checkbox ' />
            <span className='task'>Learn English</span>
          </div>
          <div className='row'>
            <input type='checkbox' className='custom-checkbox ' />
            <span className='task'>Listen to music</span>
          </div>
          <div className='row'>
            <input type='checkbox' className='custom-checkbox ' />
            <span className='task'>Cook a dinner for family</span>
          </div>
          <div className='row footer'>
            <span className='total-count'>4 items left</span>
            <div className='buttons-container'>
              <button className='button-link active'>All</button>
              <button className='button-link'>Active</button>
              <button className='button-link'>Completed</button>
            </div>
            <button className='button-link'>Clear Completed</button>
          </div>
        </div>
        <div className='note'>Drag and drop to reoder list</div>
      </section>
    </div>
  );
}

export default App;
