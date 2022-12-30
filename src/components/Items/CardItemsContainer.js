import CardItem from './CardItem';
import loadProducts from '../functions/loadProducts';
import products from '../functions/products';
import '../styles/ItemListContainer.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ()=>{
    const [data, setData] = useState([]);
    const { idCategory } = useParams();

    useEffect(()=>{
        if (idCategory == undefined){
            loadProducts(products,2000)
            .then(resp => setData(resp))
            .catch(error => console.log(error))
        } else{
            loadProducts(products.filter(filter => filter.type == idCategory),2000)
            .then(resp => setData(resp))
            .catch(error => console.log(error))
        }
    }, [idCategory])
    
    return(
        <>
            <div className='containerCards'>
                {
                    data.map( producto => (
                        <CardItem
                            key={producto.id}
                            id={producto.id}
                            img={producto.img}
                            title={producto.title}
                            desc={producto.desc}
                            price={producto.price}
                            stock={producto.stock}
                        />
                    ))
                }
            </div>
            {/*<h2>{props.title}</h2>*/}
            
        </>
    )
}

export default ItemListContainer;