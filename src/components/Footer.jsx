import React from 'react';
import logoImg from '../assets/logoo.png';

export default function Footer() {
    return (
        <footer style={{
            padding: '80px 0 40px 0',
            background: 'var(--bg-dark)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            position: 'relative'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                gap: '60px',
                marginBottom: '60px'
            }}>
                <div className="footer-about">
                    <a href="#" className="logo" style={{ display: 'inline-block', marginBottom: '20px' }}>
                        <img src={logoImg} alt="EduMentor" style={{ height: '95px', width: 'auto', objectFit: 'contain' }} />
                    </a>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '350px', lineHeight: 1.8 }}>
                        Empowering educational consultants and partners with exclusive B2B alliances and priority placement pathways since 2012.
                    </p>
                </div>

                <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Navigation</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li><a href="#home" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Home</a></li>
                        <li><a href="#about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>About</a></li>
                        <li><a href="#services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Services</a></li>
                        <li><a href="#colleges" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Colleges</a></li>
                    </ul>
                </div>

                <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Social Matrix</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>LinkedIn Nexus</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Instagram Studio</a></li>
                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Facebook Network</a></li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px'
            }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    © {new Date().getFullYear()} EduMentor Protocol. All Rights Reserved.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a>
                    <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Terms of Service</a>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    footer .container {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    footer .footer-links ul, footer .footer-contact ul {
                        align-items: center;
                    }
                }
            `}</style>
        </footer>
    );
}
