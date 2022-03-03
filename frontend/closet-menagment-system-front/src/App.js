import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Collections from './pages/Collections';
import MainHero from './pages/MainHero';
import CreateCollection from './pages/CreateCollection';
import AddClothes from './pages/AddClothes';
import UserSettings from './pages/UserSettings';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={ <MainHero/> }/>
          <Route path='/addclothes' element={ <AddClothes/> }/>
          <Route path='/collections' element={ <Collections/> }/>
          <Route path='/createcollection' element={ <CreateCollection/> }/>
          <Route path='/usersettings' element={ <UserSettings/> }/>
          <Route path='/loginpage' element={ <LoginPage/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
