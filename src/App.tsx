import './App.css';
import Word from './fridge/Word';
import DropZone from './fridge/DropZone'
import Photo from './fridge/Photo'

let my_words = [
  'hello', 'world', 'I', 'am', 'a', 'computer', 'scientist', '.',
  'I', 'am', 'passionate', 'about', 'creating', 'technology', 'for', 'social', 'good',
  'and', 'empowering', 'underrepresented', 'students', 'to', 'learn', 'the', 'art', 'of', 'programming', '.',
  'My', 'current', 'side', 'hustle', 'is', 'cat', 'sitting', 'to', 'fund', 'my', 'photography', 'projects', '.',
  'New', 'inquires', 'welcome', '!' 
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Word className='Word' word={'Sophia'}/>
        <Word className='Word' word={'Gigliotti'}/>
      </header>
      <div className='flex-main'>
        <div className="flex-text">
          {
            my_words.map(function(word, i) {
              return <Word word={word} key={i}/>;
            })
          }
        </div>
      <div className='flex-photo'>
        <Photo img_path='./assets/images/bridge.jpg' vertical={true}/>
      </div>

      </div>
      <DropZone/>
      <div className='flex-main'>
        <Photo img_path='./assets/images/ferry_building.jpg' vertical={true}/>
        <Photo img_path='./assets/images/don_wizard.jpg'/>
        <Photo img_path='./assets/images/akihabara.jpg'/>
        <Photo img_path='./assets/images/bonita_tunnel.jpg' vertical={true}/>
        <Photo img_path='./assets/images/hierve_el_agua.jpg'/>
        <Photo img_path='./assets/images/macro_bee.jpg' vertical={true}/>
        <Photo img_path='./assets/images/transamerica.jpg' vertical={true}/>
        <Photo img_path='./assets/images/mission_sb.jpg'/>
      </div>
    </div>
  );
}

export default App;
