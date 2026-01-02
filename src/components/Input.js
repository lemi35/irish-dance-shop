
function Input({ handleChange, value, name, color, title }) {
  return (
    <label className="sidebar-label-container">
      <input 
        onChange={handleChange} 
        value={value}
        type="radio" 
        name={name}
        ></input>
      <span 
        className="checkmark"
        style={{backgroundColor: color}}></span>
      {title}
    </label>
  );
}
export default Input;
