import Hero from "../components/hero";
import Footer from "../components/footer";
import Workflow from "../components/workflow";
import Cta from "../components/cta";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30">
      <Hero />
      <Workflow />
      <Cta />
      <Footer />
    </main>
  );
}
