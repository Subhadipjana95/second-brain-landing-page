import React from 'react';
import { Calendar, Phone} from "lucide-react";
import MobileMockup from './mobileMockup';

const cta = () => {
    return (
        <section id='cta' className="py-24 px-6 bg-black relative flex justify-center w-full overflow-hidden z-10">
            {/* The Main CTA Card */}
            <div className="relative w-full max-w-7xl rounded-[calc(0.45rem*3.4)] bg-[rgba(43,55,80,0.05)] border border-[rgba(170,202,255,0.08)] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_100px_rgba(52,143,192,0.25)] mockup-glow-edge backdrop-blur-xl">
                
                {/* Intense Background Glow intersecting the mockup */}
                <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[800px] h-[800px] bg-[#348fc0]/35 blur-[150px] mix-blend-screen rounded-full pointer-events-none z-0" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-white/10 blur-[120px] mix-blend-screen rounded-full pointer-events-none z-0" />
                <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#348fc0]/15 blur-[150px] rounded-full pointer-events-none z-0" />
                
                {/* Left Content */}
                <div className="relative z-10 w-full md:w-[50%] p-10 md:p-16 lg:p-20 flex flex-col justify-center gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl md:text-[42px] font-medium leading-[1.1] tracking-tight text-white mb-2">
                            <span className="text-white/60">Accelerate Innovation,</span><br/>
                            Build Smarter, Achieve More
                        </h2>
                        <p className="text-[17px] text-white/50 max-w-[400px] leading-relaxed">
                            Millions of people trust Brain.2 to streamline their knowledge management and accelerate growth.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 mt-6">
                        {/* Book A Demo Button - Glossy Style matching Button Design */}
                        <button className="relative rounded-2xl p-[1.5px] group overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_50px_rgba(52,143,192,0.3)]">
                            {/* Outer Gradient Rim */}
                            <div className="absolute inset-0 bg-linear-to-b from-white/40 via-[#348fc0] to-[#2563eb] opacity-80" />
                            {/* Intense Top edge light */}
                            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/80 shadow-[0_0_15px_3px_rgba(255,255,255,0.8)] z-10" />
                            
                            {/* Inner Glass Body */}
                            <div className="relative bg-linear-to-b from-[#2a4563] to-[#0a1120] backdrop-blur-xl rounded-[14px] px-8 py-3.5 z-20 flex items-center justify-center gap-2 border-[0.5px] border-[#348fc0]/30 shadow-[inset_0_5px_20px_rgba(255,255,255,0.1)]">
                                <Calendar className="w-5 h-5 text-white" strokeWidth={1.5} />
                                <span className="text-[15px] font-semibold text-white tracking-wide">Download it for free</span>
                            </div>
                        </button>

                        {/* Contact Us Text Link */}
                        <button className="group flex items-center gap-3 text-white transition-colors duration-300 hover:opacity-80">
                            <Phone className="w-[18px] h-[18px] text-white/70" />
                            <span className="text-[15px] font-semibold tracking-wide">Contact Us</span>
                        </button>
                    </div>
                </div>

                {/* Right Mockup (3D Tilted Perspective) */}
                <MobileMockup />
            </div>
        </section>
    );
}

export default cta;