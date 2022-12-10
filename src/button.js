export const Button = (props)=>{
    return(
        <button className="b1" onClick={props.whenClicked}>
            Click To {props.label}
        </button>
    )
}