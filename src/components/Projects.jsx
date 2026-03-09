import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const projects = [
    {
        title: "Authentication API with JWT",
        description: "Secure user authentication system built with FastAPI and JWT tokens. Includes password hashing, token validation, and role-based access control.",
        tech: ["FastAPI", "Python", "JWT", "SQLAlchemy"],
        github: "https://github.com/jaydip591",
    },
    {
        title: "File Upload API using FastAPI",
        description: "High-performance API for managing large file uploads and downloads. Features asynchronous processing and validation.",
        tech: ["FastAPI", "Python", "Uvicorn"],
        github: "https://github.com/jaydip591",
    },
    {
        title: "Invoice Generator API",
        description: "Automated invoice generation service that produces professional PDF invoices from JSON data. Scalable and easy to integrate.",
        tech: ["Python", "ReportLab", "FastAPI"],
        github: "https://github.com/jaydip591",
    },
    {
        title: "Python Automation Scripts",
        description: "Collection of advanced automation tools for web scraping, data processing, and system maintenance tasks.",
        tech: ["Python", "Selenium", "Pandas"],
        github: "https://github.com/jaydip591",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section-container relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <motion.div variants={itemVariants}>
                        <div className="flex items-center space-x-2 text-primary mb-4">
                            <Code size={20} />
                            <span className="text-sm font-mono uppercase tracking-widest">Selected Works</span>
                        </div>
                        <h2 className="heading-2 mb-0">Featured <span className="text-primary">Projects</span></h2>
                    </motion.div>
                    <motion.p variants={itemVariants} className="text-muted-foreground max-w-md text-right hidden md:block">
                        A showcase of my recent backend development projects, focusing on API design, automation, and security.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                            <div className="relative glass-card p-8 h-full flex flex-col justify-between overflow-hidden">
                                {/* Decorative background glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 glass rounded-xl text-primary group-hover:neon-text group-hover:scale-110 transition-all duration-300">
                                            <Code size={24} />
                                        </div>
                                        <div className="flex space-x-4">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mb-8 text-sm line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider px-3 py-1 glass rounded-full text-muted-foreground font-semibold group-hover:border-primary/30 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
