import logo from './logo.svg';
import './App.css';
import Main from './main';
import Quiz from './quiz';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
