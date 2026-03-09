import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Python Backend Developer",
      company: "Webelight Solutions",
      period: "Aug 2025 - Present",
      location: "Ahmedabad",
      description: [
        "Started as a FastAPI Backend Dev Intern (6 months) from Aug 25, 2025 to Feb 21, 2026.",
        "Transitioned to a Full-time Backend Developer role after successful internship completion.",
        "Specializing in building high-performance APIs and scalable backend architectures using FastAPI.",
        "Collaborating with cross-functional teams to deliver robust software solutions."
      ]
    },
    {
      role: "Python Full Stack Developer Intern",
      company: "QSpiders",
      period: "Mar 2025 - Jun 2025",
      location: "Ahmedabad",
      description: [
        "Three-month intensive internship focusing on core programming foundations (Mar 25, 2025 - Jun 25, 2025).",
        "Mastered Python programming basics and data structures.",
        "Gained in-depth knowledge of MySQL database management and complex SQL queries."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-secondary mb-4"
          >
            <Briefcase size={20} />
            <span className="text-sm font-mono uppercase tracking-widest">Career Path</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-2 mb-0"
          >
            Experience
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                {/* Dot */}
                <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-2 h-2 rounded-full bg-secondary shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10" />

                {/* Info Side */}
                <div className="md:text-right md:pr-12 pl-8 md:pl-0">
                  <div className="inline-flex items-center space-x-2 text-secondary/60 mb-2 font-mono text-xs uppercase tracking-wider">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 tracking-tight">{exp.role}</h3>
                  <div className="flex items-center md:justify-end text-secondary font-medium mb-4">
                    <span>{exp.company}</span>
                    <span className="mx-2 opacity-30">|</span>
                    <div className="flex items-center text-xs text-muted-foreground uppercase tracking-widest">
                       <MapPin size={12} className="mr-1" />
                       {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description Side / Card */}
                <div className="pl-8 md:pl-12">
                  <div className="glass-card p-6 border-foreground/5 hover:border-secondary/20 transition-colors">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start text-sm leading-relaxed">
                          <span className="text-secondary mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
