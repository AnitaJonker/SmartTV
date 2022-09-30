// import logo from './logo.svg';
import './App.css';
import GetImages from './components/GetImages/GetImages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//console.log(secureObject);
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
