import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import MenuLeft from './components/MenuLeft';
import MenuTop from './components/MenuTop';
import People from './components/pages/People';
import Calendar from './components/pages/Calendar';
import Projects from './components/pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='main'>
          <div className='basePosition logo'><Logo /></div>
          <div className='basePosition menuTop'><MenuTop /></div>
          <div className='basePosition menuLeft'><MenuLeft /></div>
          <div className='basePosition workarea'>
            <Routes>
              <Route path='/components/pages/People' Component={People} />
              <Route path='/components/pages/Calendar' Component={Calendar} />
              <Route path='/components/pages/Projects' Component={Projects} />
            </Routes>

          </div>
          <div className='basePosition footer'><Footer /></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;