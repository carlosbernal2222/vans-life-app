
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Header from './components/Header';
import Footer from './components/Footer'

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
