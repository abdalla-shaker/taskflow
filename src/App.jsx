import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Features from "./components/features/Features.jsx";
import Workflow from "./components/workflow/Workflow.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
      </main>
    </>
  );
}

export default App;
