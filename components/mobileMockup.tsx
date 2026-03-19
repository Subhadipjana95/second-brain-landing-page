import React from 'react'
import { Menu, Activity, Network, Sparkles, Database, GitMerge, FileText, Bot } from "lucide-react";

function MobileMockup() {
    return (
        <div className="relative z-10 w-full md:w-[50%] h-[500px] md:h-auto overflow-hidden pointer-events-none perspective-[2000px]">
            {/* Perspective Container */}
            <div
                className="absolute top-[5%] right-[-30%] w-[150%] h-[150%] md:w-[900px] md:h-[900px] transform-gpu origin-center"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(25deg) rotateY(-25deg) rotateZ(12deg)'
                }}
            >
                {/* Huge Abstract Layout Background lines simulating the reference image frame */}
                <div className="absolute right-0 top-0 w-full h-[80%] border-t border-[rgba(170,202,255,0.15)] flex gap-12 text-white/20 pt-4 px-10 text-sm font-medium tracking-widest">
                    <span className="flex items-center gap-2"><Menu className="w-4 h-4" /> Layout</span>
                    <span className="flex items-center gap-2"><Activity className="w-4 h-4" /> Actions</span>
                </div>

                {/* Main Floating UI Mobile Canvas (Glass Card) */}
                <div
                    className="absolute top-[10%] left-[20%] w-[380px] h-[650px] rounded-[36px] border border-[rgba(170,202,255,0.2)] bg-linear-to-br from-[rgba(15,22,35,0.7)] to-[rgba(15,22,35,0.9)] backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
                    style={{ transform: 'translateZ(80px)' }}
                >
                    {/* Glowing top line of the mobile mockup */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-linear-to-r from-transparent via-[rgba(170,202,255,0.5)] to-transparent" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-white/10 blur-[15px] mix-blend-screen" />

                    {/* StatusBar Fake */}
                    <div className="w-full h-12 flex justify-between items-center px-6 text-white/40 text-xs font-semibold">
                        <span>5:31</span>
                        <div className="flex gap-1.5 items-center">
                            <div className="w-4 h-3 rounded-[2px] border border-white/40 flex" />
                        </div>
                    </div>

                    <div className="flex-1 w-full relative px-6 flex flex-col pb-6">
                        {/* Header */}
                        <div className="flex justify-between items-start mt-4 mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#348fc0] shadow-[0_0_10px_rgba(52,143,192,0.8)] animate-pulse" />
                                <p className="text-[#348fc0] text-[10px] tracking-widest uppercase font-bold">AI Neural Sync</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                                <Bot className="w-3.5 h-3.5 text-white/70" />
                            </div>
                        </div>

                        {/* Metrics Box */}
                        <div className="flex flex-col mb-6">
                            <span className="text-white/40 text-[11px] mb-1 font-medium tracking-wide">SEMANTIC NODES CONNECTED</span>
                            <h1 className="text-[38px] font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-white/50 tracking-tight flex items-baseline gap-2">
                                2.84M
                            </h1>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="h-[2px] w-12 bg-linear-to-r from-[#348fc0] to-transparent rounded-full" />
                                <p className="text-[#348fc0] text-[10px] font-mono tracking-wider">INDEXING VAULT (4)...</p>
                            </div>
                        </div>

                        {/* Graph Visualization Area */}
                        <div className="w-full h-[150px] rounded-2xl border border-[rgba(170,202,255,0.15)] bg-linear-to-b from-[#348fc0]/10 to-[rgba(10,12,16,0.8)] relative flex items-center justify-center overflow-hidden mb-6 shadow-[inset_0_0_30px_rgba(52,143,192,0.1)]">
                            {/* Abstract background grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[16px_16px]" />

                            {/* Central Node */}
                            <div className="relative z-10 w-10 h-10 rounded-full bg-[#348fc0]/20 border border-[#348fc0]/50 flex items-center justify-center shadow-[0_0_30px_rgba(52,143,192,0.6)] backdrop-blur-md">
                                <Network className="w-4 h-4 text-[#348fc0]" />
                            </div>

                            {/* Radar Pulses */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] border border-[#348fc0]/30 rounded-full opacity-60" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] border border-[#348fc0]/10 rounded-full opacity-30" />

                            {/* Floating connection dots (Data sources) */}
                            <div className="absolute top-[20%] left-[20%] w-6 h-6 rounded-full bg-[rgba(15,22,35,0.8)] border border-[rgba(170,202,255,0.2)] flex items-center justify-center text-white/50 shadow-[0_0_10px_rgba(0,0,0,0.5)]"><Database className="w-3 h-3 text-[#348fc0]" /></div>
                            <div className="absolute bottom-[20%] right-[15%] w-6 h-6 rounded-full bg-[rgba(15,22,35,0.8)] border border-[rgba(170,202,255,0.2)] flex items-center justify-center text-white/50 shadow-[0_0_10px_rgba(0,0,0,0.5)]"><FileText className="w-3 h-3 text-purple-400" /></div>
                            <div className="absolute top-[30%] right-[25%] w-6 h-6 rounded-full bg-[rgba(15,22,35,0.8)] border border-[rgba(170,202,255,0.2)] flex items-center justify-center text-white/50 shadow-[0_0_10px_rgba(0,0,0,0.5)]"><GitMerge className="w-3 h-3 text-green-400" /></div>
                        </div>

                        {/* Active Processing Logs */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3 text-[rgba(170,202,255,0.8)]" /> Live AI Extraction
                                </span>
                            </div>
                            {/* Log Item 1 */}
                            <div className="w-full flex items-center gap-3 p-2.5 rounded-[10px] bg-white/2 border border-white/5 backdrop-blur-sm">
                                <div className="w-7 h-7 rounded-md bg-[#348fc0]/10 border border-[#348fc0]/20 flex items-center justify-center">
                                    <FileText className="w-3.5 h-3.5 text-[#348fc0]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white/90 text-[11px] font-medium tracking-wide">Extracted 42 entities via OCR</span>
                                    <span className="text-white/40 text-[9px] font-mono mt-0.5">from Design_Specs_v2.pdf</span>
                                </div>
                            </div>
                            {/* Log Item 2 */}
                            <div className="w-full flex items-center gap-3 p-2.5 rounded-[10px] bg-white/2 border border-white/5 backdrop-blur-sm">
                                <div className="w-7 h-7 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                    <GitMerge className="w-3.5 h-3.5 text-purple-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white/90 text-[11px] font-medium tracking-wide">Context linked to Ticket #491</span>
                                    <span className="text-white/40 text-[9px] font-mono mt-0.5">Matched semantic overlap 94%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileMockup