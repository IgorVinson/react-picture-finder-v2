import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className="App">
     <Searchbar/>
      <ImageGallery/>
    </div>
  );
}

export default App;
