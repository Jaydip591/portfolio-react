import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Terminal } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] // Custom ease-out cubic
        }
    }
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20">
            <motion.div
                className="section-container text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-mono text-primary uppercase tracking-widest">Available for hire</span>
                    </div>
                </motion.div>

                <motion.h1 variants={itemVariants} className="heading-1 leading-tight">
                    I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Jaydip Prajapati</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium">
                    Backend Developer <span className="text-primary/50 mx-2">|</span> Python Developer
                    <br />
                    <span className="text-base text-muted-foreground/80 mt-2 block font-normal italic">
                        "Building scalable APIs and backend systems with precision."
                    </span>
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="btn-primary flex items-center group"
                    >
                        View Projects
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }} // Removed hardcoded white bg
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="btn-secondary flex items-center"
                    >
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* Code Snippet Decoration */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 max-w-2xl mx-auto glass-card p-4 text-left font-mono text-sm border-foreground/5 opacity-60 hover:opacity-100 transition-opacity"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        <span className="ml-4 text-xs text-muted-foreground flex items-center gap-1">
                            <Terminal size={12} /> jaydip.py
                        </span>
                    </div>
                    <p className="text-secondary">class <span className="text-primary">Developer</span>:</p>
                    <p className="pl-4 text-foreground">def __init__(self):</p>
                    <p className="pl-8 text-muted-foreground">self.name = <span className="text-accent">"Jaydip Prajapati"</span></p>
                    <p className="pl-8 text-muted-foreground">self.role = <span className="text-accent">"Backend Specialist"</span></p>
                    <p className="pl-8 text-muted-foreground">self.focus = [<span className="text-accent">"Scalability"</span>, <span className="text-accent">"API Design"</span>]</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
