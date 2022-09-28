import './App.css';
import Navbaar from './components/Navbaar';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Restaurentdetails from './components/Restaurentdetails';

// const data = [
//   {name:'abcs', age:'25'},
//   {name:'efgh', age:'20'},
//   {name:'pqrst', age:'24'}, 
//   {name:'mnop', age:'21'}
// ]

function App() {
  return (
    <div className="App">
      <Router>
      <Navbaar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Restaurentdetails/>}/>
      </Routes>
      </Router>
      
      {/* array mapping map operation */}
      {/* {data.map(item => (
        // <div>
        //   <h1>{item.name}</h1>
        //   <p>{item.age}</p>
        // </div>
        
      ))} */}
            <Footer/>

          </div>
  );
}

export default App;
