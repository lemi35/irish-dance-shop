import "./Category.css";
import Input from "../../components/Input";

function Category({handleChange}) {


  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input 
            onChange={handleChange} 
            type="radio" 
            name="test" 
            value="" />
          <span className="checkmark">All</span>
        </label>
        <Input 
          handleChange={handleChange}
          value="all"
          name="all"
          title="All categories"
        />
        <Input 
          handleChange={handleChange}
          value="heavy shoes"
          name="heavy shoes"
          title="Heavy shoes"
        />
        <Input 
          handleChange={handleChange}
          value="soft shoes"
          name="soft shoes"
          title="Soft shoes"
        />
        <Input 
          handleChange={handleChange}
          value="accessories"
          name="accessories"
          title="Accessories"
        />
        <Input 
          handleChange={handleChange}
          value="clothing"
          name="clothing"
          title="Clothing"
        />
      </div>
    </div>
  );
}
export default Category;
