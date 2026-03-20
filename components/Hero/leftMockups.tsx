"use client";
import React from 'react'
import { motion, useScroll, useTransform } from "motion/react";

function LeftMockups() {
    const { scrollY } = useScroll();
    const rotateUpper = useTransform(scrollY, [0, 400], [-8, 0]);

    return (
        <div className="hidden lg:flex flex-col gap-0 absolute left-[3%] xl:left-[5%] bottom-[6%] z-30 pointer-events-none">

            {/* Voice Recognition Card */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.3 }}
                style={{ zIndex: 2 }}
            >
                <motion.div
                    className="w-[260px] rounded-2xl bg-[rgba(43,55,80,0.12)] backdrop-blur-xl p-4 shadow-[inset_0_0_0_1px_rgba(170,202,255,0.15),inset_0_0_20px_0_rgba(170,202,255,0.06),0_4px_24px_0_rgba(0,0,0,0.4)] mockup-glow-edge"
                    style={{ rotate: rotateUpper, x: -20, y: 1 }}
                >
                {/* Card header */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[rgba(170,202,255,0.1)] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(170,202,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" x2="12" y1="19" y2="22" />
                            </svg>
                        </div>
                        <span className="text-[11px] font-semibold text-white/70 tracking-wide uppercase">Voice Input</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#348fc0] animate-pulse" />
                        <span className="text-[10px] text-[rgba(170,202,255,0.5)]">Live</span>
                    </div>
                </div>

                {/* Waveform visualization */}
                <div className="flex items-end gap-[3px] h-8 mb-3 px-1">
                    {[40, 65, 30, 80, 55, 90, 45, 70, 35, 85, 50, 75, 60, 40, 55, 70, 45, 80, 35, 60, 50, 75, 65, 40].map((h, i) => (
                        <div
                            key={i}
                            className="flex-1 rounded-full bg-[rgba(170,202,255,0.3)] min-w-[2px]"
                            style={{ height: `${h}%` }}
                        />
                    ))}
                </div>

                {/* Transcription */}
                <div className="rounded-xl bg-[rgba(0,0,0,0.2)] p-3 border border-[rgba(170,202,255,0.08)]">
                    <p className="text-[11px] text-white/50 leading-relaxed">
                        <span className="text-white/80">&quot;Remind me to review the Q4 report</span>
                        <span className="text-[rgba(170,202,255,0.6)]"> tomorrow at 9 AM</span>
                        <span className="text-white/80"> and send it to the team.&quot;</span>
                    </p>
                </div>
                </motion.div>
            </motion.div>

            {/* Smart Notes Card */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.15 }}
                style={{ zIndex: 1 }}
            >
                <div
                    className="w-[230px] rounded-2xl bg-[rgba(43,55,80,0.12)] backdrop-blur-xl p-4 shadow-[inset_0_0_0_1px_rgba(170,202,255,0.15),inset_0_0_20px_0_rgba(170,202,255,0.06),0_4px_24px_0_rgba(0,0,0,0.4)] mockup-glow-edge"
                    style={{ transform: 'rotate(3deg) translateX(30px) translateY(-15px)' }}
                >
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[rgba(170,202,255,0.1)] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(170,202,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                        </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-white/70 tracking-wide uppercase">Auto Notes</span>
                </div>

                {/* Note lines */}
                <div className="space-y-2">
                    <div className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[rgba(170,202,255,0.4)] mt-1.5 shrink-0" />
                        <span className="text-[11px] text-white/60 leading-relaxed">Review Q4 financial report</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[rgba(170,202,255,0.4)] mt-1.5 shrink-0" />
                        <span className="text-[11px] text-white/60 leading-relaxed">Send summary to team</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[rgba(170,202,255,0.4)] mt-1.5 shrink-0" />
                        <span className="text-[11px] text-white/60 leading-relaxed">Update PRD for v2.0 release</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[rgba(170,202,255,0.4)] mt-1.5 shrink-0" />
                        <span className="text-[11px] text-white/60 leading-relaxed">Sync with frontend engineers</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#348fc0]/50 mt-1.5 shrink-0" />
                        <span className="text-[11px] text-[rgba(170,202,255,0.5)] leading-relaxed">Follow up Friday 2 PM</span>
                    </div>
                </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LeftMockups