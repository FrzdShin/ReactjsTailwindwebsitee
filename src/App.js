import React from 'react';
import './App.css';
import './index.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <main>
                <Hero />
                <About />
                <Sponsors />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;