import React from 'react'
import GlowMockup from '../common/glowUp';

function Card6() {
    return (
        <div className="relative h-[110px] w-full flex items-center justify-center">
            <GlowMockup className="w-[95%] h-[100px] flex flex-col p-4 relative overflow-hidden">
                <div className="text-[10px] font-bold tracking-wider text-pink-400 mb-3 uppercase">Blocks</div>

                <div className="flex items-center gap-3 bg-[rgba(0,0,0,0.3)] border border-[rgba(170,202,255,0.05)] rounded-lg p-2.5 mb-2 hover:bg-[rgba(170,202,255,0.05)] transition-colors">
                    <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16" /></svg>
                    <div>
                        <div className="text-[12px] font-medium text-white/80">Text</div>
                        <div className="text-[10px] text-white/40">Just start typing with plain text.</div>
                    </div>
                </div>

            </GlowMockup>
        </div>
    )
}

export default Card6