
import { BsFillBagHeartFill } from "react-icons/bs";


function Card({id, image, title, star, price, description, company, reviewes, category}) {
  return (
    <div>
      <section className="card">
          <img className="card-img" alt={title} src={image}></img>
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
              {star} {star} {star} {star}
              <span className="total-reviews">{reviewes}</span>
            </section>
            <section className="card-price">{price}</section>
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon"/>
          </div>
        </section>
    </div>
  )
}
export default Card;