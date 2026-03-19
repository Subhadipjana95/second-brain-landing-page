import Hero from "../components/hero";
import Footer from "../components/footer";
import Workflow from "../components/workflow";
import Cta from "../components/cta";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Workflow />
      <Cta />
      <Footer />
    </main>
  );
}
