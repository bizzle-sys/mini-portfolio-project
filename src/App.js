import './App.css';
import './style.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { GetInTouch } from './components/GetInTouch';
import { Footer } from './components/Footer';



function App() {
  return (
    <>
      {/* <!-- Dark mode Button --> */}
      <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />

      <div className="wrapper">
        <label htmlFor="darkMode"
        ><i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i
        ></label>

        {/* <!-- Header --> */}
        <Header />

        {/* <!-- Header end --> */}

        {/* <!-- Hero section --> */}
        <Hero />
        {/* <!-- Hero section end --> */}

        {/* <!-- Banner Section --> */}

        {/* <!-- Banner Section end -->

        <!-- Skills section --> */}
        <Skills />
        {/* <!-- Skills Section end -->

        <!-- Projects Section --> */}

        <Projects />
        {/* <!-- Projects Section End --> */}

        {/* <!-- About Section --> */}
        <About />
        {/* <!-- About Section End--> */}

        {/* <!-- Get in Touch Section --> */}
        <GetInTouch />
        {/* <!-- Get in Touch Section End -->

        <!-- Footer --> */}
        <Footer />
      </div>

    </>
  );
}

export default App;
