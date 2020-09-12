import React from 'react';
import './App.css';
import GithubApi from './components/GithubApi';
function App() {
  return (
    <div>
    <div className="navbar navbar-dark bg-secondary">
    <h2 className='text-white'>GitHub Profile Search</h2>
    </div>
<GithubApi />
    </div>
  );
}

export default App;
