import React from 'react';
import SearchFilter from './SearchFilter';

function App() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

  return (
    <div className="App">
      <SearchFilter items={items} />
    </div>
  );
}

export default App;
