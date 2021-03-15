import React from "react";
import semaforo from '../assets/semaforo.png';
import styles from '../Styles/ListaControladores.module.css';

const ListaControladores = (props) => {

  return (
        <div className={styles.Card}>
              <h4> <img className={styles.ImagemDesign} src={semaforo}/> Controladores {props.controlers.name}</h4>
              <p>Id {props.controlers.id}</p>
              <span>Lat {props.controlers.latitude} | </span>
              <span>Long {props.controlers.longitude}</span>
              <p>Descrição</p>
              <p>{props.controlers.description}</p>
          </div>
  )
}

export default ListaControladores;
