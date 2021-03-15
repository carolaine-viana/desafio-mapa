import React, { Component, useEffect, useState } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import localizador from "../assets/marcador3.png";
import semaforo from "../assets/semaforo.png";
import L from "leaflet";
import ListaAcidentes from "../Pages/ListaAcidentes";
import ListaControladores from "../Pages/ListaControles";
import { handleControlers, handleIncident } from "../requests/user";
import GraficosIncidentes from "../Pages/GraficosIncidents";
import styles from '../Styles/Mapa.module.css';

const Mapa = (props) =>{
  const [center, setCenter] = useState({ lat: -20.30297, lng: -40.303538 });
  const [dataIncidents, setDataIncidents] = useState([]);
  const [dataControlers, setDataControlers] = useState([]);
  const [incidents, setIncidents] = useState([]);
  const [controlers, setControlers] = useState([]);

  useEffect(() => {
    handleIncident(setDataIncidents);
    handleControlers(setDataControlers);
  }, []);

  const marcador = L.icon({
    iconUrl: localizador,
    // shadowUrl: leafShadow,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76],
  });

  const controladores = L.icon({
    iconUrl: semaforo,
    // shadowUrl: leafShadow,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76],
  });


  return (
    <>
      <ListaAcidentes incidents={incidents} />

      <ListaControladores controlers={controlers} />

      <GraficosIncidentes 
          dataIncidents={dataIncidents}
      />

      <Map
        className={styles.map}
        center={center}
        zoom={100}
        // style={{ height: 500, width: "100%" }}
      >
      
        {/********************** OCORRENCIAS *{/**********************/}

        {dataIncidents.length > 0 &&
          dataIncidents.map((p) => {
            const positionMark = { lat: p.latitude, lng: p.longitude };

            const DatasIncidents = () => {
              setIncidents(p)
            }

            return (
              <Marker
                position={positionMark}
                icon={marcador}
                onclick={DatasIncidents}
              >
                <Popup>INCIDIDENTES</Popup>
                <Popup>ID: {p.id}</Popup>
              </Marker>
            );
          })}

        {/********************** controladores *{/**********************/}

        {dataControlers.length > 0 &&
          dataControlers.map((p) => {
            const positionMark = { lat: p.latitude, lng: p.longitude };

            const DataControlers = () => {
              setControlers(p);
              console.log("oi");
            }

            return (
              <Marker
                position={positionMark}
                icon={controladores}
                onClick={DataControlers}
              >
                <Popup>CONTROLADORES</Popup>
                <Popup>ID: {p.id}</Popup>
              </Marker>
            )
            
          })}

        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </>
  );
}

export default Mapa;
