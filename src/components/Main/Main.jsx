import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

export default function Main() {
  return (
    <main className="main">
      <AboutMe />
      <Techs />
      <Portfolio />
    </main>
  );
}
