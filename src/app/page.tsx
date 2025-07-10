import Navbar from "./ui/navbar";
import Introduce from "./ui/introduce";
import Skill from "./ui/skill";
import Project from "./ui/project";
import Experience from "./ui/experience";
import Contact from "./ui/contact-me";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <section>
      <Navbar/>
      <Introduce/>
      <Skill/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </section>
  );
}
