import './Company.css';
import Input from '../../components/Input';

function Company({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title company-title">Company</h2>
      <label className="sidebar-label-container">
          <input 
            onChange={handleChange} 
            type="radio" 
            name="test3" 
            value="" />
          <span className="checkmark">All</span>
        </label>
        <Input 
          handleChange={handleChange}
          value="all"
          name="test3"
          title="All companies"
        />
        <Input 
          handleChange={handleChange}
          value="Celtic Arch"
          name="test3"
          title="Celtic Arch"
        />
          <Input 
          handleChange={handleChange}
          value="Hullachan"
          name="test3"
          title="Hullachan"
        />
          <Input 
          handleChange={handleChange}
          value="Pacelli"
          name="test3"
          title="Pacelli"
        />
        <Input 
          handleChange={handleChange}
          value="Fayes"
          name="test3"
          title="Fayes"
        />
      
    </div>
  )
}
export default Company;
