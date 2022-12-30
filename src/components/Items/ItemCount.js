import React, {useState} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/itemCount.css'

const ItemCount = ({stock, initial = 1}) => {
    const [count, setCount] = useState(initial)

    const add = ()=>{
        if (count < stock) {
            setCount(count+1)
        }
        if (count >= stock){
            alert("No hay stock")
        }
    }

    const sub = ()=>{
        if (count > 0) {
            setCount(count-1)
        }
    }

    const onAdd = ()=>{
        if (count > 0) {
            alert(`Gracias por su compra! Total: ${count} productos`)
        }
        if (count <= 0) {
            alert("No ha agregado productos al carrito")
        }
    }
  
    return (
        <>
            <div className='counterContainer'>
                <div className='counter'>
                    <button onClick={sub}>-</button>
                    <p>{count}</p>
                    <button onClick={add}>+</button>
                </div>
                <button className='btnComprar' onClick={onAdd}><AddShoppingCartIcon/></button>
            </div>
        </>
    
  )
}

export default ItemCount