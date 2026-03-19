import React from 'react'
import GlowMockup from '../common/glowUp';

function Card4() {
    return (
        <div className="relative flex-1 min-h-[220px] w-full mt-auto z-10">
            <div className="absolute inset-x-0 bottom-[-20px] flex justify-center">
                <GlowMockup className="w-[90%] flex flex-col items-center py-6 px-4">

                    <div className="w-full bg-[rgba(170,202,255,0.05)] border border-[rgba(170,202,255,0.1)] border-t-[rgba(170,202,255,0.3)] shadow-lg rounded-xl p-4 flex items-center gap-3 relative z-10">
                        <div className="w-8 h-8 rounded-md bg-[#348fc0]/20 flex items-center justify-center border border-[#348fc0]/40">
                            <svg className="w-4 h-4 text-[#348fc0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        </div>
                        <div className="text-[13px] font-medium text-white/80">Workflow trigger</div>
                        <div className="ml-auto w-4 h-4 rounded-full bg-yellow-500/80 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                    </div>
                    <div className="w-[1.5px] h-6 bg-[rgba(170,202,255,0.15)]" />

                    <div className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(170,202,255,0.05)] border-t-[rgba(170,202,255,0.15)] shadow-md rounded-xl p-4 flex items-center gap-3 relative z-10 opacity-70">
                        <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/10">
                            <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </div>
                        <div className="text-[13px] font-medium text-white/60">Email Summary</div>
                    </div>
                    <div className="w-[1.5px] h-6 bg-[rgba(170,202,255,0.15)]" />

                    <div className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(170,202,255,0.05)] border-t-[rgba(170,202,255,0.15)] shadow-sm rounded-xl p-4 flex items-center gap-3 relative z-10 opacity-40">
                        <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/10">
                            <div className="w-4 h-4 rounded-full border-2 border-white/60" />
                        </div>
                        <div className="text-[13px] font-medium text-white/60">Update Notion</div>
                    </div>
                </GlowMockup>
            </div>
        </div>
    )
}

export default Card4