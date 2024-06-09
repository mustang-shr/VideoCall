import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import RoomPage from './pages/home/room';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage />}  />
      <Route path='/room/:roomId' element={<RoomPage />} />
      </Routes> 
    </div>
  );
}

export default App;