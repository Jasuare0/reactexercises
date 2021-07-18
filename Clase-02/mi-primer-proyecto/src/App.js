// importing the Navbar module
import Navbar from './Components/Navbar.js'
// importing the Navbar module
import Banner from './Components/Banner.js'

function App() {
  return (
    <div className="App">

      {/* Call to the Navbar component */}
      <Navbar />
      {/* Call to the Banner component */}
      <Banner />

    </div>
  );
}

export default App;
