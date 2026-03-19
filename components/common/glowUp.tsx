import { cn } from "@/lib/utils";


const GlowMockup = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("rounded-2xl bg-[rgba(43,55,80,0.12)] backdrop-blur-xl p-4 shadow-[inset_0_0_0_1px_rgba(170,202,255,0.15),inset_0_0_20px_0_rgba(170,202,255,0.06),0_4px_24px_0_rgba(0,0,0,0.4)] mockup-glow-edge", className)}>
    {children}
  </div>
);

export default GlowMockup
