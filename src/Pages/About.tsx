import AboutTheProject from "../Components/AbouTheProject";
import AboutMe from "../Components/AboutMe";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div>
      <div style={{ padding: "5% 0" }} className="bg-secondary">
        <AboutMe />
        <AboutTheProject />
      </div>
      <Footer />
    </div>
  );
}
