import "./App.css";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import Nav from "./components/Nav";
import ProjectSection from "./components/ProjectSection";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Nav />
        <LandingSection />
        <ProjectSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
