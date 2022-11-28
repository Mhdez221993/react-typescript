import './App.css';

import List from './components/generics/List';

function App() {
  return (
    <div className="App">
      {/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} /> */}
      <List items={[{id: 1, first: 'Bruce', last: 'Wayne'}]} onClick={(item) => console.log(item)} />
    </div>
  )
}

export default App
