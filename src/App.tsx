import './App.css';

import Heading from './components/Heading';
import Oscar from './components/Oscar';

function App() {
  return (
    <div className="App">
      <Heading>
        Pasing children
      </Heading>
      <Oscar>
        <Heading>
          Oscar goes to Dicaprio
        </Heading>
      </Oscar>
    </div>
  )
}

export default App

