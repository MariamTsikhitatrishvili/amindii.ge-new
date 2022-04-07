import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import Test from './Test';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/home' element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
