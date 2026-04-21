import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const NAV_ITEMS = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Resume', to: 'resume' },
    { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="navbar__inner">
                <Link to="home" smooth duration={600} className="navbar__logo">
                    <span className="navbar__logo-bracket">&lt;</span>
                    AR
                    <span className="navbar__logo-bracket"> /&gt;</span>
                </Link>

                {/* Desktop links */}
                <ul className="navbar__links">
                    {NAV_ITEMS.map((item, i) => (
                        <motion.li
                            key={item.to}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                        >
                            <Link
                                to={item.to}
                                spy
                                smooth
                                duration={600}
                                offset={-70}
                                activeClass="active"
                                className="navbar__link"
                            >
                                <span className="navbar__link-num">0{i + 1}.</span>
                                {item.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    className="navbar__toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {NAV_ITEMS.map((item, i) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                spy
                                smooth
                                duration={600}
                                offset={-70}
                                className="navbar__mobile-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                <span className="navbar__link-num">0{i + 1}.</span>
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
