import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Resume from "@/components/Resume";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Resume />
    </div>
  );
};

export default Index;
