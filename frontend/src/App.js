import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import Main from './components/Main';
import useOpenWebSocket from './components/Helpers/socket';

function App() {
  useOpenWebSocket();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
