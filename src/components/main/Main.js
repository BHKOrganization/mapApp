import "./main.css";
import PlayBtn from "../PlayBtn/PlayBtn";
import Logo from "../image/logo.png";
export default function Main() {
  return (
    <div className="backgroundMain">
      <div className="logoParent">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="playBtn">
        <PlayBtn />
      </div>
    </div>
  );
}
