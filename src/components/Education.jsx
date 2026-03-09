import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-container relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-primary mb-4"
          >
            <GraduationCap size={20} />
            <span className="text-sm font-mono uppercase tracking-widest">Academic Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-2 mb-0"
          >
            Education
          </motion.h2>
        </div>

        {/* Timeline Item */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            {/* Dot */}
            <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10" />

            {/* Content Side */}
            <div className="md:text-right md:pr-12 pl-8 md:pl-0">
               <div className="inline-flex items-center space-x-2 text-primary/60 mb-2 font-mono text-sm">
                  <Calendar size={14} />
                  <span>2022 - 2025</span>
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Bachelor of Computer Applications (BCA)</h3>
               <p className="text-primary font-medium mb-2">Sankalchand Patel University</p>
               <span className="px-3 py-1 glass rounded-full text-[10px] font-mono text-muted-foreground border-white/5 uppercase tracking-wider">
                  2025 Passout
               </span>
            </div>

            {/* Card Side */}
            <div className="pl-8 md:pl-12">
              <div className="glass-card p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={80} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-4xl font-black text-foreground">8.42</span>
                    <span className="text-sm text-muted-foreground uppercase font-bold tracking-widest">CGPA</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground bg-foreground/5 p-2 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Focus on Software Development</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground bg-foreground/5 p-2 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Advanced Data Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
