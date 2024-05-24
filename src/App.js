import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import { Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectScore } from './redux/cards/cardsSlice';

function App() {


  const scoreSelector = useSelector(selectScore)

  return (
    <div className="App">
    <div className='heading-area'>
    <h1>Memory Game</h1>
    <h2>Score: {scoreSelector}</h2>
    </div>
        <Cards/>
      

    </div>
  );
}

export default App;
