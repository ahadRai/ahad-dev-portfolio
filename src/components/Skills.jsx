import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
    {
        title: 'Languages',
        items: ['Java', 'Go', 'C/C++', 'Python', 'JavaScript', 'PHP', 'HTML', 'CSS'],
    },
    {
        title: 'Frameworks & Libraries',
        items: ['Spring', 'React', 'Laravel'],
    },
    {
        title: 'Tools & Databases',
        items: ['Docker', 'Git', 'RabbitMQ', 'PostgreSQL', 'MySQL', 'MSSQL', 'Redis', 'Postman'],
    },
    {
        title: 'Others',
        items: [
            'System Design',
            'Microservices',
            'MVC',
            'Event Driven Architecture',
            'REST',
            'gRPC',
            'Load Balancing',
            'SOLID',
            'Agile',
            'DSA',
            'OOP',
            'Operating Systems',
        ],
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};
const chip = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="section-inner">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number">03.</span> Skills
                </motion.h2>

                <div className="skills__grid">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={gi}
                            className="skills__group glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.1, duration: 0.5 }}
                        >
                            <h3 className="skills__group-title">{group.title}</h3>
                            <motion.div
                                className="skills__chips"
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {group.items.map((item) => (
                                    <motion.span key={item} className="skill-chip" variants={chip}>
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
