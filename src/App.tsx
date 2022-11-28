import './App.css';

import Text from './components/polymorphic/Text';

function App() {
  return (
    <div className="App">
     <Text as='h1' color='primary' size='lg'>
        Heading
     </Text>

     <Text as='p' color='secondary' size='sm'>
        Paragraph
     </Text>

     <Text as='p' htmlFor='someId' color='secondary' size='sm'>
        Label
     </Text>
    </div>
  )
}

export default App
