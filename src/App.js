import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {Routes, Route} from "react-router-dom"
import Dating from './components/Dating/Dating';
import Spa from './components/Spa/Spa';
import Node from "./components/Node/Node"
import Cra from './components/Cra/Cra';
import Elements from './components/Elements/Elements';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='main'>
        <Nav />
        <div className='mainContent'>
        <Routes>
          <Route path="/dating" element={<Dating />}/>
          <Route path="/spa" element={<Spa />} />
          <Route path="/node" element={<Node />} />
          <Route path="/cra" element={<Cra />}/>
          <Route path="/elements" element={<Elements />}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
