import React from 'react';
import logo from '../../assets/LOGO 3.png';
//import './NavBar.css';
import CartWidget from './CartWidget.js';


const NavBar = ()=> {
    return(
        <header style={styles.container}>
            <img style={styles.imgStyle} src={logo} alt=""></img>
            <nav style={styles.navStyle}>
                <a style={styles.anchors} className='anchors' href="">Acústicas</a>
                <a style={styles.anchors} href="">Eléctricas</a>
                <a style={styles.anchors} href="">Bajos</a>
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
    
    imgStyle: {
        width: '10%',
    },
    
    anchors: {
        margin: '10px',
        color: 'white',
        textDecoration: 'none',
    },   
}