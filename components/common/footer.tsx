const footer = () => {
    return (
        <footer
            className="relative w-full mt-10"
            style={{ clipPath: "polygon(0% 1px, 100% 1px, 100% 100%, 0% 100%)" }}
        >

            {/* UPPER PORTION (Opaque Background, Scrolls Naturally) */}
            <div
                className="relative z-20 w-full bg-[#030508] pt-24 pb-16 px-6 md:px-[80px] rounded-b-[50px] overflow-hidden"
                style={{
                    boxShadow: `
                        0 -12px 16px -8px rgba(255,255,255,0.05) inset,
                        0 -24px 32px -12px rgba(52,143,192,0.15) inset,
                        0 40px 80px rgba(0,0,0,0.9),
                        0 20px 50px rgba(52,143,192,0.15)
                    `,
                    borderBottom: '1px solid rgba(52,143,192,0.3)'
                }}
            >

                {/* Stunning Architectural Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_4px,transparent_4px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_top,black_10%,transparent_90%)] z-0 pointer-events-none" />

                {/* Vertical Edge Lighting on upper container */}
                <div className="absolute left-0 bottom-[10%] w-px h-[40%] bg-linear-to-b from-transparent via-[#348fc0]/30 to-transparent shadow-[0_0_20px_rgba(52,143,192,0.5)] z-0" />
                <div className="absolute right-0 bottom-[10%] w-px h-[40%] bg-linear-to-b from-transparent via-[#348fc0]/30 to-transparent shadow-[0_0_20px_rgba(52,143,192,0.5)] z-0" />

                <div className="max-w-[1200px] mx-auto relative z-10">
                    {/* Upper Footer Links Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-8 flex-wrap">

                        {/* Brand Section */}
                        <div className="col-span-2 lg:col-span-4 flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-xl bg-[#0a0c10] flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(52,143,192,0.15)] overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-br from-[#348fc0]/20 to-transparent" />
                                    <div className="w-4 h-4 rounded-full bg-linear-to-br from-white to-[#348fc0] shadow-[0_0_15px_rgba(255,255,255,0.8)] relative z-10" />
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Brain.2</span>
                            </div>
                            <p className="text-[15px] text-white/40 max-w-[320px] leading-relaxed">
                                Empower your digital workspace with an ambient, omnipresent AI context engine. Gather notes centrally from all media securely.
                            </p>
                            <div className="mt-8 text-[13px] text-white/20 font-medium tracking-wide">
                                © {new Date().getFullYear()} Second Brain Inc.<br className="md:hidden" /> All rights reserved.
                            </div>
                        </div>

                        <div className="lg:col-span-2 hidden lg:block" />

                        {/* Pages */}
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            <h4 className="text-[16px] font-semibold text-white/90 tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Platform</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-white/40 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-[15px]">Home</a></li>
                                <li><a href="#workflow" className="text-white/40 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-[15px]">Features</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-[15px]">Use Cases</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-[15px]">Pricing</a></li>
                            </ul>
                        </div>

                        {/* Socials */}
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            <h4 className="text-[16px] font-semibold text-white/90 tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Connect</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-white/40 hover:text-[#348fc0] hover:drop-shadow-[0_0_8px_rgba(52,143,192,0.8)] transition-all text-[15px] flex items-center gap-2">X / Twitter</a></li>
                                <li><a href="#" className="text-white/40 hover:text-[#348fc0] hover:drop-shadow-[0_0_8px_rgba(52,143,192,0.8)] transition-all text-[15px] flex items-center gap-2">Discord</a></li>
                                <li><a href="#" className="text-white/40 hover:text-[#348fc0] hover:drop-shadow-[0_0_8px_rgba(52,143,192,0.8)] transition-all text-[15px] flex items-center gap-2">GitHub</a></li>
                                <li><a href="#" className="text-white/40 hover:text-[#348fc0] hover:drop-shadow-[0_0_8px_rgba(52,143,192,0.8)] transition-all text-[15px] flex items-center gap-2">LinkedIn</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            <h4 className="text-[16px] font-semibold text-white/90 tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Legal</h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[15px]">Privacy Policy</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[15px]">Terms of Service</a></li>
                                <li><a href="#" className="text-white/40 hover:text-white transition-colors text-[15px]">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM PORTION (Revealed Curriculum Effect) */}
            <div className="relative w-full h-[55vw] md:h-[26vw] bg-[#030508] -z-10">
                {/* overflow-hidden removed to allow the ambient light to cast UPWARDS behind the curtain */}
                <div className="fixed bottom-0 left-0 w-full h-[55vw] md:h-[26vw] flex items-end justify-center pointer-events-none select-none z-0">

                    {/* Broad Ambient light reflecting upwards */}
                    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-[#348fc0]/30 blur-[150px] rounded-full z-0 mix-blend-screen" />

                    {/* Laser-Sharp Edge Glowing Rim */}
                    <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white to-transparent opacity-100 z-30" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[3px] bg-linear-to-r from-transparent via-[#348fc0] to-transparent blur-[3px] z-20 shadow-[0_0_40px_15px_rgba(52,143,192,0.8)]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[2px] bg-white blur-[2px] z-20 shadow-[0_0_30px_10px_rgba(255,255,255,1)]" />

                    {/* Ambient Glow Falling Downwards into the cavity */}
                    <div className="absolute top-0 left-0 w-full h-[80%] bg-linear-to-b from-[#348fc0]/30 via-[#348fc0]/5 to-transparent blur-2xl z-10 mix-blend-screen" />

                    {/* Volumetric Glowing Text */}
                    <h2 className="text-[23vw] font-bold text-transparent bg-clip-text bg-linear-to-b from-white via-[#348fc0] via-40% to-[#030508] leading-[0.80] tracking-tighter text-center uppercase translate-y-[2%] relative z-20 drop-shadow-[0_-10px_30px_rgba(52,143,192,0.5)]">
                        Brain.2
                    </h2>

                    {/* Deep Fade from Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-[35%] bg-linear-to-t from-black via-[#030508]/80 to-transparent z-30" />
                </div>
            </div>
        </footer>
    )
}

export default footer