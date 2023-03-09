import './App.css';
import './style.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { GetInTouch } from './components/GetInTouch';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      {/* <!-- Dark mode Button --> */}
      <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />

      <div className="wrapper">
        <label htmlFor="darkMode"
        ><i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i
        ></label>

        <Header />

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<GetInTouch />} />
          <Route path='*' element={<h1>404 Page Not Found</h1>} />

        </Routes>







        <Footer />
      </div>

    </>
  );
}

export default App;
