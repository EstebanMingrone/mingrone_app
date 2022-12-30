import CardImage from "./CardImage";
import CardDetail from "./CardDetail";
import ButtonDetail from "./ButtonDetail";
import ItemCount from "./ItemCount";
import "../styles/cardItem.css";
import { Link } from "react-router-dom";

const CardItem = (props)=>{
    return(
        <>
            <div className="cardItems">
                <CardImage img={props.img}/>
                <CardDetail 
                title={props.title}
                desc={props.desc}
                stock={props.stock}
                price={props.price}
                />
                <div>
                    <Link style={styles.a} to={ `/item/${props.id}` }>
                    <ButtonDetail/>
                    </Link>
                </div>
                <ItemCount stock={props.stock}/>
            </div>
        </>
    )
}

export default CardItem;

const styles={
    a:{
        textDecoration: 'none'
    }
}