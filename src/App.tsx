import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const person = {
    fname: 'Bruse',
    lname: 'wayne'
  }

  const personList = [
    {
      fname: 'Clark',
      lname: 'Kane'
    },
    {
      fname: 'Bruse',
      lname: 'wayne'
    }
  ]

  return (
    <div className="App">
      <Greet name="Doe" messageCount={0} isLoggedIn={false} />
      <Person person={person} />
      <PersonList persons={personList} />
    </div>
  )
}

export default App

