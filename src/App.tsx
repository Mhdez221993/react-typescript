import './App.css';

import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person person={{fname: 'John', lname: 'Doe'}} />
    </div>
  )
}

export default App

