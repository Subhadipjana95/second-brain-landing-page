import React from 'react'

const cta = () => {
    return (
        <section id='cta' className="py-32 px-6 md:px-[120px] bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/2" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-medium mb-8 tracking-tight">Unleash your true potential,<br/>get Second Brain now!</h2>
                <div className="mb-10"></div>

                <button className="relative rounded-full p-[0.6px] bg-white overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-linear-to-r from-transparent via-white to-transparent blur-[2px] opacity-100 z-10" />
                    <div className="relative bg-white rounded-full px-[36px] py-[14px] z-20">
                        <span className="text-[15px] font-medium text-black">Add to Chrome — It's free</span>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default cta