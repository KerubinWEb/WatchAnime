import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom";
import Header from './component/Header';
import Home from './pages/Home';
import Anime from './pages/Anime';
import Movie from './pages/Movie';
import Manga from './pages/Manga';
import Card1 from './component/Card';


function App() {

  return (
    <div >
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Anime" element={<Card1/>}/>
      <Route path="/Movie" element={<Movie/>}/>
      <Route path="/Manga" element={<Manga/>}/>
    </Routes>
    </div>
  )
}

export default App
