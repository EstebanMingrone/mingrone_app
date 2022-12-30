const CardDetail = (props)=>{
    return(
        <div className="cardDetail">
            <h3 className="cardTitle">{props.title}</h3>
            <div className="cardDesc">
                <p className="descText">{props.desc}</p>
            </div>
            <span className="cardCant">Cantidad: {props.stock}</span>
            <span className="cardPrice"> U$D {props.price}</span>
        </div>
    )
}

export default CardDetail;