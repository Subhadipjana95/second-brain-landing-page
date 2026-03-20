import { Workflow, Mail, CalendarSync, Sparkles, CheckCircle2 } from "lucide-react";
import { Iphone } from '../ui/iphone';

function Phone5() {
    return (
        <div className="hidden md:block relative w-[180px] lg:w-[220px] transform translate-y-16 z-20 shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
            {/* Ambient Edge Glow - Top Right */}
            <div className="absolute top-[10%] right-[-2px] bottom-[40%] w-[4px] bg-[#348fc0]/40 blur-md shadow-[0_0_40px_5px_rgba(52,143,192,0.6)] z-0 rounded-r-full" />

            <Iphone className="w-full relative z-10">
                <div className="w-full h-full bg-[#030508] relative flex flex-col overflow-hidden leading-tight">
                    {/* Ambient Background Glow */}
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-[#348fc0]/10 blur-3xl pointer-events-none z-0" />

                    <div className="relative z-10 px-4 pt-7 pb-2 bg-background border-b border-white/5 flex items-center justify-between">
                        <h3 className="text-white/80 text-[14px] tracking-tight">Automations</h3>
                        <div className="w-5 h-5 rounded-full bg-[#348fc0]/20 flex items-center justify-center border border-[#348fc0]/30 shadow-[0_0_10px_rgba(52,143,192,0.5)]">
                            <Workflow className="w-2.5 h-2.5 text-[#348fc0]" />
                        </div>
                    </div>

                    {/* Central Graphic */}
                    <div className="flex flex-col items-center justify-center pt-4 pb-6 relative z-10 gap-2">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                            {/* Spinning/pulsing rings */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#348fc0]/30 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-2 rounded-full border border-[#348fc0]/20 animate-[spin_6s_linear_infinite_reverse]" />
                            <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#348fc0] to-[#2563eb] flex items-center justify-center shadow-[0_0_20px_rgba(52,143,192,0.6)]">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-white/90 text-[13px] font-semibold tracking-wide">Active Tasks</span>
                            <p className="text-[#348fc0] text-[8px] mt-0.5 tracking-wider font-semibold">AUTONOMOUS MODE</p>
                        </div>
                    </div>

                    {/* Tasks List */}
                    <div className="flex-1 px-4 space-y-2 relative z-10">
                        
                        {/* Task 1 */}
                        <div className="w-full bg-background/60 border border-white/10 rounded-lg p-2.5 backdrop-blur-md relative overflow-hidden group shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                            {/* progress bar bg */}
                            <div className="absolute left-0 top-0 bottom-0 bg-[#348fc0]/15 w-[75%] z-0 border-r border-[#348fc0]/30 shadow-[5px_0_15px_rgba(52,143,192,0.2)]" />
                            <div className="relative z-10 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-[#0a0c10]/80 border border-white/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-3 h-3 text-[#348fc0]" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="text-white/90 text-[10px] font-medium leading-none mb-1">Sorting Inbox</span>
                                    <span className="text-white/40 text-[8px] leading-none">Categorizing 42 emails</span>
                                </div>
                                <span className="text-[#348fc0] text-[9px] font-bold">75%</span>
                            </div>
                        </div>

                        {/* Task 2 */}
                        <div className="w-full bg-background/60 border border-white/10 rounded-lg p-2.5 backdrop-blur-md relative overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                            <div className="absolute left-0 top-0 bottom-0 bg-[#348fc0]/15 w-[40%] z-0 border-r border-[#348fc0]/30 shadow-[5px_0_15px_rgba(52,143,192,0.2)]" />
                            <div className="relative z-10 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-[#0a0c10]/80 border border-white/10 flex items-center justify-center shrink-0">
                                    <CalendarSync className="w-3 h-3 text-[#348fc0]" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="text-white/90 text-[10px] font-medium leading-none mb-1">Calendar Sync</span>
                                    <span className="text-white/40 text-[8px] leading-none">Resolving conflicts</span>
                                </div>
                                <span className="text-[#348fc0] text-[9px] font-bold">40%</span>
                            </div>
                        </div>

                        {/* Task 3 (Completed) */}
                        <div className="w-full bg-white/2 border border-white/10 rounded-lg p-2.5 backdrop-blur-md relative overflow-hidden opacity-60">
                            <div className="relative z-10 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-[#0a0c10] border border-white/5 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="text-white/70 text-[10px] font-medium leading-none mb-1 line-through">Draft Pitch Deck</span>
                                    <span className="text-emerald-400/60 text-[8px] leading-none">Completed</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Iphone>
        </div>
    )
}

export default Phone5