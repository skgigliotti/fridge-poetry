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
      <DropZone/>
      <div className="flex-grid">
        {
          my_words.map(function(word, i) {
            return <Word word={word} key={i}/>;
          })
        }
      </div>
      <Photo img_url='https://lh3.googleusercontent.com/pw/AP1GczP_g_n_mb8fpt8XxgwAUbjANU06r7KGX_uRsbiaS2HKxrphSuEgJqzIk_g6_DzN0cZakh5UEqw_8NWcOcDwwl3tp0xHVdzjupsSxmUis0e53w4KboNEPvYkK3FxeQOCTCRKea0LRIAcK4ML-tN6pNd8=w2836-h1890-s-no?authuser=0'/>
    </div>
  );
}

export default App;
