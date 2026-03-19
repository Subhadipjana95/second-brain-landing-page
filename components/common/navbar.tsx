'use client'

import { HoverButton } from '../ui/hover-button'

function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-6 py-[20px]">
            {/* Left Side */}
            <div className="flex items-center gap-[60px]">
                {/* Logo Placeholder */}
                <div className="w-[187px] h-[25px] flex items-start flex-col pl-12">
                    <span className="text-2xl tracking-tight">Brain.2</span>
                    <span className="text-xs tracking-tight text-white/60">by NIXGN</span>
                </div>

            </div>

            {/* Right Side - Liquid Glass Button */}
            <HoverButton className='text-md'>
                Get Early Access
            </HoverButton>
        </nav>
    )
}

export default Navbar