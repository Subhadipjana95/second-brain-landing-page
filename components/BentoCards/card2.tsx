import React from 'react'
import GlowMockup from '../common/glowUp';

function Card2() {
    return (
        <div className="relative h-[100px] w-full flex justify-center items-center">
            <GlowMockup className="w-[90%] h-[70px] flex items-center justify-center p-0 overflow-hidden relative">
                {/* linear glow inside mockup */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#348fc0]/10 to-transparent animate-pulse" />
                <div className="w-full flex items-center justify-between border border-[rgba(170,202,255,0.1)] bg-[rgba(0,0,0,0.5)] rounded-xl py-3 px-4 z-10 m-2">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#348fc0]/20 flex items-center justify-center border border-[#348fc0]/50">
                            <div className="w-2 h-2 rounded-full bg-[#348fc0] animate-pulse" />
                        </div>
                        <div className="text-[13px] font-medium text-white/80">Snooze Notification</div>
                    </div>
                    <div className="text-[11px] text-[#348fc0] font-medium bg-[#348fc0]/10 px-2 py-1 rounded-md">2 hours</div>
                </div>
            </GlowMockup>
        </div>
    )
}

export default Card2