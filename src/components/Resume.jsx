import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import './Resume.css';

export default function Resume() {
    return (
        <section className="section" id="resume">
            <div className="section-inner">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number">05.</span> Resume
                </motion.h2>

                <motion.div
                    className="resume__card glass-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="resume__content">
                        <div className="resume__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </div>
                        <h3 className="resume__heading">Get My Resume</h3>
                        <p className="resume__text">
                            Download my full resume to learn more about my experience,
                            education, and technical skills.
                        </p>
                        <a
                            href="/AhadSWE.pdf"
                            download="Ahad_Raiyen_Resume.pdf"
                            className="btn-primary"
                        >
                            <FaFileDownload /> Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
