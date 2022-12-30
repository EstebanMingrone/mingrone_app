import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import products from "../functions/products"
import loadProducts from "../functions/loadProducts"
import CardImage from "./CardImage";
import CardDetail from "./CardDetail";
import ItemCount from "./ItemCount";
import "../styles/detailsItem.css"

const DetailsItem = ()=> {
const [data, setData] = useState([]);
const {idItem} = useParams();

useEffect(() => {
    loadProducts(products.filter( flt => flt.id == idItem), 2000)
    .then(resp => setData(resp))
    .catch(error => console.log(error))
}, [idItem])

    return(
        <div className="detailsItem">
            {
                data.map( items => (
                    <>
                        <div className="containerLeft">
                            <CardImage img={items.img}/>
                        </div>

                        <div className="containerRight">
                            <CardDetail
                                title= {items.title}
                                desc= {items.desc}
                                stock= {items.stock}
                                price= {items.price}
                            />
                        
                            <div className="btns">
                                <ItemCount stock={items.stock}/>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;