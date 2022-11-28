import './App.css';

import CustomeComponent from './components/html/CustomeComponent';

function App() {
  return (
    <div className="App">
     <CustomeComponent name='Doe' isLoggedIn={true} />
    </div>
  )
}

export default App
