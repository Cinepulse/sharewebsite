import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import ShareScreen from './Screens/ShareScreen';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:movieid/:movietitle" element={<ShareScreen />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
