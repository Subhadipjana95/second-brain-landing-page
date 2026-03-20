import { Play, Image as ImageIcon, Phone, Video, ChevronLeft, Paperclip, Mic } from "lucide-react";
import { Iphone } from '../ui/iphone';

function Phone4() {
    return (
        <div className="hidden sm:block relative w-[220px] lg:w-[260px] transform translate-y-8 z-20 shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
            {/* Ambient Edge Glow - Right Side */}
            <div className="absolute top-[10%] right-[-2px] bottom-[40%] w-[4px] bg-[#348fc0]/40 blur-md shadow-[0_0_40px_5px_rgba(52,143,192,0.6)] z-0 rounded-r-full" />

            <Iphone className="w-full relative z-10">
                <div className="w-full h-full bg-[#030508] relative flex flex-col overflow-hidden">
                    {/* Flashy Bottom Ambient Glow */}
                    <div className="absolute bottom-0 left-0 w-full h-[60%] bg-linear-to-t from-[#348fc0]/20 to-transparent pointer-events-none z-0" />
                    <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[#348fc0]/40 blur-3xl pointer-events-none z-0" />

                    {/* Header */}
                    <div className="px-2 pl-5 pt-9 pb-2 flex items-center justify-between border-b mx-[2px] border-white/5 relative z-20 bg-[#030508]/80 backdrop-blur-md">
                        <span className="text-white/80 text-[14px] tracking-tight">Brain.Storage</span>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#348fc0]/10 border border-[#348fc0]/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#348fc0] animate-pulse shadow-[0_0_5px_rgba(52,143,192,0.8)]" />
                            <span className="text-[#348fc0] text-[8px] font-bold tracking-wider">Active</span>
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 overflow-visible px-3 pt-2 pb-1 flex flex-col gap-3 relative z-10 w-full">
                        
                        <div className="w-full flex justify-center mb-1">
                            <span className="px-2 py-1 rounded-md bg-white/5 backdrop-blur-sm text-white/40 text-[8px] uppercase tracking-wider font-semibold">Today</span>
                        </div>

                        {/* Image Upload Message (Right/User) */}
                        <div className="flex justify-end w-full">
                            <div className="max-w-[80%] rounded-lg rounded-tr-sm bg-background/60 border border-[#348fc0]/20 p-1 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                                <div className="w-full h-24 rounded-md bg-[#0a0c10]/50 border border-white/5 relative overflow-hidden flex items-center justify-center group">
                                    {/* Real world note image from unsplash */}
                                    <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cvcG4p1pwTS-k7y-lbgg2IZaIgnG3npyug&s" 
                                        alt="Notes"
                                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-[#348fc0]/30 to-transparent mix-blend-overlay" />
                                </div>
                                <div className="flex justify-end pr-1 pt-1 opacity-60">
                                    <span className="text-[9px] text-[#348fc0] font-medium">10:41 AM</span>
                                </div>
                            </div>
                        </div>

                        {/* Audio Message (Right/User) */}
                        <div className="flex justify-end w-full">
                            <div className="w-[85%] rounded-lg rounded-tr-sm bg-background/60 border border-[#348fc0]/30 p-1 pr-2 pt-2 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-[#348fc0] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(52,143,192,0.5)]">
                                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1 pr-1">
                                        {/* Fake Waveform */}
                                        <div className="flex justify-between h-5 items-center px-1">
                                            {[12, 16, 10, 18, 14, 8, 16, 12, 14, 8, 10, 6, 8, 4].map((h, i) => (
                                                <div key={i} className="w-[2.5px] rounded-full bg-[#348fc0]" style={{ height: `${h}px`, opacity: i > 8 ? 0.3 : 1 }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-1 pt-1.5 mt-0.5 opacity-70">
                                    <span className="text-[9px] text-[#348fc0] font-medium">0:14</span>
                                    <span className="text-[9px] text-[#348fc0] font-medium">10:42 AM</span>
                                </div>
                            </div>
                        </div>

                        {/* AI Confirmation Message (Left/Contact) */}
                        <div className="flex justify-start w-full mt-1 relative z-10">
                            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-background/60 border border-[#348fc0]/20 px-2 py-2 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.2)] flex flex-col gap-1">
                                <span className="text-white/90 text-[10px] leading-tight">
                                    Files analyzed. Concept map and audio context successfully saved to your memory.
                                </span>
                                <div className="flex justify-start opacity-70 mt-0.5">
                                    <span className="text-[8px] text-[#348fc0] font-medium">10:42 AM</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Input Bar */}
                    <div className="px-4 pt-2 bg-linear-to-t from-[#030508] via-[#030508]/95 to-transparent relative z-20 pb-8 flex items-end gap-2.5">
                        {/* Input Pill */}
                        <div className="flex-1 min-h-[36px] bg-background/60 border border-white/10 rounded-full flex items-center px-3.5 gap-2.5 backdrop-blur-md">
                            <Paperclip className="w-4 h-4 text-white/40 shrink-0" />
                            <span className="text-white/40 text-[12px] font-medium flex-1 tracking-wide truncate">Message...</span>
                        </div>
                        {/* Mic Button */}
                        <div className="w-9 h-9 rounded-full bg-[#348fc0] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(52,143,192,0.5)] cursor-pointer">
                            <Mic className="w-4 h-4 text-background" />
                        </div>
                    </div>
                    
                </div>
            </Iphone>
        </div>
    )
}

export default Phone4