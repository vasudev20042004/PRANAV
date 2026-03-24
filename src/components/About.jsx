import React from 'react';
import aboutImage from '../assets/pranav1.jpeg';

export default function About() {
    return (
        <section id="about" className="section" style={{
            position: 'relative'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '80px',
                alignItems: 'center'
            }}>
                <div className="about-image animate-fade-in-up delay-1" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '400px',
                        aspectRatio: '1/1',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                        border: '2px solid var(--accent-primary)',
                        margin: '0 auto'
                    }}>
                        <img
                            src={aboutImage}
                            alt="Leadership"
                            style={{
                                width: '145%',
                                height: '145%',
                                objectFit: 'cover',
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                filter: 'contrast(1.1)'
                            }}
                        />
                    </div>
                </div>

                <div className="about-content animate-fade-in-up delay-2">
                    <span className="section-subtitle" style={{ textAlign: 'left', marginBottom: '15px' }}>Strategic Alliance</span>
                    <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '30px', lineHeight: 1.1 }}>
                        Why Agents <br /><span style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Work With Us</span>
                    </h2>

                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        fontWeight: 300,
                        marginBottom: '40px'
                    }}>
                        Our mission is to empower independent education consultants and agencies by providing unmatched access, transparent processes, and direct alliances with elite institutions. When you partner with us, you aren't just getting seats; you're gaining a strategic growth engine.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px', display: 'grid', gap: '20px' }}>
                        {[
                            'Full Student Handling — No agent involvement after closure',
                            '24–48 Hour Seat Confirmation',
                            'Reliable Commission Payouts (7–15 Days)',
                            'Direct College Coordination',
                            'Smooth Admission to Joining Process',
                            'Dedicated support for every confirmed admission'
                        ].map((text, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                background: 'var(--card-bg-subtle)',
                                padding: '15px 25px',
                                borderRadius: '8px',
                                border: '1px solid var(--glass-border)',
                                fontSize: '1.05rem',
                                color: 'var(--text-main)',
                                transition: 'all 0.3s ease'
                            }} className="hover-list-item">
                                <span style={{
                                    color: 'var(--text-inverse)',
                                    background: 'var(--accent-primary)',
                                    width: '28px',
                                    height: '28px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>✓</span>
                                {text}
                            </li>
                        ))}
                    </ul>

                    <div className="signature" style={{ marginTop: '50px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ width: '60px', height: '2px', background: 'var(--accent-primary)' }}></div>
                        <div>
                            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--accent-primary)', margin: 0 }}>Abhinav</p>
                            <p className="role" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Lead Strategy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
