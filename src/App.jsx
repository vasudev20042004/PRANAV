import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Colleges from './components/Colleges';
import Contact from './components/Contact';
import Footer from './components/Footer';
import logoImg from './assets/logoo.png';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isLoading]);

    return (
        <div className="app">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: '#000000',
                            zIndex: 99999,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        <motion.img
                            layoutId="main-logo"
                            src={logoImg}
                            alt="Loading Logo"
                            style={{
                                height: '220px',
                                width: 'auto',
                                objectFit: 'contain'
                            }}
                            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Navbar isLoading={isLoading} />
            <Hero />
            <About />
            <Services />
            <Colleges />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
