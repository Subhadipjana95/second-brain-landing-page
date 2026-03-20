"use client";

import { useEffect, useRef } from 'react';
import Phone1 from './Iphones/phone1';
import Phone2 from './Iphones/phone2';
import Phone3 from './Iphones/phone3';
import Phone4 from './Iphones/phone4';
import Phone5 from './Iphones/phone5';

export default function Interfaces() {
    const sectionRef = useRef<HTMLElement>(null);
    const phone1Ref = useRef<HTMLDivElement>(null);
    const phone2Ref = useRef<HTMLDivElement>(null);
    const phone4Ref = useRef<HTMLDivElement>(null);
    const phone5Ref = useRef<HTMLDivElement>(null);
    
    // Smooth scrolling using LERP state for maximum performance
    const currentY = useRef({ p1: 0, p2: 0, p4: 0, p5: 0 });
    const targetY = useRef({ p1: 0, p2: 0, p4: 0, p5: 0 });
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const calculateParallax = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Only calculate parallax math if the section is actively in the viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                // Determine raw scroll depth relative to the section's center
                const sectionCenter = rect.top + rect.height / 2;
                const screenCenter = windowHeight / 2;
                const offset = (screenCenter - sectionCenter) * 0.12; // Parallax intensity factor
                
                // Outer phones move aggressively, inner phones move subtly, center phone stays anchored
                targetY.current = {
                    p1: offset * -1.8, 
                    p2: offset * -0.7, 
                    p4: offset * -0.7,
                    p5: offset * -1.8,
                };
            }
        };

        const updateStyles = () => {
            // High-performance Linear Interpolation (LERP) formula: current += (target - current) * easing
            const ease = 0.08;
            
            currentY.current.p1 += (targetY.current.p1 - currentY.current.p1) * ease;
            currentY.current.p2 += (targetY.current.p2 - currentY.current.p2) * ease;
            currentY.current.p4 += (targetY.current.p4 - currentY.current.p4) * ease;
            currentY.current.p5 += (targetY.current.p5 - currentY.current.p5) * ease;

            // Apply direct DOM transforms (skips the React Virtual DOM entirely for buttery 60fps)
            if (phone1Ref.current) phone1Ref.current.style.transform = `translateY(${currentY.current.p1}px)`;
            if (phone2Ref.current) phone2Ref.current.style.transform = `translateY(${currentY.current.p2}px)`;
            if (phone4Ref.current) phone4Ref.current.style.transform = `translateY(${currentY.current.p4}px)`;
            if (phone5Ref.current) phone5Ref.current.style.transform = `translateY(${currentY.current.p5}px)`;

            rafId.current = requestAnimationFrame(updateStyles);
        };

        // Bind event listeners passively for minimum main-thread blocking
        window.addEventListener('scroll', calculateParallax, { passive: true });
        calculateParallax(); 
        rafId.current = requestAnimationFrame(updateStyles); 
        
        return () => {
            window.removeEventListener('scroll', calculateParallax);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden bg-black pb-24 pt-16 flex flex-col items-center z-10">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-linear-to-b from-[#348fc0]/20 to-transparent blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" />
            
            {/* The iPhones Block */}
            <div className="relative w-full max-w-[1400px] flex items-center justify-center px-6 md:px-10 mt-10">
                <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-8 w-full relative">
                    <div ref={phone1Ref} className="hidden md:flex shrink min-w-0 items-center justify-center will-change-transform z-10">
                        <Phone1 />
                    </div>
                    <div ref={phone2Ref} className="hidden sm:flex shrink min-w-0 items-center justify-center will-change-transform z-20">
                        <Phone2 />
                    </div>
                    <div className="flex shrink min-w-0 items-center justify-center z-30 relative">
                        <Phone3 />
                    </div>
                    <div ref={phone4Ref} className="hidden sm:flex shrink min-w-0 items-center justify-center will-change-transform z-20">
                        <Phone4 />
                    </div>
                    <div ref={phone5Ref} className="hidden md:flex shrink min-w-0 items-center justify-center will-change-transform z-10">
                        <Phone5 />
                    </div>
                </div>
            </div>
        </section>
    );
}