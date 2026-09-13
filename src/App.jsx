import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Features from "./components/features/Features.jsx";
import Workflow from "./components/workflow/Workflow.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Pricing from "./components/pricing/Pricing.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Workflow />
        <Testimonials />
        <Pricing />
      </main>
    </>
  );
}

export default App;
