'use client'
import { useCurrPage } from '@/lib/store';
import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
    const { page, setPage } = useCurrPage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setPage(entry.target.id);
                }
            });
        }, {
         
            rootMargin: '-50% 0px -50% 0px'
        });

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [setPage]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const playClickSound = () => {
        const audio = new Audio("/click2.wav");
        audio.play().catch(() => {});
    };

    const handleScroll = (id: string) => {
        playClickSound();
        setPage(id);
        const section = document.getElementById(id);
        if (section) {
            // Smoothly scroll to the section
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMenu = () => {
        playClickSound();
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full flex items-center justify-between px-6 py-4 border-b border-[#202021] bg-gray-100 dark:bg-[#050505] sticky top-0 z-50">
            <div className="font-bold text-xl tracking-tighter cursor-pointer" onClick={() => handleScroll('home')}>
                VG.
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
                <button
                    className={`text-base transition-colors cursor-pointer duration-300 ${page === 'home' ? 'text-black dark:text-white font-medium underline' : 'text-[#999999] hover:text-black dark:hover:text-white'}`}
                    onClick={() => handleScroll('home')}
                >
                    Home
                </button>
                <button
                    className={`text-base cursor-pointer transition-colors duration-300 ${page === 'work' ? 'text-black dark:text-white font-medium underline' : 'text-[#999999] hover:text-black dark:hover:text-white'}`}
                    onClick={() => handleScroll('work')}
                >
                    Work
                </button>
                <button
                    className={`text-base cursor-pointer transition-colors duration-300 ${page === 'contact' ? 'text-black dark:text-white font-medium underline' : 'text-[#999999] hover:text-black dark:hover:text-white'}`}
                    onClick={() => handleScroll('contact')}
                >
                    Contact
                </button>
                <button
                    className="text-base cursor-pointer text-[#999999] hover:text-black dark:hover:text-white transition-colors duration-300"
                    onClick={() => {
                        playClickSound();
                        window.open("https://dub.sh/resume-vaibhav", "_blank")
                    }}
                >
                    Resume
                </button>
            </nav>

            {/* Mobile Hamburger Button */}
            <button 
                className="md:hidden text-black dark:text-white"
                onClick={toggleMenu}
            >
                <Menu size={24} />
            </button>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
                        />
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
                            className="fixed top-0 right-0 h-full w-[250px] bg-gray-100 dark:bg-[#050505] border-l border-[#202021] z-[70] p-6 flex flex-col md:hidden"
                        >
                            <div className="flex justify-end mb-10">
                                <button onClick={toggleMenu} className="text-black dark:text-white p-2 rounded-full bg-black/5 dark:bg-white/5">
                                    <X size={24} />
                                </button>
                            </div>
                            <nav className="flex flex-col gap-6">
                                <button
                                    className={`text-xl text-left transition-colors duration-300 ${page === 'home' ? 'text-black dark:text-white font-bold underline' : 'text-[#999999] hover:text-black dark:hover:text-white'}`}
                                    onClick={() => handleScroll('home')}
                                >
                                    Home
                                </button>
                                <button
                                    className={`text-xl text-left transition-colors duration-300 ${page === 'work' ? 'text-black dark:text-white font-bold underline' : 'text-[#999999] hover:text-black dark:hover:text-white'}`}
                                    onClick={() => handleScroll('work')}
                                >
                                    Work
                                </button>
                                <button
                                    className={`text-xl text-left transition-colors duration-300 ${page === 'contact' ? 'text-black dark:text-white font-bold underline' : 'text-[#999999] hover:text-black dark:hover:text-white'}`}
                                    onClick={() => handleScroll('contact')}
                                >
                                    Contact
                                </button>
                                <button
                                    className="text-xl text-left text-[#999999] hover:text-black dark:hover:text-white transition-colors duration-300 mt-4"
                                    onClick={() => {
                                        playClickSound();
                                        window.open("https://dub.sh/resume-vaibhav", "_blank");
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    Resume ↗
                                </button>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
