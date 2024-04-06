
import './App.css';
import Signup from './components/Signup/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/project" element={<Signup />}/>
        <Route path='/signin' element={<Signin />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
