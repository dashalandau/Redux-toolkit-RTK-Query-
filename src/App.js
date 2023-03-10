import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Id from "./pages/Id";
import './App.css';
import Counter from './pages/Counter';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos/:id' element={<Id />} />
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </>
  );
}


export default App;
