const CardImage = (props)=>{
    return(
        <>
        <div className="cardImg">
            <img alt="" src={props.img}></img>
        </div>
        </>
    )
}

export default CardImage;