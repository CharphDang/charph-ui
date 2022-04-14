import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tooltip from '../common/components/Tooltip';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Tooltip content='Hello Vite + React!'>
          <div className='esslip'>Hello Vite + React!</div>
        </Tooltip>
        <Tooltip content='Hello Vite + React!'>
          <div className='esslip'>Hello</div>
        </Tooltip>
        <p>
          <button type='button' onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
