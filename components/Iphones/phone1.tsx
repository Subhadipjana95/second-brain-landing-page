import { Search, FileText, Activity, Target, BookOpen, Command } from "lucide-react";
import { Iphone } from '../ui/iphone';

function Phone1() {
    return (
        <div className="hidden md:block relative w-[180px] lg:w-[220px] transform translate-y-16 z-10 shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
            {/* Ambient Edge Glow - Top Left */}
            <div className="absolute top-[10%] left-[-2px] bottom-[40%] w-[4px] bg-[#348fc0]/40 blur-lg shadow-[0_0_40px_5px_rgba(52,143,192,0.6)] z-0 rounded-l-full" />

            <Iphone className="w-full relative z-10">
                <div className="w-full h-full bg-[#030508] relative flex flex-col overflow-hidden">
                    {/* Minimalist Top Gradient */}
                    <div className="absolute top-0 left-0 w-full h-[30%] bg-linear-to-b from-[#348fc0]/10 to-transparent pointer-events-none" />

                    {/* Header */}
                    <div className="px-4 pt-8 pb-2 flex items-center justify-between mx-1 relative z-10 border-b border-white/5">
                        <h3 className="text-white/80 text-[14px] tracking-tight">History</h3>
                        <div className="w-6 h-6 rounded-full bg-white/5 border border-white/5 flex items-center justify-center backdrop-blur-md">
                            <Search className="w-3 h-3 text-white/40" />
                        </div>
                    </div>

                    {/* List */}
                    <div className="flex-1 overflow-visible px-4 flex flex-col gap-2.5 mt-4 relative z-10">
                        {[
                            { title: "Q3 Financials", time: "2h ago", icon: FileText, active: true },
                            { title: "Project Alpha", time: "5h ago", icon: Target, active: false },
                            { title: "Standup Notes", time: "Yesterday", icon: BookOpen, active: false },
                            { title: "Q4 Marketing", time: "Mon", icon: Activity, active: false },
                            { title: "Sys Architecture", time: "Last Wk", icon: Command, active: false },
                        ].map((item, i) => (
                            <div key={i} className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${item.active ? 'bg-[#348fc0]/10 border-[#348fc0]/40 shadow-[0_5px_20px_rgba(52,143,192,0.2),inset_0_0_15px_rgba(52,143,192,0.1)] ring-1 ring-[#348fc0]/20' : 'bg-white/2 border-white/5 backdrop-blur-sm'} relative overflow-hidden transition-all duration-300`}>
                                {/* subtle inner glow for active item */}
                                {item.active && <div className="absolute inset-0 bg-linear-to-br from-[#348fc0]/20 to-transparent opacity-60 pointer-events-none" />}

                                <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0 relative z-10 ${item.active ? 'bg-black/60 border border-[#348fc0]/50 shadow-[0_0_15px_rgba(52,143,192,0.4)]' : 'bg-white/3 border border-white/10'}`}>
                                    <item.icon className={`w-3.5 h-3.5 ${item.active ? 'text-[#348fc0]' : 'text-white/40'}`} />
                                </div>
                                <div className="flex flex-col flex-1 relative z-10 overflow-hidden">
                                    <div className="flex items-center justify-between w-full">
                                        <span className={`font-medium tracking-wide truncate pr-1 leading-tight ${item.active ? 'text-white text-[11px]' : 'text-white/60 text-[10px]'}`}>{item.title}</span>
                                        {item.active && <div className="w-1.5 h-1.5 rounded-full bg-[#348fc0] animate-pulse shadow-[0_0_5px_rgba(52,143,192,0.8)] shrink-0" />}
                                    </div>
                                    <span className={`text-[9px] tracking-wide mt-0.5 ${item.active ? 'text-white/50' : 'text-white/30'}`}>{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Bottom fade for the list */}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-[#030508] to-transparent pointer-events-none z-20" />
                </div>
            </Iphone>
        </div>
    )
}

export default Phone1