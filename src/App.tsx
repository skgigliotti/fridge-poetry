import './App.css';
import Word from './fridge/Word';
import DropZone from './fridge/DropZone'
import ContentCarousel from './fridge/ContentCarousel';
import Portfolio from './Portfolio';

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
        <Word word={'Sophia'} fontSize='36px'/>
        <Word word={'Gigliotti'} fontSize='36px'/>
      </header>
      <Portfolio/>
      <ContentCarousel/>
      <DropZone/>
    </div>
  );
}

export default App;
