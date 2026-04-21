import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'Health Bar',
        subtitle: 'Medical Record-Keeping Platform',
        tech: ['Go', 'Gorilla Mux', 'PostgreSQL', 'JWT', 'Docker'],
        desc: 'Microservices-based healthcare platform with API Gateway, Auth, Patient, Doctor, and Prescription services. JWT-based authentication with role-based access control and rate limiting middleware. Docker containerization for each microservice.',
        github: 'https://github.com/ahadRai/health-bar',
    },
    {
        title: 'Multi Vendor E-commerce',
        subtitle: 'Full-Stack E-commerce Platform',
        tech: ['Spring Boot', 'JWT', 'JPA', 'Thymeleaf', 'Swagger'],
        desc: 'Multi-vendor e-commerce platform enabling product management, order processing, and shopping cart functionality. Secure user authentication with role-based access, vendor-specific dashboards, image uploads, and integrated payment support.',
        github: 'https://github.com/ahadRai/MultiVendor',
    },
    {
        title: 'Share Vortex',
        subtitle: 'Web-Based File Sharing Platform',
        tech: ['Spring Boot', 'HTML', 'CSS', 'Docker', 'Maven'],
        desc: 'File-sharing web app enabling single-use, tokenized uploads and streaming downloads. REST controllers, Thymeleaf views, packaged with Maven and Docker, deployed on Render.',
        github: 'https://github.com/ahadRai/ShareVortex',
    },
    {
        title: 'Console Group Chat',
        subtitle: 'Real-Time Chat Application',
        tech: ['Java', 'Socket Programming', 'Multithreading'],
        desc: 'Console-based group chat application enabling real-time message exchange among multiple users. Core networking, messaging logic, and user session management with socket programming and concurrent processing.',
        github: 'https://github.com/ahadRai/ConsoleGroupChat',
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="section-inner">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number">04.</span> Projects
                </motion.h2>

                <div className="projects__grid">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={i}
                            className="projects__card glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                        >
                            <div className="projects__card-header">
                                <div className="projects__folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                                        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                                    </svg>
                                </div>
                                <div className="projects__links">
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                            <h3 className="projects__title">{proj.title}</h3>
                            <p className="projects__subtitle">{proj.subtitle}</p>
                            <p className="projects__desc">{proj.desc}</p>
                            <div className="projects__tech">
                                {proj.tech.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
