import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <section>
      <Navbar/>
    </section>
  );
}
