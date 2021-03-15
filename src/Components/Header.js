import React from "react";
import logo from '../assets/logo.png';
import styles from '../Styles/Header.module.css';

const Header = () => {

  return (
            <div className={styles.HeaderDesign}>
                <img src={logo}/>
                <p>Vuesax</p>
          </div>
  )
}

export default Header;
