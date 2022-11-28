import './App.css';

import Status from './components/Status';

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
      <Status status="loading" />
    </div>
  )
}

export default App

