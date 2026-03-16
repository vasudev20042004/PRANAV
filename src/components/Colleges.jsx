import React, { useState, useEffect } from 'react';
import { karnatakaColleges, keralaColleges, tamilNaduColleges } from '../data/colleges';
import './Colleges.css';

const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const CollegeModal = ({ college, onClose }) => {
    if (!college) return null;
    return (
        <div className="college-modal-overlay" onClick={onClose}>
            <div className="college-modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <span className="badge" style={{ marginBottom: '15px' }}>{college.type}</span>
                    <h2>{college.name}</h2>
                    <p className="location" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>📍</span> {college.location}
                    </p>
                </div>

                <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'var(--card-bg-subtle)',
                        padding: '30px',
                        borderRadius: '8px',
                        border: '1px solid var(--glass-border)'
                    }}>
                        <div>
                            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Official Resources & Access</h3>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '400px' }}>Obtain detailed fee breakdown, official prospectus, and campus tour access.</p>
                        </div>
                        <a href="#contact" onClick={onClose} className="btn btn-primary" style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}>Request Info</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CollegeCard = ({ college, onViewDetails }) => (
    <div className="college-card">
        <div className="college-content">
            <span className="badge">{college.type}</span>
            <h3>{college.name}</h3>
            <p className="location">
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>📍</span> {college.location}
            </p>
        </div>
        <div className="card-actions">
            <button className="view-details-btn" onClick={() => onViewDetails(college)}>View Details</button>
        </div>
    </div>
);

const AccordionItem = ({ city, colleges, searchTerm, expandedCity, toggleCity, onViewDetails, isMobile }) => {
    const [showAll, setShowAll] = useState(false);

    const filteredCityColleges = colleges.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchTerm && filteredCityColleges.length === 0) return null;

    const displayColleges = searchTerm ? filteredCityColleges : colleges;
    const isExpanded = expandedCity === city || searchTerm;

    const limit = (isMobile && !showAll && !searchTerm) ? 4 : displayColleges.length;
    const visibleColleges = displayColleges.slice(0, limit);

    return (
        <div className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
            <button className="accordion-header" onClick={() => !searchTerm && toggleCity(city)} style={{ cursor: searchTerm ? 'default' : 'pointer' }}>
                <span className="city-name">{city} <span className="count">({displayColleges.length})</span></span>
                {!searchTerm && (
                    <span className={`accordion-icon ${expandedCity === city ? 'rotated' : ''}`}>
                        <ChevronDown />
                    </span>
                )}
            </button>
            <div className="accordion-content" style={{ display: isExpanded ? 'block' : 'none' }}>
                <div className="college-list">
                    {visibleColleges.map((college, idx) => (
                        <CollegeCard key={idx} college={college} onViewDetails={onViewDetails} />
                    ))}
                </div>
                {isMobile && !showAll && !searchTerm && displayColleges.length > 4 && (
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '10px 24px' }} onClick={() => setShowAll(true)}>
                            View More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const CityAccordion = ({ data, searchTerm, expandedCity, toggleCity, onViewDetails, isMobile }) => {
    return (
        <div className="city-accordion">
            {Object.entries(data).map(([city, colleges]) => (
                <AccordionItem
                    key={city}
                    city={city}
                    colleges={colleges}
                    searchTerm={searchTerm}
                    expandedCity={expandedCity}
                    toggleCity={toggleCity}
                    onViewDetails={onViewDetails}
                    isMobile={isMobile}
                />
            ))}
        </div>
    );
};

export default function Colleges() {
    const [activeTab, setActiveTab] = useState('karnataka');
    const [expandedCity, setExpandedCity] = useState('Bangalore');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [showAllKerala, setShowAllKerala] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile(); // Check on mount
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowAllKerala(false); // Reset specific states when switching tabs
        setExpandedCity(null);
    };

    const toggleCity = (city) => setExpandedCity(expandedCity === city ? null : city);

    const handleViewDetails = (college) => {
        setSelectedCollege(college);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedCollege(null);
        document.body.style.overflow = 'auto';
    };

    const filteredKerala = keralaColleges.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const limitKerala = (isMobile && !showAllKerala && !searchTerm) ? 4 : filteredKerala.length;
    const visibleKerala = filteredKerala.slice(0, limitKerala);

    return (
        <section id="colleges" className="colleges-section">
            <div className="container">
                <span className="section-subtitle">Premium Portfolio</span>
                <h2 className="section-title">Institutional Network</h2>

                <div className="colleges-controls animate-fade-in-up delay-1">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Discover by institution or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="tabs">
                        <button className={`tab-btn ${activeTab === 'kerala' ? 'active' : ''}`} onClick={() => handleTabChange('kerala')}>Kerala</button>
                        <button className={`tab-btn ${activeTab === 'karnataka' ? 'active' : ''}`} onClick={() => handleTabChange('karnataka')}>Karnataka</button>
                        <button className={`tab-btn ${activeTab === 'tamilnadu' ? 'active' : ''}`} onClick={() => handleTabChange('tamilnadu')}>Tamil Nadu</button>
                    </div>
                </div>

                <div className="colleges-grid animate-fade-in-up delay-2">
                    {activeTab === 'kerala' && (
                        <div>
                            <div className="college-list">
                                {visibleKerala.length > 0 ? (
                                    visibleKerala.map((college, idx) => <CollegeCard key={idx} college={college} onViewDetails={handleViewDetails} />)
                                ) : (
                                    <p style={{ color: 'var(--text-muted)', textAlign: 'center', width: '100%', padding: '40px' }}>No institutions found matching "{searchTerm}"</p>
                                )}
                            </div>
                            {isMobile && !showAllKerala && !searchTerm && filteredKerala.length > 4 && (
                                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                    <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '10px 24px' }} onClick={() => setShowAllKerala(true)}>
                                        View More
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'karnataka' && <CityAccordion data={karnatakaColleges} searchTerm={searchTerm} expandedCity={expandedCity} toggleCity={toggleCity} onViewDetails={handleViewDetails} isMobile={isMobile} />}
                    {activeTab === 'tamilnadu' && <CityAccordion data={tamilNaduColleges} searchTerm={searchTerm} expandedCity={expandedCity} toggleCity={toggleCity} onViewDetails={handleViewDetails} isMobile={isMobile} />}
                </div>
            </div>
            <CollegeModal college={selectedCollege} onClose={handleCloseModal} />
        </section>
    );
}
