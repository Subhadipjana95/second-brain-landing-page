"use client";
import React from 'react'
import { motion, useScroll, useTransform } from "motion/react";

function RightMockups() {
    const { scrollY } = useScroll();
    const rotateUpper = useTransform(scrollY, [0, 400], [8, 0]);

    return (
        <div className="hidden lg:flex flex-col gap-0 absolute right-[3%] bottom-[6%] z-30 pointer-events-none">

            {/* Task Scheduler Card */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.2 }}
                style={{ zIndex: 2 }}
            >
                <motion.div
                    className="w-[260px] rounded-2xl bg-[rgba(43,55,80,0.12)] backdrop-blur-xl p-4 shadow-[inset_0_0_0_1px_rgba(170,202,255,0.15),inset_0_0_20px_0_rgba(170,202,255,0.06),0_4px_24px_0_rgba(0,0,0,0.4)] mockup-glow-edge"
                    style={{ rotate: rotateUpper, x: 15, y: 15 }}
                >
                {/* Card header */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[rgba(170,202,255,0.1)] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(170,202,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                <line x1="16" x2="16" y1="2" y2="6" />
                                <line x1="8" x2="8" y1="2" y2="6" />
                                <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                        </div>
                        <span className="text-[11px] font-semibold text-white/70 tracking-wide uppercase">Scheduled</span>
                    </div>
                    <span className="text-[10px] text-[rgba(170,202,255,0.4)]">Today</span>
                </div>

                {/* Task items */}
                <div className="space-y-2">
                    {[
                        { time: '9:00 AM', task: 'Review Q4 report', done: true },
                        { time: '11:30 AM', task: 'Team standup sync', done: true },
                        { time: '2:00 PM', task: 'Send follow-up email', done: false },
                        { time: '4:15 PM', task: 'Prepare presentation', done: false },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-3 rounded-xl px-3 py-2 ${item.done
                                    ? 'bg-[rgba(170,202,255,0.06)]'
                                    : 'bg-[rgba(0,0,0,0.15)] border border-[rgba(170,202,255,0.08)]'
                                }`}
                        >
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${item.done
                                    ? 'border-[#348fc0]/60 bg-[#348fc0]/20'
                                    : 'border-[rgba(170,202,255,0.2)]'
                                }`}>
                                {item.done && (
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#348fc0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={`text-[11px] leading-tight truncate ${item.done ? 'text-white/40 line-through' : 'text-white/70'}`}>
                                    {item.task}
                                </p>
                            </div>
                            <span className="text-[9px] text-[rgba(170,202,255,0.35)] shrink-0">{item.time}</span>
                        </div>
                    ))}
                </div>
                </motion.div>
            </motion.div>

            {/* Quick Analytics Card */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.4 }}
                style={{ zIndex: 1 }}
            >
                <div
                    className="w-[220px] rounded-2xl bg-[rgba(43,55,80,0.12)] backdrop-blur-xl p-4 shadow-[inset_0_0_0_1px_rgba(170,202,255,0.15),inset_0_0_20px_0_rgba(170,202,255,0.06),0_4px_24px_0_rgba(0,0,0,0.4)] mockup-glow-edge"
                    style={{ transform: 'rotate(-5deg) translateX(-20px) translateY(-15px)' }}
                >
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[rgba(170,202,255,0.1)] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(170,202,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 3v18h18" />
                            <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-white/70 tracking-wide uppercase">Productivity</span>
                </div>

                {/* Metric */}
                <div className="mb-3">
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-semibold text-white/90">87%</span>
                        <span className="text-[10px] text-[#348fc0] font-medium">+47%</span>
                    </div>
                    <span className="text-[10px] text-white/30">Tasks automated this week</span>
                </div>

                {/* SVG Line chart */}
                <div className="relative h-10 w-full mt-2 mb-1">
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                        <defs>
                            <linearGradient id="line-gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#348fc0" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#348fc0" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M0 38 L16.6 26 L33.3 32 L50 18 L66.6 21 L83.3 4 L100 0 L100 40 L0 40 Z" fill="url(#line-gradient)" />
                        <path d="M0 38 L16.6 26 L33.3 32 L50 18 L66.6 21 L83.3 4 L100 0" fill="none" stroke="#348fc0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="100" cy="0" r="3" fill="#348fc0" stroke="rgba(43,55,80,0.8)" strokeWidth="1.5" />
                    </svg>
                </div>
                <div className="flex justify-between mt-1.5">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                        <span key={i} className="text-[8px] text-white/20 flex-1 text-center">{d}</span>
                    ))}
                </div>
                </div>
            </motion.div>
        </div>
    )
}

export default RightMockups