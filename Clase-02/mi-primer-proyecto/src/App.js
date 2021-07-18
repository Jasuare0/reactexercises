// importing the Navbar module
import Navbar from './Components/Navbar/Navbar.js'
// importing the Navbar module
import Banner from './Components/Banner/Banner.js'
// importing the Navbar module
import Products from './Components/Products/Products.js'
import './Components/Products/Products.css'
// importing the Navbar module
import FooterComponent from './Components/Footer/FooterComponent.js'
import './Components/Footer/Footer.css'

function App() {
  return (
    <div className="App">

      {/* Call to the Navbar component */}
      <Navbar />
      {/* Call to the Banner component */}
      <Banner />
      {/* Call to the Products component */}
      <Products />

      <FooterComponent />

    </div>
  );
}

export default App;
