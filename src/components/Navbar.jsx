import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">

                {/* Left side: Logo + Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                    <a href="#" className="logo">Edu<span style={{ fontWeight: 400 }}>Mentor</span></a>

                    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#colleges" onClick={() => setIsOpen(false)}>Colleges</a>
                    </div>
                </div>

                {/* Right side: CTA + Mobile Menu Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary nav-cta" style={{ padding: '12px 28px', color: 'var(--text-inverse)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                        Engage Us
                    </a>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        style={{ border: 'none', background: 'transparent' }}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

            </div>
        </nav>
    );
}
