import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

const App = () => {
    const [state, setState] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <button
                    className="App-link"
                    onClick={() => setState((x) => !x)}
                >
                    Learn React {state ? 'true' : 'false'}
                </button>
            </header>
        </div>
    );
};

export default App;
