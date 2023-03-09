import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Id from "./pages/Id"
import './App.css';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos/:id' element={<Id />} />
      </Routes>
    </>
  );
}


export default App;
