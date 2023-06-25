import { specials } from "../../data";
import "./Specials.css";

export default function Specials() {
  return (
    <section className="specials">
      <h2 className="specials-title">Featured</h2>
      <div className="specials-wrapper">
        {specials.map((special) => {
          return (
            <div key={special.id} className="special-wrapper">
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
