import { useNavigate } from "react-router-dom";
import { specials } from "../../data/data";

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
    <section className="max-w-[95vw] md:w-[90vw] lg:w-[1200px] m-auto">
      <h2 className="text-lg font-bold">FEATURED</h2>
      <div className="grid grid-cols-4 gap-2">
        {specials.map((special) => {
          return (
            <div
              key={special.id}
              className="group flex flex-col  border border-gray-300 rounded-md overflow-hidden cursor-pointer"
              onClick={() => handleClick(special.title)}
            >
              <div className="flex h-full overflow-hidden">
                <img className="group-hover:scale-125 transition-all duration-300" src={special.image} />
              </div>
              <div
                className="text-sm px-1 pb-1 md:text-base whitespace-nowrap overflow-hidden text-ellipsis 
                font-semibold group-hover:text-blue-400"
              >
                {special.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
