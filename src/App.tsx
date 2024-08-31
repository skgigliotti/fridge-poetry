import './App.css';
import Word from './fridge/Word';
import DropZone from './fridge/DropZone'

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
      <DropZone/>
        <div className="flex-grid">
        {
          my_words.map(function(word, i) {
            return <Word word={word} key={i}/>;
          })
        }
        </div>
    </div>
  );
}

export default App;
