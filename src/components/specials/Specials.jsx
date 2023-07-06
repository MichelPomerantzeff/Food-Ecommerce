import { useNavigate } from "react-router-dom";
import { specials } from "../../data/data";
import "./Specials.css";

export default function Specials() {

  const navigate = useNavigate();

  const handleClick = (title) => {
    switch (title) {
      case 'Snacks':
        navigate("/snacks");
        break;
      case 'Main course':
        navigate("/main-course");
        break;
      case 'Healthy options':
        navigate("/healthy");
        break;
      case 'Lunchbox':
        navigate("/lunch-box");
        break;
      default:
        break;
    }
  }


  return (
    <section className="specials">
      <h2 className="specials-title">Featured</h2>
      <div className="specials-wrapper">
        {specials.map((special) => {
          return (
            <div key={special.id} className="special-wrapper" onClick={() => handleClick(special.title)}>
              <div className="special-image-wrapper">
                <img className="special-img" src={special.image} />
              </div>
              <div className="special-title">{special.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
