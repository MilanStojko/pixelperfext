function Button(props){
    return(
        <div className="button-container">
            <button className="button">
                {props.label}
            </button>
        </div>



    )
}

export default Button;