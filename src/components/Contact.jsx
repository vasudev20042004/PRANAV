import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="section" style={{
            background: 'linear-gradient(0deg, var(--bg-dark) 0%, var(--bg-section-alt) 100%)',
            position: 'relative'
        }}>
            <div className="container">
                <span className="section-subtitle">Engage Us</span>
                <h2 className="section-title">Initiate Partnership</h2>

                <div className="contact-container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '60px',
                }}>
                    <div className="contact-info glass-card animate-fade-in-up delay-1" style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        maxWidth: '500px',
                        width: '100%',
                        padding: '50px'
                    }}>
                        <h3 style={{ fontSize: '2rem', textAlign: 'center', fontFamily: 'var(--font-heading)', color: 'var(--accent-primary)', marginBottom: '40px' }}>Partner With Us</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ width: '50px', height: '50px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', border: '1px solid rgba(var(--accent-rgb), 0.3)' }}>📞</span>
                                <div>
                                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone Support</p>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>+91 85898 77876</p>
                                </div>
                            </div>
                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ width: '50px', height: '50px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', border: '1px solid rgba(var(--accent-rgb), 0.3)' }}>✉️</span>
                                <div>
                                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</p>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>felcaeducationist@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ width: '50px', height: '50px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', border: '1px solid rgba(var(--accent-rgb), 0.3)' }}>📍</span>
                                <div>
                                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Headquarters</p>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>Yelahanka, New Town</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/918589877876" target="_blank" rel="noreferrer" className="btn btn-primary" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '50px', width: '100%'
                        }}>
                            <span>💬</span> Message on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
