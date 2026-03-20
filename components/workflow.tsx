import React from 'react';
import { cn } from "@/lib/utils";
import Card1 from './BentoCards/card1';
import Card2 from './BentoCards/card2';
import Card3 from './BentoCards/card3';
import Card4 from './BentoCards/card4';
import Card5 from './BentoCards/card5';
import Card6 from './BentoCards/card6';


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
        <Card1 />
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
        <Card2 />
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
        <Card3 />
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
        <Card4 />
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
        <Card5 />
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
        <Card6 />
      )
    }
  ]
];

const cardBaseClass = "rounded-[calc(0.45rem*3)] bg-[rgba(20,20,22,0.6)] border border-white/5 flex flex-col relative group overflow-hidden hover:bg-[rgba(30,30,35,0.6)] transition-all duration-500";

const workflow = () => {
  return (
    <section id='workflow' className="py-32 px-8 bg-black relative flex justify-center w-full overflow-hidden">
        {/* Subtle background linear */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-[#348fc0]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-7xl relative z-10">
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