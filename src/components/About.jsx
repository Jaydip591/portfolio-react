import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Rocket } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center space-x-2 text-primary mb-4">
                        <User size={20} />
                        <span className="text-sm font-mono uppercase tracking-widest">About Me</span>
                    </div>
                    <h2 className="heading-2 mb-6">Architecting the <span className="text-primary">Core</span> of Web Apps</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        I am a backend developer with a strong interest in building scalable APIs and modern web systems.
                        I specialize in Python backend development and enjoy solving complex technical problems with elegant, efficient solutions.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-card p-6"
                        >
                            <Code2 className="text-secondary mb-4" size={32} />
                            <h3 className="font-bold text-foreground mb-2">Clean Code</h3>
                            <p className="text-sm text-muted-foreground">Writing maintainable and efficient code following industry best practices.</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-card p-6"
                        >
                            <Rocket className="text-primary mb-4" size={32} />
                            <h3 className="font-bold text-foreground mb-2">Fast APIs</h3>
                            <p className="text-sm text-muted-foreground">Optimizing backend performance for seamless user experiences.</p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:opacity-100 opacity-50 transition-all duration-700" />
                    <div className="relative glass-card aspect-square flex items-center justify-center p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                        <div className="text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6 shadow-[0_0_30px_rgb(var(--color-primary)/0.3)] overflow-hidden"
                            >
                                <img 
                                    src="/profile.jpg" 
                                    alt="Jaydip Prajapati" 
                                    className="w-full h-full object-cover rounded-full filter contrast-[1.1] grayscale-[20%]"
                                />
                            </motion.div>
                            <p className="text-xl font-bold font-mono neon-text">Jaydip Prajapati</p>
                            <p className="text-muted-foreground text-sm uppercase tracking-tighter mt-1">Python Backend Expert</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
