import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';  
import FetchApi from './components/FetchApi';
import CharacterInfo from './components/CharacterInfo';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<FetchApi/>}></Route>
        <Route exact path='/people/:id' element={<CharacterInfo/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
