import React from 'react';
import Logo from './Logo.js';
import '../styles/NavBar.css';
import CartWidget from './CartWidget.js';
import ItemListContainer from './ItemListContainer';



const NavBar = ()=> {
    return(
        <header style={styles.container}>
            <div className='logoContainer'>
                <Logo/>
            </div>
            <nav style={styles.navStyle}>
                <ItemListContainer
                    acusticas= "Acústicas"
                    electricas= "Electricas"
                    bajos="Bajos"
                />
            </nav>
            <CartWidget/>
        </header>
        
    )
}

export default NavBar

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
    },
    
    navStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        margin: '10px',
        fontFamily: 'CS Rocky',
    },

}