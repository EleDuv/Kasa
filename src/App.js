import {Routes, Route} from "react-router-dom";
import './app.css';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"
import Header from "./components/Header/Header"
import Lodging from './pages/Lodging/Lodging';
import Footer from './components/Footer/Footer';

// Routing
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/lodgings/:id" element={<Lodging/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/*" element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
 