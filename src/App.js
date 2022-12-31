import { useEffect } from 'react';
import Sub from './Sub';
import Third from './Third';
import { num } from './Sub';

function App() {
  return (
    <div>
      <Sub />
      <Third />
      {num}
      Hello World!
    </div>
  );
}

export default App;
