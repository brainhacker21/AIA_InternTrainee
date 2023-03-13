const CompTiIn = (props) => {
    return(
        <div className="form-group">
        <label>{props.label}</label>
      
        <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}/>
        </div>

        
    )
}
export default CompTiIn