import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        interest: 'General Inquiry'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your interest! We will contact you shortly.");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="section" style={{
            background: 'linear-gradient(0deg, var(--bg-dark) 0%, var(--bg-section-alt) 100%)',
            position: 'relative'
        }}>
            <div className="container">
                <span className="section-subtitle">Engage Us</span>
                <h2 className="section-title">Initiate Partnership</h2>

                <div className="contact-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '60px',
                    marginTop: '60px',
                    alignItems: 'stretch'
                }}>
                    <div className="contact-info glass-card animate-fade-in-up delay-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-primary)', marginBottom: '30px' }}>Direct Access</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ width: '50px', height: '50px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', border: '1px solid rgba(var(--accent-rgb), 0.3)' }}>📞</span>
                                <div>
                                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone Support</p>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ width: '50px', height: '50px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', border: '1px solid rgba(var(--accent-rgb), 0.3)' }}>✉️</span>
                                <div>
                                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</p>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>info@edumentor.com</p>
                                </div>
                            </div>
                            <div className="info-item" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ width: '50px', height: '50px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', border: '1px solid rgba(var(--accent-rgb), 0.3)' }}>📍</span>
                                <div>
                                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Headquarters</p>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>MG Road, Bangalore</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-primary" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '50px', width: '100%'
                        }}>
                            <span>💬</span> Message on WhatsApp
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form glass-card animate-fade-in-up delay-2" style={{ borderTop: '2px solid var(--accent-primary)' }}>
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '40px', color: 'var(--text-main)' }}>Partner With Us</h3>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Full Executive Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '16px', background: 'var(--card-bg-subtle)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', borderRadius: '4px', outline: 'none', transition: 'all 0.3s ease' }}
                                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                            />
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Direct Line (Phone)</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '16px', background: 'var(--card-bg-subtle)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', borderRadius: '4px', outline: 'none', transition: 'all 0.3s ease' }}
                                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                            />
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Area of Interest</label>
                            <select
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '16px', background: 'var(--card-bg-subtle)', border: '1px solid var(--glass-border)', color: 'var(--accent-primary)', borderRadius: '4px', outline: 'none', appearance: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
                            >
                                <option style={{ background: 'var(--bg-dark)', color: 'var(--text-main)' }} value="General Inquiry">General</option>
                                <option style={{ background: 'var(--bg-dark)', color: 'var(--text-main)' }} value="Engineering">Engineering</option>
                                <option style={{ background: 'var(--bg-dark)', color: 'var(--text-main)' }} value="Medical">Medical</option>
                                <option style={{ background: 'var(--bg-dark)', color: 'var(--text-main)' }} value="Nursing">Nursing</option>
                                <option style={{ background: 'var(--bg-dark)', color: 'var(--text-main)' }} value="Management">Management</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-outline" style={{ width: '100%', padding: '16px', fontSize: '1rem', letterSpacing: '2px' }}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
