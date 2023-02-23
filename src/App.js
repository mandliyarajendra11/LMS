import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './About';
import Theme from './Theme';
import Cat from './Cat';
function App() {
  
  return (
       <BrowserRouter>
      <Header/>
      <Theme />      
    <Routes>
    <Route path="/" element={ <Home/> }/>
      <Route path="about" element={ <About/> }/>
      <Route path="coding" element={ <Cat val={1} /> }/>
      <Route path='upsc' element={<Cat val={4} />}/>
      <Route path='physics' element={<Cat val={3} />}/>
      <Route path='Arts' element={<Cat val={0} />}/>
      <Route path='Magic' element={<Cat val={2} />}/>
      

 </Routes>
 </BrowserRouter>
     );
}


export default App;
