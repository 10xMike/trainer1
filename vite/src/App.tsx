import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Timeline></Timeline>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
