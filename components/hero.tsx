import React from 'react'
import { ChevronDown } from "lucide-react";


const hero = () => {
    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden flex flex-col">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 z-10" />

            {/* Content Container */}
            <div className="relative z-20 flex flex-col w-full h-full flex-1">
                {/* Navbar */}
                <nav className="w-full flex items-center justify-between px-6 md:px-[120px] py-[20px]">
                    {/* Left Side */}
                    <div className="flex items-center gap-[60px]">
                        {/* Logo Placeholder */}
                        <div className="w-[187px] h-[25px] flex items-center">
                            <span className="text-xl font-bold tracking-widest">Second Brain</span>
                        </div>

                        {/* Nav Links */}
                        <div className="hidden md:flex items-center gap-[30px]">
                            {["Home", "Features", "Learning center", "Pricing", "Resources"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="flex items-center gap-[14px] text-[14px] font-medium text-white hover:text-white/80 transition-colors"
                                >
                                    {item}
                                    <ChevronDown className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Join Waitlist Button */}
                    <button className="relative rounded-full p-[0.6px] overflow-hidden group hover:scale-105 transition-transform duration-300">
                        {/* Glow Streak */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-linear-to-r from-transparent via-white to-transparent blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity z-10" />

                        {/* Inner Pill */}
                        <div className="relative rounded-full px-[29px] py-[11px] z-20">
                            <span className="text-[14px] font-medium text-white">Get Early Access</span>
                        </div>
                    </button>
                </nav>

                {/* Hero Content */}
                <div className="flex-1 flex flex-col items-center pt-[100px] md:pt-[180px] pb-[102px] px-6 text-center">
                    <div className="flex flex-col items-center gap-[40px] max-w-[680px]">

                        {/* Badge */}
                        <div className="flex items-center gap-2 rounded-[20px] bg-white/10 border border-white/20 px-4 py-1.5 backdrop-blur-xs">
                            <div className="w-1 h-1 rounded-full bg-white" />
                            <span className="text-[13px] font-medium tracking-widest">
                                <span className="text-white/60">AMBIENT AI · ALWAYS ON ·</span>
                                <span className="text-white"> ZERO EFFORT</span>
                            </span>
                        </div>

                        {/* Heading & Subtitle Container */}
                        <div className="flex flex-col items-center gap-[24px]">
                            {/* Heading */}
                            <h1
                                className="text-[36px] md:text-[56px] font-medium leading-[1.28] max-w-[700px] tracking-tight"
                                style={{
                                    backgroundImage: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    color: "transparent"
                                }}
                            >
                                All-in-one Assistant personalized, fast and free.
                            </h1>

                            {/* Subtitle */}
                            <p className="text-[15px] font-normal text-white/70 max-w-[680px] leading-relaxed">
                                Second Brain listens, understands, and acts — converting your everyday conversations into scheduled tasks, automated workflows, and intelligent decisions.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button className="relative rounded-full p-[0.6px] bg-white overflow-hidden group hover:scale-105 transition-transform duration-300 mt-2">
                            {/* Glow Streak */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-linear-to-r from-transparent via-white to-transparent blur-[2px] opacity-100 z-10" />

                            {/* Inner Pill */}
                            <div className="relative bg-white rounded-full px-[29px] py-[11px] z-20">
                                <span className="text-[14px] font-medium text-black">Add to Chrome — It's free</span>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero