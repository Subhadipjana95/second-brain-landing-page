import React from 'react'

const workflow = () => {
  return (
    <section id='workflow' className="py-32 px-6 md:px-[120px] bg-black border-t border-white/10 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/2 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">Works where you work.</h2>
            <p className="text-[16px] text-white/60 max-w-2xl mx-auto leading-relaxed">Gather notes centrally from all media, and you have full context to your knowledge meet.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI sidebar", desc: "Compatible with all websites and capable of actions on every page" },
              { title: "Available on all platforms", desc: "Use our AI on any device or platform" },
              { title: "Windows app", desc: "Native desktop experience for Windows users" }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[24px] bg-white/3 border border-white/10 hover:bg-white/5 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-6 h-6 bg-white rounded-xs opacity-80" />
                </div>
                <h3 className="text-[22px] font-medium mb-4">{feature.title}</h3>
                <p className="text-[15px] text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default workflow