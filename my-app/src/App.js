import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AppContainer } from './style/App.styled';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Page1 from './pages/1/Page1';
import Page2 from './pages/2/Page2';
import Page3 from './pages/3/Page3';
import Page4 from './pages/4/Page4';
import Page5 from './pages/5/Page5';
import Page6 from './pages/6/Page6';
import Page7 from './pages/7/Page7';
import Page8 from './pages/8/Page8';
import Page9 from './pages/9/Page9';
import Page10 from './pages/10/Page10';
import Page11 from './pages/11/Page11';
import Page12 from './pages/12/Page12';
import Page13 from './pages/13/Page13';
import Page14 from './pages/14/Page14';
import Page15 from './pages/15/Page15';
import Page16 from './pages/16/Page16';
import Page17 from './pages/17/Page17';
import Page18 from './pages/18/Page18';
import Page19 from './pages/19/Page19';
import Page20 from './pages/20/Page20';

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<Page1 />} />
        <Route path='/2' element={<Page2 />} />
        <Route path='/3' element={<Page3 />} />
        <Route path='/4' element={<Page4 />} />
        <Route path='/5' element={<Page5 />} />
        <Route path='/6' element={<Page6 />} />
        <Route path='/7' element={<Page7 />} />
        <Route path='/8' element={<Page8 />} />
        <Route path='/9' element={<Page9 />} />
        <Route path='/10' element={<Page10 />} />
        <Route path='/11' element={<Page11 />} />
        <Route path='/12' element={<Page12 />} />
        <Route path='/13' element={<Page13 />} />
        <Route path='/14' element={<Page14 />} />
        <Route path='/15' element={<Page15 />} />
        <Route path='/16' element={<Page16 />} />
        <Route path='/17' element={<Page17 />} />
        <Route path='/18' element={<Page18 />} />
        <Route path='/19' element={<Page19 />} />
        <Route path='/20' element={<Page20 />} />
      </Routes>
    </AppContainer>
  );
}

export default App;