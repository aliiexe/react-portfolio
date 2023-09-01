import { useState, useEffect } from 'react';
import './App.css'
import Loading from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className={`App ${isLoading ? 'loading' : ''}`}>
            {isLoading ? <Loading /> : (
                <>
                    <Header />
                    <Hero />
                    <div className="skills-wrapper">
                        <Skills />
                    </div>
                    <Projects />
                    <Services/>
                    <Contact />
                    <Footer/>
                </>
            )}
        </div>
    );
}

export default App;
