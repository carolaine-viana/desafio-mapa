import React from "react";
import marcador from '../assets/marcador3.png';
import styles from '../Styles/ListaAcidentes.module.css';

const ListaAcidentes = (props) => {
  return (
        <div className={styles.Card}>
            
          <div>
            <h4>  <img className={styles.ImmagemDesign} src={marcador}/> Ocorrências</h4>
            <p>ID: {props.incidents.id}</p>
            <p>Data: {props.incidents.createdAt}</p>
            <span>Lat: {props.incidents.latitude} | </span>
            <span>Long: {props.incidents.longitude}</span>
            <p><strong>Mensagem</strong></p>
            <p>{props.incidents.message}</p>
          </div>
          </div>
  );
}

export default ListaAcidentes;
