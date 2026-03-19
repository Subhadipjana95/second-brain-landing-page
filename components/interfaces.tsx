import React from 'react';
import { Iphone } from "@/components/ui/iphone";
import { Mic, Search, Bot, User, FileText, Send, Share2, MoreHorizontal, Activity, ArrowRight, Zap, Target, BookOpen, Clock, Command, Play, Network, Sparkles } from "lucide-react";

export default function Interfaces() {
    return (
        <section className="relative w-full overflow-hidden bg-black pb-16 flex flex-col items-center z-10">
            {/* Ambient Background Glows mirroring the generate button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-linear-to-b from-[#348fc0]/30 to-transparent blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" />
            
            {/* The iPhones Block */}
            <div className="relative w-full max-w-[1400px] flex items-center justify-center pointer-events-none px-6 md:px-10 mt-10">
                <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-8 w-full relative">

                    {/* iPhone 1: Chat History (Far Left) */}
                    <div className="hidden md:block relative w-[180px] lg:w-[220px] transform transition-transform duration-700 hover:-translate-y-2 translate-y-16 opacity-50 hover:opacity-100 z-10 saturate-50 hover:saturate-100">
                        {/* Ambient Edge Glow - Top Left */}
                        <div className="absolute top-[10%] left-[-2px] bottom-[40%] w-[3px] bg-linear-to-b from-transparent via-[#348fc0] to-transparent blur-xs shadow-[0_0_20px_5px_rgba(52,143,192,0.8)] z-0" />
                        
                        <Iphone className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative z-10">
                            <div className="w-full h-full bg-[#0a0c10] text-white flex flex-col pt-10 text-[9px]">
                                <div className="px-4 mb-4 flex justify-between items-center">
                                    <h3 className="text-xs font-semibold text-white/90">History</h3>
                                    <Search className="w-3 h-3 text-white/40" />
                                </div>
                                <div className="flex-1 overflow-hidden px-2 flex flex-col gap-1.5">
                                    {[
                                        { title: "Q3 Financials", time: "2h ago", icon: FileText, color: "text-blue-400" },
                                        { title: "Project Alpha", time: "5h ago", icon: Target, color: "text-purple-400" },
                                        { title: "Standup Notes", time: "Yesterday", icon: BookOpen, color: "text-green-400" },
                                        { title: "Q4 Marketing", time: "Mon", icon: Activity, color: "text-orange-400" },
                                        { title: "Sys Architecture", time: "Last Wk", icon: Command, color: "text-zinc-400" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                                            <div className="w-5 h-5 rounded-lg bg-white/5 flex items-center justify-center">
                                                <item.icon className={`w-2.5 h-2.5 ${item.color}`} />
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <span className="text-white/80 font-medium truncate w-[70px] leading-tight">{item.title}</span>
                                                <span className="text-white/30 text-[7px] mt-0.5">{item.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Iphone>
                    </div>

                    {/* iPhone 2: Active Voice Processing (Mid Left) */}
                    <div className="hidden sm:block relative w-[220px] lg:w-[260px] transform transition-transform duration-700 hover:-translate-y-2 translate-y-8 opacity-70 hover:opacity-100 z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]">
                        {/* Ambient Edge Glow - Bottom */}
                        <div className="absolute bottom-[-2px] inset-x-[15%] h-[4px] bg-linear-to-r from-transparent via-[#2563eb] to-transparent blur-xs shadow-[0_0_30px_5px_rgba(37,99,235,0.9)] z-0" />
                        
                        <Iphone className="w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] relative z-10">
                            <div className="w-full h-full bg-[#0d1117] relative flex flex-col overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#348fc0]/50 blur-2xl rounded-full animate-pulse z-0" />
                                
                                <div className="flex-1 w-full flex items-center justify-center relative z-10">
                                    <div className="w-20 h-20 rounded-full border border-[rgba(170,202,255,0.2)] bg-linear-to-b from-[#348fc0]/20 to-transparent flex items-center justify-center shadow-[inset_0_0_20px_rgba(52,143,192,0.4)]">
                                        <div className="w-12 h-12 rounded-full bg-linear-to-tr from-[#348fc0] to-[#2563eb] flex items-center justify-center shadow-[0_0_30px_rgba(52,143,192,0.6)]">
                                            <Mic className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[15%] w-1 h-6 bg-white/20 rounded-full" />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[25%] w-1 h-3 bg-white/40 rounded-full" />
                                    <div className="absolute top-1/2 -translate-y-1/2 right-[25%] w-1 h-10 bg-white/30 rounded-full" />
                                    <div className="absolute top-1/2 -translate-y-1/2 right-[15%] w-1 h-4 bg-white/20 rounded-full" />
                                </div>
                                <div className="h-[25%] w-full flex flex-col items-center justify-start relative z-10">
                                    <p className="text-white/80 font-medium text-xs mb-1.5">Listening...</p>
                                    <p className="text-[#348fc0] text-[10px] font-mono">"Analyze Q3 data..."</p>
                                </div>
                            </div>
                        </Iphone>
                    </div>

                    {/* iPhone 3: Gemini Live Style Main AI Interface (Center) */}
                    <div className="relative w-[280px] lg:w-[320px] transform transition-transform duration-700 hover:-translate-y-4 z-30 shadow-[0_0_80px_rgba(52,143,192,0.3)] ring-1 ring-[#348fc0]/30 rounded-[55.75px]">
                        {/* Huge Ambient Edge Glow - Top */}
                        <div className="absolute top-[-3px] left-[15%] right-[15%] h-[5px] bg-white/50 blur-xs shadow-[0_0_30px_10px_rgba(255,255,255,0.4)] z-0 rounded-t-full" />
                        
                        <Iphone className="w-full relative z-10">
                            <div className="w-full h-full bg-[#030508] flex flex-col relative overflow-hidden">
                                
                                {/* Header */}
                                <div className="absolute top-10 inset-x-0 w-full px-5 flex justify-between items-center z-20">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-5 h-5 rounded-md text-white flex items-center justify-center">
                                            <Bot className="w-4 h-4 text-white drop-shadow-[0_0_5px_white]" />
                                        </div>
                                    </div>
                                    <MoreHorizontal className="w-4 h-4 text-white/50 hover:text-white" />
                                </div>

                                {/* Stunning Gemini Live Glowing Orb! */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[300px] md:h-[300px] flex items-center justify-center animate-[spin_12s_linear_infinite]">
                                    {/* Primary Blob */}
                                    <div className="w-[85%] h-[85%] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-linear-to-tr from-[#348fc0] via-purple-600 to-[#2563eb] blur-[30px] opacity-80 mix-blend-screen" />
                                    {/* Secondary Pulsing Blob */}
                                    <div className="absolute w-[70%] h-[70%] rounded-[60%_40%_30%_70%/50%_50%_50%_60%] bg-linear-to-bl from-cyan-300 via-blue-500 to-indigo-600 blur-[25px] opacity-90 mix-blend-screen animate-pulse" />
                                </div>

                                {/* Bottom UI Controls */}
                                <div className="absolute bottom-[10%] inset-x-0 w-full flex flex-col items-center justify-end pb-4 z-20">
                                    <p className="text-white/90 text-sm font-semibold tracking-wider mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
                                        How can I help?
                                    </p>
                                    
                                    <div className="flex items-center gap-6">
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                            <Activity className="w-4 h-4 text-white/80" />
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-linear-to-br from-white to-white/80 border-[3px] border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center cursor-pointer transform hover:scale-105 active:scale-95 transition-transform">
                                            <div className="w-4 h-4 bg-black rounded-[2px]" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                            <Network className="w-4 h-4 text-white/80" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Iphone>
                    </div>

                    {/* iPhone 4: Semantic Graph (Mid Right) */}
                    <div className="hidden sm:block relative w-[220px] lg:w-[260px] transform transition-transform duration-700 hover:-translate-y-2 translate-y-8 opacity-70 hover:opacity-100 z-20 shadow-[20px_0_40px_rgba(0,0,0,0.5)]">
                        {/* Ambient Edge Glow - Right Side */}
                        <div className="absolute top-[20%] bottom-[20%] right-[-2px] w-[4px] bg-linear-to-b from-transparent via-[#348fc0] to-transparent blur-[5px] shadow-[0_0_25px_8px_rgba(52,143,192,0.8)] z-0" />
                        
                        <Iphone className="w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] relative z-10">
                            <div className="w-full h-full bg-[#0a0c10] flex flex-col text-white pt-10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[10px_10px]" />
                                
                                <div className="px-5 relative z-10 mb-6">
                                    <h3 className="text-sm font-medium text-white/90 leading-tight">Semantic Map</h3>
                                    <p className="text-[#348fc0] text-[8px] mt-0.5 font-mono uppercase">Analyzing 4 sources</p>
                                </div>
                                
                                <div className="flex-1 relative z-10 flex items-center justify-center scale-90">
                                    <div className="w-16 h-16 rounded-full bg-[#348fc0]/10 border border-[#348fc0]/30 shadow-[0_0_40px_rgba(52,143,192,0.4)] flex items-center justify-center backdrop-blur-md">
                                        <Bot className="w-6 h-6 text-[#348fc0]" strokeWidth={1.5} />
                                    </div>
                                    <div className="absolute top-[20%] left-[20%] w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0c10]"><FileText className="w-3 h-3 text-white/40"/></div>
                                    <div className="absolute top-[30%] right-[15%] w-8 h-8 rounded-full border border-[rgba(170,202,255,0.2)] flex items-center justify-center bg-[#0a0c10]"><Activity className="w-2.5 h-2.5 text-[rgba(170,202,255,0.8)]"/></div>
                                    <div className="absolute bottom-[25%] left-[25%] w-6 h-6 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0c10]"><Target className="w-2 h-2 text-white/40"/></div>
                                    <div className="absolute bottom-[35%] right-[20%] w-12 h-12 rounded-full border border-[#348fc0]/30 shadow-[0_0_20px_rgba(52,143,192,0.2)] flex items-center justify-center bg-[#0a0c10]"><Share2 className="w-4 h-4 text-[#348fc0]"/></div>
                                    
                                    <div className="absolute top-[35%] left-[30%] w-[40px] h-px bg-white/10 rotate-45" />
                                    <div className="absolute top-[40%] right-[25%] w-[35px] h-px bg-[rgba(170,202,255,0.3)] -rotate-12" />
                                    <div className="absolute bottom-[40%] left-[35%] w-[30px] h-px bg-white/10 -rotate-45" />
                                    <div className="absolute bottom-[45%] right-[30%] w-[40px] h-px bg-[#348fc0]/40 rotate-20" />
                                </div>
                            </div>
                        </Iphone>
                    </div>

                    {/* iPhone 5: Media Scanning (Far Right) */}
                    <div className="hidden md:block relative w-[180px] lg:w-[220px] transform transition-transform duration-700 hover:-translate-y-2 translate-y-16 opacity-50 hover:opacity-100 z-10 saturate-50 hover:saturate-100">
                        {/* Ambient Edge Glow - Top Right */}
                        <div className="absolute top-[5%] right-[20%] w-[40%] h-[3px] bg-white blur-[3px] shadow-[0_0_20px_5px_rgba(255,255,255,0.8)] z-0 rotate-12" />

                        <Iphone className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative z-10">
                            <div className="w-full h-full bg-[#111317] flex flex-col items-center justify-center relative">
                                <div className="absolute inset-4 rounded-xl border-2 border-dashed border-[#348fc0]/30 opacity-50" />
                                <div className="absolute top-[30%] left-0 w-full h-[1.5px] bg-linear-to-r from-transparent via-[#348fc0] to-transparent shadow-[0_0_15px_rgba(52,143,192,0.8)] animate-[pulse_2s_ease-in-out_infinite]" />
                                
                                <div className="w-16 h-20 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col gap-1 backdrop-blur-md">
                                    <div className="w-full h-0.5 bg-white/20 rounded-sm" />
                                    <div className="w-[80%] h-0.5 bg-white/20 rounded-sm" />
                                    <div className="w-[90%] h-0.5 bg-white/20 rounded-sm" />
                                    <div className="w-full h-px bg-white/10 my-0.5" />
                                    <div className="w-full h-0.5 bg-[#348fc0]/50 rounded-sm" />
                                </div>
                                
                                <div className="mt-6 flex flex-col items-center gap-1.5">
                                    <Play className="w-6 h-6 text-[#348fc0] opacity-50" />
                                    <span className="text-[7px] text-white/50 tracking-wider uppercase font-semibold">Scanning</span>
                                </div>
                            </div>
                        </Iphone>
                    </div>

                </div>
            </div>
        </section>
    );
}