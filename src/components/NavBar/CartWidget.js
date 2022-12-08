import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css'
const CartWidget = () => {
    return(
        <div className='cart-container'>
        <AddShoppingCartIcon sx={{ fontSize: 40 }}></AddShoppingCartIcon>
        <p className='cart-number'>2</p>
        </div>
    )
}

export default CartWidget;