import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

export default function About() {
    return (
        <section className="section" id="about">
            <div className="section-inner">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number">01.</span> About Me
                </motion.h2>

                <motion.div
                    className="about__grid glass-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="about__text">
                        <p>
                            Hello! I'm <span className="accent">Ahad Raiyen</span>, a software
                            developer based in <span className="accent">Dhaka, Bangladesh</span>.
                            I enjoy creating robust, scalable web applications and diving deep
                            into system design and microservice architectures.
                        </p>
                        <p>
                            My journey started with a curiosity for how things work under the
                            hood — from socket programming to containerized microservices. I
                            love solving complex problems and building tools that make a real
                            impact.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies,
                            contributing to open source, or learning about distributed systems
                            and cloud architecture.
                        </p>
                    </div>

                    <div className="about__info-cards">
                        <div className="about__info-card">
                            <FaGraduationCap className="about__info-icon" />
                            <div>
                                <h4>BSc in CSE</h4>
                                <p>United International University</p>
                                <span className="about__date">February 2026</span>
                            </div>
                        </div>
                        <div className="about__info-card">
                            <FaGraduationCap className="about__info-icon" />
                            <div>
                                <h4>O Levels &amp; A Levels</h4>
                                <p>Willes Little Flower School and College</p>
                                <span className="about__date">January 2021</span>
                            </div>
                        </div>
                        <div className="about__info-card">
                            <FaMapMarkerAlt className="about__info-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
