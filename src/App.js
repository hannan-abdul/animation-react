import './App.css';
import AboutFounder from './components/AboutFounder';
import AboutBrand from './components/AboutBrand';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ViewMore from './components/ViewMore';

function App() {

  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutBrand></AboutBrand>
      <ViewMore></ViewMore>
      <AboutFounder></AboutFounder>
    </div>
  );
}

export default App;
