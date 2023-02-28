import MainNav from './components/MainNav'
import './App.css';
import { Route, Routes } from 'react-router-dom';




import Draft from './pages/Draft';

import Compose from './pages/Compose';
import Sent from './pages/Sent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <MainNav/>
    <Routes>
     <Route exact path='/' element={<Compose/>} /> 
     <Route exact path='/sent' element={<Sent/>} /> 
     <Route exact path='/drafts' element={<Draft/>} /> 
    </Routes>
   </div>
  );
}

export default App;
