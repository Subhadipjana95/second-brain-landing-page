import React from 'react'
import GlowMockup from '../common/glowUp';

function Card3() {
    return (
        <div className="relative h-[120px] w-full flex justify-center mb-2">
            <GlowMockup className="w-[95%] h-full flex flex-col justify-end p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-[#348fc0]/5 to-transparent" />
                <div className="flex items-center gap-3 w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(170,202,255,0.08)] rounded-xl py-3 px-4 z-10 shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-linear-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold">Bot</div>
                    <div className="flex-1">
                        <div className="text-[12px] text-white/90 font-medium mb-1">New mention</div>
                        <div className="w-[80%] h-1.5 bg-white/20 rounded-full" />
                    </div>
                </div>
            </GlowMockup>
        </div>
    )
}

export default Card3