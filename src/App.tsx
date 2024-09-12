import './App.css';
import Word from './fridge/Word';
import DropZone from './fridge/DropZone';
import Portfolio from './Portfolio';
import { Flex } from 'antd';

let my_words = [
  'welcome', 'shout', 'the',  'hello', 'world', 'foo', 'a', 'cats', 'beauty', 'programmatically', 'joy', 'peaceful',
  'tomorrow', 'whirlwind', 'oneiric', 'sunshine', 'perplexing', 'and', 'nor', 'whisper', 'flowers',
  'sing', 'grow', 'stars', 'computers', 'today', 'dark', 'glow', 'dance', 'delicious', 'run',
  'an', 'that', 'wonder', 'yesterday', 'distracted', 'imminent'
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Word word={'Sophia'} fontSize='36px'/>
        <Word word={'Gigliotti'} fontSize='36px'/>
      </header>
      <Portfolio/>
      <Flex wrap style={{ maxWidth: "100%", padding: "2em"}} vertical={false}>
        {my_words.map(function(word, i){
            return <Word word={word} key={i}/>;}
      )} </Flex>
      <DropZone/>
    </div>
  );
}

export default App;
