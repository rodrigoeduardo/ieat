import './App.css';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

import './css/globals.css'
import './css/docentes.css'
import './css/aula.css'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
