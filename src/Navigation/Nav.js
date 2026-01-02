import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineUserAdd} from "react-icons/ai";


function Nav({handleInputChange, query}) {
  return (
    <nav>
      <div className="nav-container">
        <input 
        onChange={handleInputChange}
        value={query}
        type="text" 
        placeholder="Search..." 
        className="nav-search" />
      </div>
      <div className="profile-container">
       <button className="nav-icon-btn">
          <FiHeart className="nav-icons"/>
        </button>
        <button className="nav-icon-btn">
          <AiOutlineUserAdd className="nav-icons"/>
        </button>
        <button className="nav-icon-btn">
          <AiOutlineShoppingCart className="nav-icons"/>
        </button>
      </div>
    </nav>
  );
}
export default Nav;
