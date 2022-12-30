import "../styles/NavBar.css"
import { Link } from "react-router-dom";

const ItemListContainer = (props)=>{
    return(
        <>
            <ul className="navCategories">
                <li>
                    <Link to="category/acustica"> {props.acusticas} </Link>
                </li>
                <li>
                    <Link to="category/electrica">{props.electricas}</Link>
                </li>
                <li>
                    <Link to="category/bajo">{props.bajos}</Link>
                </li>
            </ul>
        </>
    )
}

export default ItemListContainer;

