// import logo from './logo.svg';
import "./App.css"
import "./input.css"
import Grid from "./components/Grid/Grid"
import Home from "./components/Home/Home"
import Options from "./components/Options/Options"
import Fireship from "./components/Fireship/Fireship"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//console.log(secureObject);
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/' element={<Fireship />}></Route>
          <Route path='/Options' element={<Options />}></Route>
          <Route path='/Grid' element={<Grid />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
