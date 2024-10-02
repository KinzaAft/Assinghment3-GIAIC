import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import about from "./aboutUs/page";
import contact from "./contactUs/page";

export default function Home() {
  return (
   <div className="container">
    <div className="hero-section">
      <div className="left w-6/12 mt-[20vh] ml-[10vh] text-2xl  "><span>Hello! My name is Kinza Aftab </span><br />I am a dedicated MERN stack developer with experience in building responsive web applications. I am currently enrolled in the Governor IT Initiative, where I have strengthened my skills in front-end technologies like HTML, CSS, JavaScript and I am also learning Next.js to expand my development skills. </div>
      <div className="right"></div>
    </div>
   </div>
  );
}
