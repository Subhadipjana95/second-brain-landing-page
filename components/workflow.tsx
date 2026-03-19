import React from 'react';
import { cn } from "@/lib/utils";

const GlowMockup = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("rounded-2xl bg-[rgba(43,55,80,0.12)] backdrop-blur-xl p-4 shadow-[inset_0_0_0_1px_rgba(170,202,255,0.15),inset_0_0_20px_0_rgba(170,202,255,0.06),0_4px_24px_0_rgba(0,0,0,0.4)] mockup-glow-edge", className)}>
    {children}
  </div>
);

const WORKFLOW_COLUMNS = [
  // COLUMN 1
  [
    {
      id: "ai-sidebar",
      title: "AI Sidebar",
      subtitle: "Compatible with all websites. Listen, summarize, and act on any page you visit with a single click.",
      className: "flex-1 p-8",
      textPosition: "top",
      textClassName: "z-10 relative mb-8",
      glowEffect: (
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#348fc0]/20 blur-[80px] rounded-full pointer-events-none z-0" />
      ),
      Mockup: () => (
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
    },
    {
      id: "snooze",
      title: "Snooze",
      subtitle: "Let users Snooze a message to when they will need it most.",
      className: "p-8 gap-8",
      textPosition: "bottom",
      textClassName: "z-10 relative",
      Mockup: () => (
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
  ],
  // COLUMN 2
  [
    {
      id: "real-time-capture",
      title: "Real-time Capture",
      subtitle: "Enable real-time note delivery in your dashboard with zero setup.",
      className: "p-8 gap-6",
      textPosition: "bottom",
      textClassName: "z-10 relative",
      Mockup: () => (
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
    },
    {
      id: "workflow-orchestration",
      title: "Workflow Orchestration",
      subtitle: "Unified API for multi-channel notification and note workflows.",
      className: "flex-1 p-8",
      textPosition: "top",
      textClassName: "z-10 relative mb-8",
      glowEffect: (
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#348fc0]/20 blur-[80px] rounded-full pointer-events-none z-0" />
      ),
      Mockup: () => (
        <div className="relative flex-1 min-h-[220px] w-full mt-auto z-10">
          <div className="absolute inset-x-0 bottom-[-20px] flex justify-center">
           <GlowMockup className="w-[90%] flex flex-col items-center py-6 px-4">
                
                <div className="w-full bg-[rgba(170,202,255,0.05)] border border-[rgba(170,202,255,0.1)] border-t-[rgba(170,202,255,0.3)] shadow-lg rounded-xl p-4 flex items-center gap-3 relative z-10">
                   <div className="w-8 h-8 rounded-md bg-[#348fc0]/20 flex items-center justify-center border border-[#348fc0]/40">
                      <svg className="w-4 h-4 text-[#348fc0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                   </div>
                   <div className="text-[13px] font-medium text-white/80">Workflow trigger</div>
                   <div className="ml-auto w-4 h-4 rounded-full bg-yellow-500/80 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                   </div>
                </div>
                <div className="w-[1.5px] h-6 bg-[rgba(170,202,255,0.15)]" />
                
                <div className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(170,202,255,0.05)] border-t-[rgba(170,202,255,0.15)] shadow-md rounded-xl p-4 flex items-center gap-3 relative z-10 opacity-70">
                   <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/10">
                      <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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
  ],
  // COLUMN 3
  [
    {
      id: "digest-engine",
      title: "Digest Engine",
      subtitle: "Combine multiple notifications into a single Email or SMS message.",
      className: "flex-1 pt-8",
      textPosition: "bottom",
      textClassName: "z-30 relative px-8 pb-8 pt-4",
      glowEffect: (
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#348fc0]/20 blur-[80px] rounded-full pointer-events-none z-0" />
      ),
      Mockup: () => (
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
                 <span className="text-white/90 font-medium">Hi Jaime,</span> it's time of Daily Summary updates!<br/>You have <span className="text-white/90 font-medium tracking-wide">3 new updates</span> today.
              </div>
            </div>
            
            {/* Overlay linear mask to softly sink the bottom part of the mockups out of focus */}
            <div className="absolute inset-x-0 bottom-[-32px] h-24 bg-linear-to-t from-[rgba(20,20,22,1)] to-transparent pointer-events-none z-20" />
        </div>
      )
    },
    {
      id: "block-based-editor",
      title: "Block Based Editor",
      subtitle: "Create beautiful customizable content with our block based editor.",
      className: "p-8 gap-8",
      textPosition: "bottom",
      textClassName: "z-10 relative",
      Mockup: () => (
        <div className="relative h-[110px] w-full flex items-center justify-center">
          <GlowMockup className="w-[95%] h-[100px] flex flex-col p-4 relative overflow-hidden">
              <div className="text-[10px] font-bold tracking-wider text-pink-400 mb-3 uppercase">Blocks</div>
              
              <div className="flex items-center gap-3 bg-[rgba(0,0,0,0.3)] border border-[rgba(170,202,255,0.05)] rounded-lg p-2.5 mb-2 hover:bg-[rgba(170,202,255,0.05)] transition-colors">
                 <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
                 <div>
                   <div className="text-[12px] font-medium text-white/80">Text</div>
                   <div className="text-[10px] text-white/40">Just start typing with plain text.</div>
                 </div>
              </div>
              
          </GlowMockup>
        </div>
      )
    }
  ]
];

const cardBaseClass = "rounded-[24px] bg-[rgba(20,20,22,0.6)] border border-white/5 flex flex-col relative group overflow-hidden hover:bg-[rgba(30,30,35,0.6)] transition-all duration-500";

const workflow = () => {
  return (
    <section id='workflow' className="py-32 px-6 md:px-[60px] lg:px-[120px] bg-black relative max-w-[1600px] mx-auto overflow-hidden">
        {/* Subtle background linear */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-[#348fc0]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-white">Works where you work.</h2>
            <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-relaxed">Gather notes centrally from all media, and you have full context to your knowledge meet.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORKFLOW_COLUMNS.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6">
                {col.map((card) => (
                  <div key={card.id} className={cn(cardBaseClass, card.className)}>
                    {card.glowEffect}

                    {card.textPosition === 'top' && (
                      <div className={card.textClassName}>
                         <h3 className="text-[20px] font-medium mb-1 text-white">{card.title}</h3>
                         <p className="text-[14px] text-white/50 leading-snug">{card.subtitle}</p>
                      </div>
                    )}

                    <card.Mockup />

                    {card.textPosition === 'bottom' && (
                      <div className={card.textClassName}>
                         <h3 className="text-[20px] font-medium mb-1 text-white">{card.title}</h3>
                         <p className="text-[14px] text-white/50 leading-snug">{card.subtitle}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default workflow