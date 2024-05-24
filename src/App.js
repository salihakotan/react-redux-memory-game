import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import { Heading } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
    <h1 >Memory Game</h1>
        <Cards/>
    </div>
  );
}

export default App;
