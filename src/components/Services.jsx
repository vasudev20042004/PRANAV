import React from 'react';

const services = [
    {
        title: "University Affiliations",
        icon: "🏛️",
        description: "Direct tie-ups and priority access to top-tier colleges across Kerala, Karnataka, and Tamil Nadu."
    },
    {
        title: "Priority Processing",
        icon: "⚡",
        description: "Fast-tracked application handling and dedicated backend support for hassle-free student placements."
    },
    {
        title: "Seat Blocking",
        icon: "🔒",
        description: "Reliable seat booking and transparent allotment processes to ensure your candidates are secured."
    },
    {
        title: "B2B Commercials",
        icon: "🤝",
        description: "Highly competitive and reliable commission structures designed for our consultancy partners."
    },
    {
        title: "Training & Resources",
        icon: "📚",
        description: "Continuous guidance, university brochures, and regular updates on course availability."
    }
];

export default function Services() {
    return (
        <section id="services" className="section" style={{
            background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-section-alt) 100%)',
            position: 'relative'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <span className="section-subtitle">Comprehensive Services</span>
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
