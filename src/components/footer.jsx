import React from 'react';
import { motion } from 'framer-motion';
import './footer.css';

export default function footer({ onNavigate }) {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            borderRadius: "0px",
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            borderRadius: "40px",
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    return (
        <section id="contact" className="luxury-footer-wrapper">
            <motion.div
                className="luxury-footer-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
                variants={containerVariants}
            >

                <div className="luxury-noise-overlay" />

                <div className="luxury-footer-bottom">
                    <motion.div className="luxury-footer-logo" variants={itemVariants}>
                        <h1 className="logo-text">INFLUIX</h1>
                    </motion.div>


                    <motion.div variants={itemVariants} className="luxury-footer-cta-wrapper">
                        <h4 className="luxury-footer-cta">READY TO SCALE?</h4>
                    </motion.div>

                    <motion.div variants={itemVariants} className="luxury-footer-divider" />


                    <motion.div className="luxury-footer-nav" variants={itemVariants}>
                        <a href="https://www.instagram.com/influix.productions/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://wa.link/xx6f4l" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </motion.div>

                    <motion.div className="luxury-footer-action" variants={itemVariants}>
                        <motion.button
                            onClick={() => onNavigate && onNavigate('contact')}
                            className="luxury-footer-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Connect with us!
                        </motion.button>
                    </motion.div>

                    <motion.div className="luxury-footer-copyright" variants={itemVariants}>
                        © {new Date().getFullYear()} INFLUIX. ALL RIGHTS RESERVED.
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
