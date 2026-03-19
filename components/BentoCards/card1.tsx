import React from 'react'

function Card1() {
    return (
        <div className="relative flex-1 min-h-[300px] w-full mt-auto z-10">
            <div className="absolute inset-x-0 bottom-[-40px] flex justify-center">

                {/* The inner card itself matching the UI from the image */}
                <div className="w-full max-w-[340px] bg-linear-to-b from-[rgba(40,55,80,0.8)] to-[rgba(15,18,25,0.8)] border-t-[1.5px] border-t-[rgba(170,202,255,0.9)] border-x border-x-[rgba(170,202,255,0.1)] border-b-0 rounded-t-[16px] shadow-[0_-8px_30px_rgba(52,143,192,0.3)] relative p-5 min-h-[260px] backdrop-blur-xl">

                    {/* Header: Logo and Icons */}
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                            {/* Logo */}
                            <div className="w-5 h-5 rounded-md bg-[rgba(170,202,255,0.1)] flex items-center justify-center border border-[rgba(170,202,255,0.2)]">
                                <div className="w-2.5 h-2.5 rounded-full bg-linear-to-br from-[#348fc0] to-[#2563eb]" />
                            </div>
                            <span className="text-md text-white tracking-tight">Brain.2</span>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Moon icon */}
                            <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            {/* Chat icon */}
                            <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="text-[14px] font-medium text-white/90 mb-4 px-1">Settings & Permissions</div>

                    {/* Panel container */}
                    <div className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(170,202,255,0.08)] rounded-[12px] p-4">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-[14px] text-white/95 font-medium">Page capabilities</span>
                            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                        </div>
                        <div className="text-[11px] text-[rgba(170,202,255,0.5)] mb-4">Read context, Summarize, Quick replies</div>

                        {/* List of toggles */}
                        <div className="flex flex-col gap-3.5">
                            {/* Toggle 1 */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <span className="text-[13px] text-white/90">Summarize</span>
                                </div>
                                <div className="w-[36px] h-[20px] rounded-full bg-linear-to-r from-[#348fc0] to-[#2563eb] border border-[#348fc0]/50 flex items-center p-[2px] justify-end">
                                    <div className="w-[14px] h-[14px] rounded-full bg-white shadow-sm" />
                                </div>
                            </div>
                            {/* Toggle 2 */}
                            <div className="flex justify-between items-center opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                    </div>
                                    <span className="text-[13px] text-white/80">Notifications</span>
                                </div>
                                <div className="w-[36px] h-[20px] rounded-full bg-white/10 border border-white/10 flex items-center p-[2px]">
                                    <div className="w-[14px] h-[14px] rounded-full bg-white/40" />
                                </div>
                            </div>
                            {/* Toggle 3 */}
                            <div className="flex justify-between items-center opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <span className="text-[13px] text-white/80">Mobile Sync</span>
                                </div>
                                <div className="w-[36px] h-[20px] rounded-full bg-white/10 border border-white/10 flex items-center p-[2px]">
                                    <div className="w-[14px] h-[14px] rounded-full bg-white/40" />
                                </div>
                            </div>
                            {/* Toggle 4 */}
                            <div className="flex justify-between items-center opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-sm bg-white/10 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                    </div>
                                    <span className="text-[13px] text-white/80">Auto-reply</span>
                                </div>
                                <div className="w-[36px] h-[20px] rounded-full bg-white/10 border border-white/10 flex items-center p-[2px]">
                                    <div className="w-[14px] h-[14px] rounded-full bg-white/40" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fading bottom overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[rgba(20,20,22,1)] to-transparent pointer-events-none rounded-b-[16px]" />
                </div>

            </div>
        </div>
    )
}

export default Card1