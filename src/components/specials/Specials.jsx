import { specials } from "../../data"
import "./Specials.css"

export default function Specials() {
  return (
    <section className='specials'>
        {specials.map(special => {
            return(
                <div key={special.id} className='special-wrapper'>
                    <div className="special-image-wrapper">
                      <img className='special-img' src={special.image}/>
                    </div>
                    <div className="special-title">
                      {special.title}
                    </div>
                </div>
            )
        })}
    </section>
  )
}
