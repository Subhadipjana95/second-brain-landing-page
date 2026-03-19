import React from 'react'

function Card5() {
    return (
        <div className="relative flex-1 w-full min-h-[260px] px-8 z-10 flex flex-col mt-2">
            <div className="relative z-10 w-full mb-1">
                {/* Background stack cards (top) */}
                <div className="absolute -top-4 left-6 right-6 h-12 bg-linear-to-b from-[rgba(170,202,255,0.08)] to-transparent border border-[rgba(170,202,255,0.05)] rounded-t-xl z-0 backdrop-blur-sm opacity-50"></div>
                <div className="absolute -top-2 left-3 right-3 h-12 bg-linear-to-b from-[rgba(170,202,255,0.12)] to-transparent border border-[rgba(170,202,255,0.08)] rounded-t-xl z-0 backdrop-blur-md opacity-70"></div>

                {/* Foreground stack card */}
                <div className="w-full bg-linear-to-br from-[rgba(40,50,70,0.8)] to-[rgba(20,25,35,0.8)] backdrop-blur-xl border-t border border-[rgba(170,202,255,0.1)] rounded-xl p-4 shadow-2xl relative z-10">
                    <div className="text-[14px] font-medium text-white/95 mb-1">Security Update: Token Managment</div>
                    <div className="text-[12px] text-[rgba(170,202,255,0.7)] truncate">Secure your integration with the new token.</div>
                </div>
            </div>

            {/* Connecting lines */}
            <div className="flex justify-center gap-[60px] relative z-10 h-8 mt-1.5 mb-2">
                {/* node 1 */}
                <div className="flex flex-col items-center">
                    <div className="w-[1.5px] h-6 border-l-[1.5px] border-dashed border-[rgba(170,202,255,0.3)]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)] mt-1 z-20"></div>
                </div>
                {/* node 2 */}
                <div className="flex flex-col items-center relative -mt-1 w-2 gap-px">
                    <div className="w-[1.5px] h-8 border-l-[1.5px] border-dashed border-[rgba(170,202,255,0.3)]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)] mt-1 z-20"></div>
                </div>
                {/* node 3 */}
                <div className="flex flex-col items-center w-2">
                    <div className="w-[1.5px] h-6 border-l-[1.5px] border-dashed border-[rgba(170,202,255,0.3)]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)] mt-1 z-20"></div>
                </div>
            </div>

            {/* Summary Card */}
            <div className="w-full bg-linear-to-br from-[rgba(40,50,70,0.8)] to-[rgba(20,25,35,0.8)] backdrop-blur-xl border-t border border-[rgba(170,202,255,0.1)] rounded-xl p-5 shadow-2xl relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[rgba(170,202,255,0.3)] shrink-0 bg-white/5 shadow-inner">
                        <img src="https://i.pravatar.cc/150?img=47" className="w-full h-full object-cover" alt="Jaime Vandervort" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[15px] font-medium text-white/95 tracking-wide">Jaime Vandervort</span>
                        <span className="text-[13px] text-[rgba(170,202,255,0.6)]">jaime_V91@yahoo.com</span>
                    </div>
                </div>
                <div className="text-[13px] text-[rgba(170,202,255,0.4)] leading-relaxed font-light">
                    <span className="text-white/90 font-medium">Hi Jaime,</span> it's time of Daily Summary updates!<br />You have <span className="text-white/90 font-medium tracking-wide">3 new updates</span> today.
                </div>
            </div>

            {/* Overlay linear mask to softly sink the bottom part of the mockups out of focus */}
            <div className="absolute inset-x-0 bottom-[-32px] h-24 bg-linear-to-t from-[rgba(20,20,22,1)] to-transparent pointer-events-none z-20" />
        </div>
    )
}

export default Card5