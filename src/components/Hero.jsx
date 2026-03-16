import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/pranav2.jpeg';
import GridScan from './GridScan';
import TextType from './TextType';

export default function Hero() {
    const { scrollY } = useScroll();

    // Dynamic responsive scroll animation logic (real-time framer evaluation)
    const mobileTransform = useTransform(scrollY, (yVal) => {
        if (typeof window === 'undefined' || window.innerWidth > 992) return "translateY(0px) scale(1)";

        // Simulating matching the "About" image size and position on mobile
        const tY = Math.min(yVal * 0.9, 600);
        const tScale = Math.max(0.4, 1 - (yVal / 500) * 0.6);
        return `translateY(${tY}px) scale(${tScale})`;
    });

    const mobileOpacity = useTransform(scrollY, (yVal) => {
        if (typeof window === 'undefined' || window.innerWidth > 992) return 1;
        // Fade out perfectly over 250px of scroll
        return Math.max(0, 1 - (Math.max(0, yVal - 150) / 250));
    });
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#000000'
        }}>
            {/* ReactBits GridScan Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#392e4e"
                    gridScale={0.1}
                    scanColor="#7a94e1"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>

            {/* Foreground Content with Z-Index */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 2, /* Above the Beams */
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '40px'
            }}>
                {/* Text Content Panel - Background removed to merge directly with the animation */}
                <div className="hero-content animate-fade-in-up" style={{
                    flex: '1',
                    maxWidth: '650px',
                    position: 'relative',
                    zIndex: 20
                }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        color: 'var(--text-main)',
                        borderRadius: '30px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '30px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>Premium Consultancy Network</span>

                    <h1 className="section-title" style={{
                        fontSize: '4.5rem',
                        lineHeight: 1.1,
                        textAlign: 'left',
                        marginBottom: '20px',
                        letterSpacing: '-2px',
                        color: '#FFF',
                        textShadow: '0 10px 30px rgba(0,0,0,0.8)'
                    }}>
                        Abstract <TextType
                            as="span"
                            text={["Excellence", "Leadership", "Innovation"]}
                            typingSpeed={75}
                            pauseDuration={2000}
                            showCursor
                            cursorCharacter="_"
                            deletingSpeed={50}
                            style={{
                                background: 'linear-gradient(45deg, #00E5FF, #FF0080)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontStyle: 'italic',
                            }}
                        /> in B2B Connectivity
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '40px',
                        maxWidth: '540px',
                        fontWeight: 300,
                        lineHeight: 1.6,
                        textShadow: '0 5px 15px rgba(0,0,0,0.8)'
                    }}>
                        Empowering consultancies with guaranteed placement pathways. Unlock top-tier medical and engineering institutions with transparent and priority support.
                    </p>

                    <div className="cta-group" style={{ display: 'flex', gap: '20px' }}>
                        <a href="#contact" className="btn btn-primary">Establish Partnership</a>
                        <a href="#colleges" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(10px)' }}>
                            View Portfolio
                        </a>
                    </div>
                </div>

                {/* Right side Photo - Background removed and masked to merge seamlessly into the Beams background & Text */}
                <motion.div className="hero-image animate-fade-in-up delay-2" style={{
                    flex: '1',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    zIndex: 10,
                    marginLeft: '-100px', // Pull image to the left so it merges/overlaps with the text area
                    transform: mobileTransform,
                    opacity: mobileOpacity,
                    transformOrigin: 'top center'
                }}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '650px',
                    }}>
                        {/* The image itself, faded on the left side to blend into the text/background seamlessly */}
                        <img
                            src={heroImage}
                            alt="Education Consultant"
                            style={{
                                width: '100%',
                                height: '700px',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                display: 'block',
                                filter: 'contrast(1.1) brightness(0.9)',
                                maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
                            }}
                        />
                        {/* Bottom fade/blend gradient so the image melts into the page background */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '40%',
                            background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
                            pointerEvents: 'none'
                        }}></div>

                        {/* Floating Decorative Badge over the blended image */}
                        <div style={{
                            position: 'absolute',
                            bottom: '80px',
                            right: '30px', // Moved to right since left is blended
                            background: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(20px)',
                            padding: '20px 30px',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <div style={{
                                width: '50px', height: '50px',
                                background: 'linear-gradient(45deg, #00E5FF, #FF0080)',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#FFF', fontSize: '1.5rem'
                            }}>
                                ★
                            </div>
                            <div>
                                <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#FFF' }}>Trusted Leader</p>
                                <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>B2B Education Sector</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .container { flex-direction: column !important; }
                    .hero-content { text-align: center; margin: 0 auto; padding: 2rem !important; z-index: 30; }
                    .hero-content h1 { text-align: center !important; font-size: 3rem !important; }
                    .hero-content p { margin: 0 auto 30px auto !important; text-align: center; }
                    .cta-group { justify-content: center; }
                    .hero-image { display: none !important; }
                }
            `}</style>
        </section >
    );
}
