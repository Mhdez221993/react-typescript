import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  const person = {
    fname: 'Bruse',
    lname: 'wayne'
  }

  return (
    <div className="App">
      <Greet name="Doe" messageCount={0} isLoggedIn={false} />
      <Person person={person} />
    </div>
  )
}

export default App

