import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
