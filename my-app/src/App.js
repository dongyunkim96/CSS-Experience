import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AppContainer } from './style/App.styled';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Page1 from './pages/1/Page1';
import Page2 from './pages/2/Page2';

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<Page1 />} />
        <Route path='/2' element={<Page2 />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
