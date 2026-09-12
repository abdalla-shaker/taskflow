import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Features from "./components/features/Features.jsx";
import Workflow from "./components/workflow/Workflow.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
