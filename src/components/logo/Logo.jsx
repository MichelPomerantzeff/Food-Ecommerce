import { logo } from "../../data/data";
import { useNavigate } from "react-router-dom";

export default function Logo() {

  const navigate = useNavigate();

  return (
    <div
      className="bg-black w-14 md:w-16 cursor-pointer rounded-full overflow-hidden"
      onClick={() => navigate('/')}
    >
      <img src={logo} alt="LOGO" />
    </div>
  );
}
