import { AudioLines, Calendar } from "lucide-react";
import { Iphone } from '../ui/iphone';

function Phone2() {
    return (
        <div className="hidden sm:block relative w-[220px] lg:w-[260px] transform translate-y-8 opacity-70 z-20 shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
            {/* Ambient Edge Glow - Top Left */}
            <div className="absolute top-[10%] left-[-2px] bottom-[40%] w-[4px] bg-[#348fc0]/40 blur-md shadow-[0_0_40px_5px_rgba(52,143,192,0.6)] z-0 rounded-l-full" />

            <Iphone className="w-full relative z-10">
                <div className="w-full h-full bg-[#030508] relative flex flex-col overflow-hidden">
                    {/* Flashy Bottom Ambient Glow */}
                    <div className="absolute bottom-0 left-0 w-full h-[60%] bg-linear-to-t from-[#348fc0]/20 to-transparent pointer-events-none z-0" />
                    <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[#348fc0]/40 blur-3xl pointer-events-none z-0" />

                    {/* Header */}
                    <div className="px-2 pl-5 pt-9 pb-2 flex items-center justify-between border-b mx-[2px] border-white/5 relative z-10">
                        <span className="text-white/80 text-[14px] tracking-tight">Brain.2</span>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#348fc0]/10 border border-[#348fc0]/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#348fc0] animate-pulse shadow-[0_0_5px_rgba(52,143,192,0.8)]" />
                            <span className="text-[#348fc0] text-[8px] font-bold tracking-wider">Active</span>
                        </div>
                    </div>

                    {/* Central Ambient Visualization - Very Clean */}
                    <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full px-6 pt-4">
                        {/* Elegant Pulsing Rings */}
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <div className="absolute inset-[-40%] rounded-full border border-[#348fc0]/15 animate-[pulse_3s_ease-in-out_infinite]" />
                            <div className="absolute inset-[-15%] rounded-full border border-[#348fc0]/25 animate-[pulse_2s_ease-in-out_infinite_0.5s]" />
                            <div className="relative w-14 h-14 rounded-full bg-linear-to-tr from-[#348fc0] to-[#5cb1e5] flex items-center justify-center shadow-[0_0_20px_rgba(52,143,192,0.4)] z-10">
                                <AudioLines className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div className="mt-10 text-center space-y-1.5">
                            <h4 className="text-white/90 text-sm font-semibold tracking-wide">Monitoring Context</h4>
                            <p className="text-white/40 text-[10px] leading-tight mx-2">Securely analyzing your environment to capture actionable insights.</p>
                        </div>
                    </div>

                    {/* Professional Task Executed Card */}
                    <div className="px-4 pb-4 relative z-10 w-full mt-auto">
                        <div className="rounded-[calc(0.45rem*3)] border border-white/5 bg-white/2 backdrop-blur-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                            {/* Card Subtle Gradient */}
                            <div className="absolute inset-0 bg-background opacity-60 pointer-events-none" />
                            
                            <div className="flex items-center gap-2 mb-3.5 relative z-10">
                                <div className="w-1 h-1 rounded-full bg-[#348fc0] shadow-[0_0_8px_rgba(52,143,192,0.8)]" />
                                <span className="text-white/50 text-[9px] tracking-tight font-medium">Action Completed</span>
                            </div>
                            
                            <div className="flex gap-3.5 items-center relative z-10">
                                <div className="w-10 h-10 rounded-[10px] bg-black/40 border border-white/5 flex items-center justify-center shrink-0 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
                                    <Calendar className="w-4 h-4 text-white/80" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/90 text-sm font-medium leading-tight tracking-wide">Meeting with Design Team</span>
                                    <span className="text-white/40 text-[10px] tracking-wide">Tomorrow, 10:00 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Iphone>
        </div>
    )
}

export default Phone2