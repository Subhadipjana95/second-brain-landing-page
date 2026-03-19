import React from 'react'

const footer = () => {
    return (
        <footer 
            className="relative w-full"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
            {/* UPPER PORTION (Opaque Background, Scrolls Naturally) */}
            <div className="relative z-20 w-full bg-black pt-24 pb-12 px-6 md:px-[120px] rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto">
                    {/* Upper Footer Links Section */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 mb-8">

                        {/* Brand Section */}
                        <div className="col-span-2 flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-[rgba(43,55,80,0.1)] flex items-center justify-center border border-[rgba(170,202,255,0.2)]">
                                    <div className="w-4 h-4 rounded-full bg-linear-to-br from-[#348fc0] to-[#2563eb]" />
                                </div>
                                <span className="text-xl tracking-tight text-white">Brain.2</span>
                            </div>
                            <p className="text-sm text-white/40 max-w-[280px] leading-relaxed">
                                Gather notes centrally from all media, and you have full context to your knowledge meet.
                            </p>
                            <div className="mt-4 text-[13px] text-white/30 font-medium tracking-wide">
                                © copyright Second Brain 2025. All rights reserved.
                            </div>
                        </div>

                        {/* Pages */}
                        <div className="flex flex-col gap-5">
                            <h4 className="text-[15px] font-semibold text-white tracking-wide">Pages</h4>
                            <ul className="flex flex-col gap-3.5">
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Home</a></li>
                                <li><a href="#workflow" className="text-white/40 hover:text-white transition-colors text-[14px]">Features</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Case Studies</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Pricing</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Blog</a></li>
                            </ul>
                        </div>

                        {/* Socials */}
                        <div className="flex flex-col gap-5">
                            <h4 className="text-[15px] font-semibold text-white tracking-wide">Socials</h4>
                            <ul className="flex flex-col gap-3.5">
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Twitter</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Discord</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">GitHub</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">LinkedIn</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-5">
                            <h4 className="text-[15px] font-semibold text-white tracking-wide">Legal</h4>
                            <ul className="flex flex-col gap-3.5">
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Privacy Policy</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Terms of Service</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[14px]">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM PORTION (Revealed Curriculum Effect) */}
            <div className="relative w-full h-[55vw] md:h-[22vw] bg-black -z-10">
                {/* overflow-hidden removed to allow the ambient light to cast UPWARDS behind the curtain */}
                <div className="fixed bottom-0 left-0 w-full h-[55vw] md:h-[22vw] flex items-end justify-center pointer-events-none select-none z-0 border-t border-[rgba(170,202,255,0.05)]">
                    
                    {/* Broad Ambient light to back-light the rounded corners of upper curtain */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] -translate-y-1/2 bg-[#348fc0]/25 blur-[120px] rounded-full z-0 mix-blend-screen" />

                    {/* Glowing Top Edge Rim Line (Replica of Button Glow) */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-linear-to-r from-transparent via-[rgba(170,202,255,0.9)] to-transparent blur-[1.5px] z-10 shadow-[0_0_24px_10px_rgba(52,143,192,0.6)]" />
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-linear-to-r from-transparent via-white to-transparent opacity-90 z-20" />

                    {/* Ambient Glow Falling Downwards from Top Edge */}
                    <div className="absolute top-0 left-0 w-full h-[70%] bg-linear-to-b from-[#348fc0]/25 via-[#348fc0]/5 to-transparent blur-[60px] z-0 mix-blend-screen" />
                    
                    {/* Giant Text with illuminated top ridge reacting to the top glow */}
                    <h2 className="text-[22vw] font-semibold text-transparent bg-clip-text bg-linear-to-b from-[rgba(170,202,255,0.6)] via-[#232527] via-25% to-[#232527] leading-[0.85] tracking-tighter text-center uppercase translate-y-[2%] relative z-10 drop-shadow-[0_-5px_30px_rgba(52,143,192,0.15)]">
                        Brain.2
                    </h2>

                    {/* Gradient Mask for Fade from Bottom Effect (25% from bottom end) */}
                    <div className="absolute inset-x-0 bottom-0 h-[25%] bg-linear-to-t from-black via-black/60 to-transparent z-20" />
                </div>
            </div>
        </footer>
    )
}

export default footer