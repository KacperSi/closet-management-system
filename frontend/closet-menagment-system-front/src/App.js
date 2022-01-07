import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Collections from './pages/Collections';
import MainHero from './pages/MainHero';
import CreateCollection from './pages/CreateCollection';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={ <MainHero/> }/>
          <Route path='/collections' element={ <Collections/> }/>
          <Route path='/createcollection' element={ <CreateCollection/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
