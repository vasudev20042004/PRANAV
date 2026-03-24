import React from 'react';

const services = [
    {
        title: "Full Student Handling",
        icon: "🛡️",
        description: "From admission to joining — we manage documentation, coordination, and onboarding. You don't deal with student issues. (Zero Agent Involvement)"
    },
    {
        title: "Fast & Priority Seat Confirmation",
        icon: "⚡",
        description: "Confirmed admissions within 24–48 hours for eligible students through direct college coordination."
    },
    {
        title: "Transparent & Timely Commission Payouts",
        icon: "💸",
        description: "Commission released within 7–15 days after fee clearance, with clear tracking and no hidden deductions."
    }
];

export default function Services() {
    return (
        <section id="services" className="section" style={{
            background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-section-alt) 100%)',
            position: 'relative'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <span className="section-subtitle">Fast Confirmations. Full Student Handling. Reliable Payments.</span>
                <h2 className="section-title">Consulting Operations</h2>

                <div className="services-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    marginTop: '60px'
                }}>
                    {services.map((service, idx) => (
                        <div key={idx} className="glass-card service-card delay-1 animate-fade-in-up" style={{
                            textAlign: 'left',
                            padding: '50px 40px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            position: 'relative',
                            overflow: 'hidden',
                            borderTop: '1px solid rgba(var(--accent-rgb), 0.4)'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(var(--accent-rgb), 0.08)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.8rem',
                                color: 'var(--accent-primary)'
                            }}>
                                {service.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.6rem',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--text-main)',
                                margin: 0
                            }}>
                                {service.title}
                            </h3>

                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '1.05rem',
                                lineHeight: 1.7,
                                margin: 0,
                                fontWeight: 300
                            }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
