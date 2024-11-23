import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home';
import Additem from './component/Additem';
import Updatetodo from './component/Updatetodo';




function App() {

  return (
    <>
    <Navbar/>
    <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Additem" element={<Additem />} />
            <Route path='/updatetodo' element={<Updatetodo/>}/>
          </Routes>
    </Router>
    </>
  )
}

export default App
