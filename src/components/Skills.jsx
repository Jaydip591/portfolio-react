import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Database } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
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
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const SkillCategory = ({ title, icon: Icon, skills, colorClass }) => {
    // Helper to determine the gradient colors based on the colorClass
    const getGradient = () => {
        if (colorClass.includes('primary')) return 'from-primary to-primary/60';
        if (colorClass.includes('secondary')) return 'from-secondary to-secondary/60';
        return 'from-accent to-accent/60';
    };

    const getTextColor = () => {
        if (colorClass.includes('primary')) return 'text-primary';
        if (colorClass.includes('secondary')) return 'text-secondary';
        return 'text-accent';
    };

    return (
        <motion.div
            variants={itemVariants}
            className="glass-card p-8"
        >
            <div className={`flex items-center space-x-3 mb-8 ${colorClass}`}>
                <Icon size={24} />
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
            </div>
            <div className="space-y-6">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                            <span className={`text-sm font-mono ${getTextColor()}`}>{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                                viewport={{ once: true }}
                                className={`h-full bg-gradient-to-r ${getGradient()}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: 'Backend',
            icon: Cpu,
            colorClass: 'text-primary',
            skills: [
                { name: 'Python', level: 90 },
                { name: 'FastAPI', level: 85 },
                { name: 'SQLAlchemy', level: 80 },
                { name: 'REST APIs', level: 95 },
                { name: 'JWT Auth', level: 85 },
            ],
        },
        {
            title: 'Database & Tools',
            icon: Database,
            colorClass: 'text-secondary',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'Git', level: 90 },
                { name: 'GitHub', level: 85 },
                { name: 'VS Code', level: 95 },
                { name: 'Antigravity (AI)', level: 100 },
            ],
        },
        {
            title: 'Frontend basics',
            icon: Layout,
            colorClass: 'text-accent',
            skills: [
                { name: 'HTML', level: 80 },
                { name: 'CSS', level: 75 },
                { name: 'JavaScript', level: 70 },
            ],
        },
    ];

    return (
        <section id="skills" className="section-container relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="heading-2">Technical <span className="text-secondary">Arsenal</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A toolbox built for scalability, performance, and reliability using modern backend technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <SkillCategory key={cat.title} {...cat} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
