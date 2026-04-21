import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app you'd POST to an API.
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section className="section" id="contact">
            <div className="section-inner">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number">06.</span> Contact
                </motion.h2>

                <div className="contact__grid">
                    <motion.div
                        className="contact__info glass-card"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Get In Touch</h3>
                        <p>
                            I'm currently open to new opportunities. Whether you have a
                            question or just want to say hi, I'll do my best to get back to
                            you!
                        </p>
                        <div className="contact__details">
                            <a href="mailto:ahadraiyen@gmail.com">
                                <FaEnvelope /> ahadraiyen@gmail.com
                            </a>
                            <a href="tel:+8801771732599">
                                <FaPhone /> +880 1771-732-599
                            </a>
                            <a href="https://linkedin.com/in/ahadrai" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin /> linkedin.com/in/ahadrai
                            </a>
                            <a href="https://github.com/ahadRai" target="_blank" rel="noopener noreferrer">
                                <FaGithub /> github.com/ahadRai
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact__form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="contact__field">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your message..."
                                rows={5}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-primary" disabled={submitted}>
                            {submitted ? '✓ Sent!' : <><FaPaperPlane /> Send Message</>}
                        </button>
                    </motion.form>
                </div>

                {/* Footer */}
                <motion.footer
                    className="footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <p>
                        Designed &amp; Built by <span className="accent">Ahad Raiyen</span>
                    </p>
                    <p className="footer__sub">© {new Date().getFullYear()} All rights reserved.</p>
                </motion.footer>
            </div>
        </section>
    );
}
