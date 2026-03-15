"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mlgpgwnv");

    return (
        <section id="contact" className="section-container relative">
            <div className="text-center mb-16">
                <h2 className="heading-2">Get in <span className="text-primary">Touch</span></h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <motion.a 
                        href="mailto:prajapatijaydip591@gmail.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass-card p-8 flex items-center space-x-6 block"
                    >
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                            <Mail size={32} />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground text-lg">Email</h3>
                            <p className="text-muted-foreground transition-colors group-hover:text-primary">
                                prajapatijaydip591@gmail.com
                            </p>
                        </div>
                    </motion.a>

                    <motion.a 
                        href="https://github.com/jaydip591" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass-card p-8 flex items-center space-x-6 block"
                    >
                        <div className="bg-secondary/10 p-4 rounded-2xl text-secondary">
                            <Github size={32} />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground text-lg">GitHub</h3>
                            <p className="text-muted-foreground transition-colors group-hover:text-primary">
                                jaydip591
                            </p>
                        </div>
                    </motion.a>

                    <motion.a 
                        href="https://www.linkedin.com/in/jaydip-prajapati-bbb920226/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass-card p-8 flex items-center space-x-6 block"
                    >
                        <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                            <Linkedin size={32} />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground text-lg">LinkedIn</h3>
                            <p className="text-muted-foreground transition-colors group-hover:text-primary">
                                Jaydip Prajapati
                            </p>
                        </div>
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card p-8"
                >
                    <AnimatePresence mode="wait">
                        {state.succeeded ? (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                            >
                                <div className="p-4 bg-green-500/10 text-green-500 rounded-full">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                                <p className="text-muted-foreground">Thanks for reaching out, Jaydip. I'll get back to you soon!</p>
                            </motion.div>
                        ) : (
                            <form key="form" onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="full-name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                                        <input 
                                            id="full-name"
                                            type="text" 
                                            name="name"
                                            required
                                            className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" 
                                            placeholder="John Doe" 
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                                        <input 
                                            id="email"
                                            type="email" 
                                            name="email"
                                            required
                                            className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" 
                                            placeholder="john@example.com" 
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        rows="4" 
                                        required
                                        className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" 
                                        placeholder="How can I help you?"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                </div>

                                {state.errors && state.errors.length > 0 && (
                                    <div className="flex items-center gap-2 p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
                                        <AlertCircle size={16} />
                                        <span>Please fix the errors above and try again.</span>
                                    </div>
                                )}

                                <button 
                                    type="submit" 
                                    disabled={state.submitting}
                                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group transition-all duration-300"
                                >
                                    {state.submitting ? (
                                        <span className="flex items-center gap-2">
                                            Sending... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                                        </span>
                                    ) : (
                                        <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

