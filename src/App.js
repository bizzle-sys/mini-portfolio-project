import './App.css';
import './style.css'
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { GetInTouch } from './components/GetInTouch';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>


      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<GetInTouch />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />

      </Routes>








    </>
  );
}

export default App;
