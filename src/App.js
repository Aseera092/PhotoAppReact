import logo from './logo.svg';
import './App.css';

import Gallery from './components/Gallery';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Gallery/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/delete' element={<Delete/>}/>
<Route path='/viewall' element={<Viewall/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
