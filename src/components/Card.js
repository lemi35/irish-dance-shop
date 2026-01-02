import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

function Card({image, title, star, price, description, reviews}) {
  const maxStars = 5; 
  const starsArray = Array.from({ length: maxStars }, (_, i) => {
    if (i + 1 <= Math.floor(star)) 
      return <AiFillStar key={i} color="#FFD700" />;
    if (i + 0.5 === star) 
      return <BsStarHalf key={i} color="#FFD700" />;
    return <AiOutlineStar key={i} color="#ccc" />;
  });




  return (
    <div>
      <section className="card">
          <img className="card-img" alt={title} src={image}></img>
          <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <section className="card-reviews">
          {starsArray}
          <div className="total-reviews">{reviews}</div>
        </section>
            <BsFillBagHeartFill className="bag-icon"/>
        <section className="card-price">€{price}</section>
      </div>
          <div className="card-description">
            <p>{description}</p>
          </div>
        </section>
    </div>
  )
}
export default Card;