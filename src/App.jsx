import React from 'react';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Game from './Game';
import Details from './components/Details'
import FirstPage from './components/FirstPage'
const App = () => {
  return (

    <Router>
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/game" element={<Game />} />
      <Route path="/CheckHistory" element={<Details />} />
    </Routes>
  </Router>
  );
};

export default App;
