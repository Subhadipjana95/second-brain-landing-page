import Navbar from './common/navbar';
import RightMockups from './Hero/rightMockups';
import LeftMockups from './Hero/leftMockups';
import AnimatedGenerateButton from './animated-generate-button-shadcn-tailwind';

const hero = () => {
    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden flex flex-col">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda_poster.jpg"
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            >
                <source
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5 z-10" />

            {/* Content Container */}
            <div className="relative z-20 flex flex-col w-full h-full flex-1">
                {/* Navbar */}
                <Navbar />

                {/* Hero Content */}
                <div className="flex-1 flex items-center justify-center relative px-6">

                    {/* ═══ LEFT FLOATING MOCKUPS ═══ */}
                    <LeftMockups />

                    {/* ═══ CENTER HERO CONTENT ═══ */}
                    <div className="flex flex-col items-center pt-[160px] pb-[102px] text-center z-20">
                        <div className="flex flex-col items-center gap-[30px] max-w-[680px]">

                            {/* Badge */}
                            <div className="flex items-center gap-2 rounded-[20px] bg-[rgba(43,55,80,0.1)] px-4 py-1.5 backdrop-blur-lg shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#348fc0d1] shadow-[0_0_6px_rgba(160,217,248,0.6)]" />
                                <span className="text-[13px] font-medium tracking-widest">
                                    <span className="text-[rgba(170,202,255,0.6)]">Ambient AI · </span>
                                    <span className="text-white/50">Always On ·</span>
                                    <span className="text-[rgba(170,202,255,0.6)]"> Zero Effort</span>
                                </span>
                            </div>

                            {/* Heading & Subtitle Container */}
                            <div className="flex flex-col items-center gap-[24px]">
                                {/* Heading */}
                                <h1
                                    className="text-[36px] md:text-[56px] font-medium leading-[1.28] max-w-[700px] tracking-tight"
                                    style={{
                                        backgroundImage: "linear-gradient(144.5deg, #FFFFFF 28%, rgba(0, 0, 0, 0) 115%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        color: "transparent"
                                    }}
                                >
                                    All In One Assistant personalized, fast and <span style={{
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        WebkitTextStroke: "0.5px #348fc0d1",
                                        backgroundClip: "text",
                                        color: "transparent"
                                    }}>free</span>.
                                </h1>

                                {/* Subtitle */}
                                <p className="text-[15px] font-normal text-white/50 max-w-[680px] leading-relaxed">
                                    Second Brain listens, understands, and acts — converting your everyday conversations into scheduled tasks, automated workflows, and intelligent decisions.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <a href="/a063.apk" download="a063.apk">
                                <AnimatedGenerateButton
                                    labelIdle="Download it for free"
                                    labelActive="Download it for free"
                                    highlightHueDeg={5000}
                                />
                            </a>
                        </div>
                    </div>

                    {/* ═══ RIGHT FLOATING MOCKUPS ═══ */}
                    <RightMockups />

                </div>
            </div>
        </section>
    )
}

export default hero