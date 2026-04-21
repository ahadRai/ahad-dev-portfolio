import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const experiences = [
    {
        title: 'Software Developer Intern',
        company: 'Bit Encrypt IT',
        period: 'September 2025 – March 2026',
        bullets: [
            'Redesigned ReadyHow and fixed previous design issues',
            'Developed a scalable e-commerce web application in collaboration with a cross-functional team',
            'Designed and implemented Go-based microservices for user authentication and rate limiting, containerized using Docker',
            'Tested RESTful service endpoints using Postman',
        ],
    },
];

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="section-inner">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number">02.</span> Experience
                </motion.h2>

                <div className="exp__timeline">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className="exp__card glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                            <div className="exp__header">
                                <div className="exp__icon-wrap">
                                    <FaBriefcase />
                                </div>
                                <div>
                                    <h3 className="exp__title">{exp.title}</h3>
                                    <p className="exp__company">{exp.company}</p>
                                </div>
                                <span className="exp__period">
                                    <FaCalendarAlt /> {exp.period}
                                </span>
                            </div>
                            <ul className="exp__bullets">
                                {exp.bullets.map((b, j) => (
                                    <motion.li
                                        key={j}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + j * 0.1, duration: 0.4 }}
                                    >
                                        {b}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
