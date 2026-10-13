import background from "../assets/background.svg";
import logo from "../assets/logo.svg";

export function BackgroundIntro() {
  return (
    <div className="bg-purple relative col-span-3 hidden items-center justify-center md:flex">
      <img src={background} alt="" className="absolute" />
      <img src={logo} alt="Proffy — sua plataforma de estudos online" className="absolute" />
    </div>
  );
}
