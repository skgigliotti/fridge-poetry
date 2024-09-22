import './App.css';
import Word from './fridge/Word';
import DropZone from './fridge/DropZone';
import Portfolio from './Portfolio';
import { Flex } from 'antd';

let my_words = [
  'welcome', 'shout', 'the',  'hello', 'world', 'foo', '?', 'a', 'cats', 'beauty', 'programmatically', 'joy', 'peaceful',
  'tomorrow', 'whirlwind', 'oneiric', 'in', 'sunshine', '.', 'perplexing', 'on', 'and', 'nor', 'whisper', 'flowers',
  'sing', 'grow', 'stars', 'at', 'computers', 'today', 'dark', 'glow', 'dance', 'delicious', 'run',
  'an', 'that', 'wonder', 'to', 'yesterday', 'with', 'distracted', 'imminent', 'for', '!', 'very', 'friend', 'by'
]


function App() {
  return (
    <div className="App">
      <Flex wrap style={{ maxWidth: "100%", padding: "2em"}} vertical={false}>
        {my_words.map(function(word, i){
            return <Word word={word} key={i}/>;}
      )} </Flex>
      <DropZone/>
    </div>
  );
}

export default App;
