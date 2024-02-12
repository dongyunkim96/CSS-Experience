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
import Page21 from './pages/21/Page21';
import Page22 from './pages/22/Page22';
import Page23 from './pages/23/Page23';
import Page24 from './pages/24/Page24';
import Page25 from './pages/25/Page25';
import Page26 from './pages/26/Page26';
import Page27 from './pages/27/Page27';
import Page28 from './pages/28/Page28';
import Page29 from './pages/29/Page29';
import Page30 from './pages/30/Page30';
import Page31 from './pages/31/Page31';
import Page32 from './pages/32/Page32';
import Page33 from './pages/33/Page33';
import Page34 from './pages/34/Page34';
import Page35 from './pages/35/Page35';
import Page36 from './pages/36/Page36';
import Page37 from './pages/37/Page37';
import Page38 from './pages/38/Page38';
import Page39 from './pages/39/Page39';
import Page40 from './pages/40/Page40';
import Page41 from './pages/41/Page41';
import Page42 from './pages/42/Page42';

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
        <Route path='/21' element={<Page21 />} />
        <Route path='/22' element={<Page22 />} />
        <Route path='/23' element={<Page23 />} />
        <Route path='/24' element={<Page24 />} />
        <Route path='/25' element={<Page25 />} />
        <Route path='/26' element={<Page26 />} />
        <Route path='/27' element={<Page27 />} />
        <Route path='/28' element={<Page28 />} />
        <Route path='/29' element={<Page29 />} />
        <Route path='/30' element={<Page30 />} />
        <Route path='/31' element={<Page31 />} />
        <Route path='/32' element={<Page32 />} />
        <Route path='/33' element={<Page33 />} />
        <Route path='/34' element={<Page34 />} />
        <Route path='/35' element={<Page35 />} />
        <Route path='/36' element={<Page36 />} />
        <Route path='/37' element={<Page37 />} />
        <Route path='/38' element={<Page38 />} />
        <Route path='/39' element={<Page39 />} />
        <Route path='/40' element={<Page40 />} />
        <Route path='/41' element={<Page41 />} />
        <Route path='/42' element={<Page42 />} />
      </Routes>
    </AppContainer>
  );
}

export default App;