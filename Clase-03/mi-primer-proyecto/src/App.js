import './App.css';

// Importing Data Base
import rickMortyDB from './Data/rick_and_morty.json' 
import Characters from './Components/Characters.jsx'

function App() {

  console.log(rickMortyDB)

  return (
    <div className="App">
        <Characters 
          arrayData={rickMortyDB}
        
        />
    </div>
  );
}

export default App;
