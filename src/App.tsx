import './App.css';

import Greet from './components/Greet';
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
      <Greet name='Doe' isLoggedIn={true} />
    </div>
  )
}

export default App

