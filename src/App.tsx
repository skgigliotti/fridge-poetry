import './App.css';
import Word from './fridge/Word';
import DropZone from './fridge/DropZone'
import Photo from './fridge/Photo'
import { Flex } from 'antd';

let my_words = [
  'hello', 'world', 'I', 'am', 'a', 'computer', 'scientist', '.',
  'I', 'am', 'passionate', 'about', 'creating', 'technology', 'for', 'social', 'good',
  'and', 'empowering', 'underrepresented', 'students', 'to', 'learn', 'the', 'art', 'of', 'programming', '.',
  'My', 'current', 'side', 'hustle', 'is', 'cat', 'sitting', 'to', 'fund', 'my', 'photography', 'projects', '.',
  'New', 'inquires', 'welcome', '!' 
]
let images = 
  [
    {'img_path': './assets/images/bridge.jpg', 'alt_text': 'Golden Gate Bridge at Golden Hour with Birds', 'vertical': true},
    {'img_path': './assets/images/don_wizard.jpg', 'alt_text': ''},
    {'img_path':'./assets/images/hierve_el_agua.jpg', 'alt_text': ''},
    {'img_path': './assets/images/akihabara.jpg', 'alt_text': ''},
    {'img_path': './assets/images/ferry_building.jpg', 'alt_text': '', 'vertical': true},
    {'img_path': './assets/images/bonita_tunnel.jpg', 'alt_text': '', 'vertical': true},
    {'img_path': './assets/images/macro_bee.jpg', 'alt_text': '', 'vertical': true},
    {'img_path': './assets/images/transamerica.jpg', 'alt_text': '', 'vertical': true},
  ]

let poems = [
  [['hello', 'world'], ['I', 'am', 'a', 'computer', 'scientist'], ['passionate', 'about', 'creating', 'technology', 'for', 'social', 'good']],
  [[], [], []],
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Word className='Word' word={'Sophia'}/>
        <Word className='Word' word={'Gigliotti'}/>
      </header>
      <Flex wrap vertical={false} justify="space-evenly" style={{ padding: '2em' }}>
          <Flex wrap style={{maxWidth: "50%"}}>
          {
            poems.map(function(poem, i){
              return (
                poem.map(function(line, j){
                  return (<Flex wrap style={{ minWidth: "100%", justifyContent: "flex-end" }} vertical={false} key={`${i}${j}`}>{line.map(function(word, k){
                    return <Word word={word} key={`${i}${j}${k}`}/>;
                  })} </Flex>)
                })
              )
            })
          }
          </Flex>
          <div style={{ maxWidth: "50%" }}>
          <Photo img_path='./assets/images/bridge.jpg' alt_text="Golden Gate Bridge at Golden Hour with Birds" vertical={true}/>
          </div>
      </Flex>

      <DropZone/>
    </div>
  );
}

export default App;
