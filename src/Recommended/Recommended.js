import './Recommended.css'
import Buttons from '../components/Buttons';

function Recommended({handleClick}) {
  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
       
      <Buttons 
        onClickHandler={handleClick} 
        value="all" 
        title="All products"></Buttons>
     
      <Buttons 
        onClickHandler={handleClick} 
        value="heavy shoes" 
        title="Heavy shoes"></Buttons>
     
      <Buttons 
        onClickHandler={handleClick} 
        value="soft shoes"
        title="Soft shoes"></Buttons>

      <Buttons 
        onClickHandler={handleClick} 
        value="accessories" 
        title="Accessories"></Buttons>
      </div>
    </div>
    </>
  )
}
export default Recommended;