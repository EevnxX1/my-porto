import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./ui/navbar";
import Introduce from "./ui/introduce";
import Skill from "./ui/skill";
import Project from "./ui/project";
import Experience from "./ui/experience";
import Contact from "./ui/contact-me";

export default function Home() {
  return (
    <section>
      <Navbar/>
      <Introduce/>
      <Skill/>
      <Project/>
      <Experience/>
      <Contact/>
    </section>
  );
}
