import './App.css';

// Importing Data Base
import rickMortyDB from './Data/rick_and_morty.json'

// Importing Component
import Characters from './Components/Characters.jsx'
import MainTitle from './Components/Title.jsx'


function App() {

  console.log(rickMortyDB)

  return (
    <div className="App">


        <MainTitle 
          mainTitle="This is a Title."    
        />

        <Characters 
          arrayData={rickMortyDB}
        />



    </div>
  );
}

export default App;
