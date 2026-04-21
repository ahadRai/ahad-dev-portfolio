import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

export default function Hero() {
    return (
        <section className="section hero" id="home">
            <div className="section-inner hero__content">
                <motion.p
                    className="hero__greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    className="hero__name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Ahad Raiyen.
                </motion.h1>

                <motion.h2
                    className="hero__tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    I build things for the web.
                </motion.h2>

                <motion.p
                    className="hero__desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    Software developer specializing in building scalable web applications,
                    microservices, and interactive digital experiences. Currently based in
                    Dhaka, Bangladesh.
                </motion.p>

                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    <Link to="projects" smooth duration={600} offset={-70}>
                        <button className="btn-primary">View My Work</button>
                    </Link>

                    <div className="hero__socials">
                        <a href="https://github.com/ahadRai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/ahadrai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:ahadraiyen@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
