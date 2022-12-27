import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) =>{
    const [count, setCount] = useState(0);

    const adding = () =>{
        setCount(count+1)
    }

    const resting = () =>{
        setCount(count-1)
    }

    return(
        <div>
            <button onClick={resting}>-</button>
            <p>1</p>
            <button onClick={adding}>+</button>
        </div>
    )
}

export default ItemCount;