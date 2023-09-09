import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accessories from './pages/Accessories';
import Clothes from './pages/Clothes';
import Shoes from './pages/Shoes';
import Header from './components/Header';
import Home from './pages/home';
function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Clothes' element={<Clothes/>} />
        <Route exact path='/Shoes' element={<Shoes/>} />
        <Route exact path='/Accessories' element={<Accessories/>} />
      </Routes>
    </Router>
  )
}

export default App


  //   <Clothes/>
  //   <Accessories/>
  //   <Shoes/>