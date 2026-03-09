import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-24 pb-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <a href="#" className="text-2xl font-black tracking-tighter text-foreground">
                            JD<span className="text-primary">.</span>
                        </a>
                        <p className="text-muted-foreground mt-4 max-w-xs text-sm">
                            Building the future of the web with scalable backend architectures and clean code.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/jaydip591" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:bg-foreground/10 hover:text-primary transition-all">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/jaydip-prajapati-bbb920226/" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:bg-foreground/10 hover:text-primary transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:prajapatijaydip591@gmail.com" className="glass p-3 rounded-full hover:bg-foreground/10 hover:text-primary transition-all">
                            <Mail size={20} />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="glass group p-4 rounded-2xl hover:bg-foreground/10 hover:border-primary/50 transition-all"
                    >
                        <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
                    <p>© 2026 Jaydip Prajapati. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <span className="text-red-500">♥</span> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
