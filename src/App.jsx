import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Testimonails from "./pages/Testimonails";
function App() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
