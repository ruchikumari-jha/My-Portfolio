import React, { useEffect, useState } from 'react';
import { Linkedin, Github, Instagram, Database, Brain, PieChart, Server, Code, Globe, ExternalLink, Mail, Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import profileImg from './assets/hero.png';

function App() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`app-container ${mounted ? 'mounted' : ''}`}>
            <nav className="nav">
                <div className="container nav-content">
                    <div className="nav-left">
                        <span className="logo-icon">RK</span>
                        <a href="#" className="logo">Ruchi Kumari</a>
                    </div>
                    <div className="nav-links">
                        <a href="#home">HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#skills">SKILLS</a>
                        <a href="#education">EDUCATION</a>
                        <a href="#experience">EXPERIENCE</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                    <div className="nav-socials">
                        <a href="https://www.linkedin.com/in/ruchi-kumari-jha/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/ruchikumari-jha" target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                        <a href="https://www.instagram.com/ruchikumari7337/" target="_blank" rel="noopener noreferrer">
                            <Instagram size={20} />
                        </a>
                        <a href="mailto:ruchikumari7337@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section id="home" className="hero-section container">
                    <div className="hero-content">
                        <span className="hero-greeting animate-fade-in-up">Hi, I'm</span>
                        <h1 className="hero-title animate-fade-in-up delay-100">
                            Ruchi Kumari
                        </h1>
                        <h2 className="hero-roles animate-fade-in-up delay-200">

                            <TypeAnimation
                                sequence={[
                                    'Data Storyteller',
                                    2000,
                                    'AI Architect',
                                    2000,

                                ]}
                                wrapper="span"
                                speed={50}
                                className="gradient-text"
                                repeat={Infinity}
                            />
                        </h2>
                        <p className="hero-subtitle animate-fade-in-up delay-700">
                            I'm a Data Science professional specializing in building intelligent solutions through data analysis, machine learning, and predictive modeling.
                        </p>
                        <div className="animate-fade-in-up delay-800">
                            <a href="#projects" className="cta-button">
                                View My Work
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image-container animate-fade-in">
                        <div className="hero-image-wrapper">
                            <img src={profileImg} alt="Ruchi Kumari" className="hero-profile-img" />
                            <div className="hero-image-blob"></div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="section container">
                    <div className="about-header">
                        <span className="about-badge">About</span>
                        <h2 className="about-main-title">Get to Know Me</h2>
                    </div>

                    <div className="about-text-centered glass-card">
                        <p>
                            I specialize in predictive modeling and data analytics — from uncovering hidden patterns to deploying scalable ML models. My focus is on delivering accurate, accessible solutions across the full data lifecycle: analysis, prediction, and presentation — ensuring data doesn't just speak, but drives smarter decisions.
                        </p>
                    </div>
                    <div className="about-cta animate-fade-in-up delay-100">
                        <a href="/Ruchi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button resume-btn">
                            View Resume
                        </a>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="section container">
                    <div className="about-header">
                        <span className="about-badge">Skills</span>
                        <h2 className="about-main-title">What I Do</h2>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-card glass-card">
                            <div className="skill-icon-wrapper">
                                <Database />
                            </div>
                            <h3 className="skill-title">SQL & Database Querying</h3>
                            <p className="skill-desc">
                                I design complex SQL queries and robust database logic that support efficient data extraction and pipeline readiness.
                            </p>
                        </div>

                        <div className="skill-card glass-card">
                            <div className="skill-icon-wrapper">
                                <Brain />
                            </div>
                            <h3 className="skill-title">Machine Learning & Predictive Modeling</h3>
                            <p className="skill-desc">
                                I build and test advanced analytical models to predict future trends, automating decision intelligence based on historical data.
                            </p>
                        </div>

                        <div className="skill-card glass-card">
                            <div className="skill-icon-wrapper">
                                <PieChart />
                            </div>
                            <h3 className="skill-title">Data Visualization & Dashboarding</h3>
                            <p className="skill-desc">
                                I design high-clarity dashboards packed with interactive visual elements, turning raw numbers into actionable business insights.
                            </p>
                        </div>

                        <div className="skill-card glass-card">
                            <div className="skill-icon-wrapper">
                                <Server />
                            </div>
                            <h3 className="skill-title">MLOps & Model Deployment</h3>
                            <p className="skill-desc">
                                I reliably deploy scalable machine learning models into production systems, ensuring they remain fast, accurate, and highly available.
                            </p>
                        </div>

                        <div className="skill-card glass-card">
                            <div className="skill-icon-wrapper">
                                <Code />
                            </div>
                            <h3 className="skill-title">Python Data Analysis</h3>
                            <p className="skill-desc">
                                I analyze large datasets using Python and pandas to uncover hidden patterns, validate data quality, and construct automation workflows.
                            </p>
                        </div>

                        <div className="skill-card glass-card">
                            <div className="skill-icon-wrapper">
                                <Globe />
                            </div>
                            <h3 className="skill-title">Full-Stack Web Development</h3>
                            <p className="skill-desc">
                                I design and implement responsive, robust full-stack applications using modern web technologies to create exceptional digital experiences.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="section container">
                    <div className="about-header">
                        <span className="about-badge">Background</span>
                        <h2 className="about-main-title">Education</h2>
                    </div>
                    <div className="education-grid">
                        <div className="education-card glass-card">
                            <h3 className="edu-title">B. Tech in Computer Science & Engineering</h3>
                            <div className="edu-school">Lovely Professional University</div>
                            <span className="edu-year">2023 - 2027</span>
                        </div>

                        <div className="education-card glass-card">
                            <h3 className="edu-title">Intermediate (12th)</h3>
                            <div className="edu-school">DAV Public School</div>
                            <span className="edu-year">Apr' 22 – Mar' 23</span>
                        </div>

                        <div className="education-card glass-card">
                            <h3 className="edu-title">Matriculation (10th)</h3>
                            <div className="edu-school">DAV Public School</div>
                            <span className="edu-year">Apr' 20 – Mar' 21</span>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="section container">
                    <div className="about-header">
                        <span className="about-badge">My Journey</span>
                        <h2 className="about-main-title">Experience</h2>
                    </div>
                    <div className="experience-list">
                        <div className="experience-card">
                            <div className="exp-header">
                                <div>
                                    <div className="exp-title">Full Stack Developer</div>
                                    <div className="exp-company">Infosys</div>
                                </div>
                                <div className="exp-date">Feb' 5 – Present</div>
                            </div>
                            <ul className="exp-bullets">
                                <li>Built and maintained a Banking System web application by developing interactive user interfaces using React.js and Tailwind CSS, ensuring responsive design and smooth user experience.</li>
                                <li>Architected and integrated secure backend services using FastAPI, enabling efficient handling of banking operations such as account management and transaction processing.</li>
                                <li>Structured and managed application data using PostgreSQL, optimizing database queries and connecting backend APIs with the frontend for seamless data flow.</li>
                            </ul>
                            <div className="tech-stack-container" style={{ marginLeft: '1.5rem' }}>
                                <span className="tech-tag">React.js</span>
                                <span className="tech-tag">Tailwind CSS</span>
                                <span className="tech-tag">FastAPI</span>
                                <span className="tech-tag">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="section container">
                    <div className="about-header">
                        <span className="about-badge">Showcase</span>
                        <h2 className="about-main-title">My Projects</h2>
                    </div>

                    <div className="projects-list">
                        <div className="project-card">
                            <div className="project-header">
                                <div>
                                    <h3 className="project-title">Ecommerce Revenue Forecasting</h3>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/ruchikumari-jha/E-Commerce-Revenue-Forecasting" target="_blank" rel="noopener noreferrer" aria-label="Github Link"><Github size={20} /></a>
                                    <a href="#" aria-label="External Link"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                            <ul className="exp-bullets">
                                <li>Implemented an interactive Streamlit dashboard with real-time data visualization, enabling category-wise revenue analysis and dynamic forecast generation.</li>
                                <li>Designed a robust neural network architecture with 50-unit LSTM layers that learns complex seasonal patterns and trends from historical e-commerce data.</li>
                                <li>Engineered an intelligent data preprocessing pipeline that aggregates daily transactions into weekly patterns, significantly improving LSTM model accuracy for time-series forecasting.</li>
                                <li>Achieved automated model retraining capability - forecasts regenerate instantly when new data is uploaded, ensuring predictions remain current.</li>
                            </ul>
                            <div className="tech-stack-container">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Streamlit</span>
                                <span className="tech-tag">LSTM Neural Networks</span>
                                <span className="tech-tag">Time-Series</span>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-header">
                                <div>
                                    <h3 className="project-title">Digital-Banking System</h3>
                                </div>
                                <div className="project-links">
                                    <div className="exp-date" style={{ marginRight: '1rem', padding: '0.2rem 0.6rem' }}></div>
                                    <a href="https://github.com/springboardmentor54321v/Modern-Digital-Banking/tree/team-one" target="_blank" rel="noopener noreferrer" aria-label="Github Link"><Github size={20} /></a>
                                </div>
                            </div>
                            <ul className="exp-bullets">
                                <li>Developed a full-stack web application for managing banking operations including account creation, fund transfers, and transaction history tracking with React.js and Tailwindcss.</li>
                                <li>Implemented RESTful APIs with FastAPI (Python) for efficient request handling and business logic execution.</li>
                                <li>Designed and integrated PostgreSQL database for secure storage of user accounts, transactions, and balances with ACID compliance.</li>
                            </ul>
                            <div className="tech-stack-container">
                                <span className="tech-tag">React.js</span>
                                <span className="tech-tag">Tailwind CSS</span>
                                <span className="tech-tag">FastAPI</span>
                                <span className="tech-tag">PostgreSQL</span>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-header">
                                <div>
                                    <h3 className="project-title">Memory Allocation Tracker</h3>
                                </div>
                                <div className="project-links">
                                    <a href="https://github.com/ruchikumari-jha/Real-Time-Memory-Allocation-Tracker" target="_blank" rel="noopener noreferrer" aria-label="Github Link"><Github size={20} /></a>
                                </div>
                            </div>
                            <ul className="exp-bullets">
                                <li>Designed and implemented a real-time tracking utility to securely monitor dynamic memory allocations utilizing core C functions like malloc and calloc.</li>
                                <li>Engineered safety structures to automatically identify memory leaks and prevent segmentation faults during heavy processing workloads.</li>
                            </ul>
                            <div className="tech-stack-container">
                                <span className="tech-tag">C</span>
                                <span className="tech-tag">C++</span>
                                <span className="tech-tag">Memory Management</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="section container">
                    <div className="contact-grid">
                        <div className="contact-left">
                            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Let's create something great.</h2>
                            <p className="contact-quote">
                                Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question, want to discuss specific software problems, or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="contact-details-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div className="contact-detail-block" style={{ marginBottom: '0' }}>
                                    <div className="contact-label" style={{ color: 'var(--accent-secondary)' }}>Living In:</div>
                                    <div className="contact-value">Hazaribagh, Jharkhand, India</div>
                                </div>
                                <div className="contact-detail-block" style={{ marginBottom: '0' }}>
                                    <div className="contact-label" style={{ color: 'var(--accent-secondary)' }}>Call Me:</div>
                                    <div className="contact-value">
                                        <a href="tel:7488667337" style={{ color: 'inherit', textDecoration: 'none' }}>+91 7488667337</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-right">
                            {/* <h2 className="section-title" style={{ marginBottom: '2rem' }}>Connect with Me</h2> */}
                            <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="text" className="form-input" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-input" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-textarea" placeholder="Describe your workflow or problem" required></textarea>
                                </div>
                                <button type="submit" className="cta-button submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="container">
                    <p>Designed  &copy; {new Date().getFullYear()} Ruchi.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
