import React from 'react';
import TimeDisplay from './components/timeDisplay';
import Control from './components/control';
function App() {
  return (
    <div className="App">
      <TimeDisplay time={"00:00.00"} />
      <Control />
    </div>
  );
}

export default App;
