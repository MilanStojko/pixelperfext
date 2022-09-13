function InputBox(props){
    return(

        <div className="input-wrap validate">
            <input
                type={props.type}
                name={props.name}
 
            
            ></input>
            <span className="focus"></span>
            <span className="label">{props.placeholder}</span>
        </div>



    )
}

export default InputBox;