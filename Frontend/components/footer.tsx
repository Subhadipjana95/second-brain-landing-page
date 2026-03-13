import React from 'react'

const footer = () => {
    return (
        <footer className="py-12 px-6 md:px-[120px] border-t border-white/10 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xl font-bold tracking-widest">Second Brain</div>
                <div className="flex gap-6 text-sm text-white/60">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Discord</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>
                <div className="text-sm text-white/40">
                    © 2025 Second Brain Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default footer