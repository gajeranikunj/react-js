import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './camponate/MHome/Home';
import Gotop from './camponate/go-top-btn/Gotop.js'
import Micon from './camponate/MICON/Micon.js';
import Nav from './camponate/nav/Nav.jsx';
import Footer from './camponate/Footer/Footer.js';
function App() {

  //.................... url..............
  //  https://icongrid.vercel.app
  //.................. pakaje...............
  //  npm install react-icons --save

  return (
    <>
      <Gotop />
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} key="home">
          </Route>
          <Route path="/Icon" element={<Micon />} key="icon">
          </Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
