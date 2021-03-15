import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styles from '../Styles/GraficosIncidents.module.css';
import { chart } from "../requests/user";

// O gráfico de incidentes deve exibir um gráfico de pizza com o nome das categorias,
//a cor de cada categoria e a porcentagem em relação ao total de incidentes.

const GraficosIncidentes = (props) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    chart(setChartData);
  }, [])

  return (
    <>
      <div className={styles.Card}>
        <Doughnut
          data={chartData}
          width={80}
          height={50}
          options={{
            responsive: true,
            title: { text: "Ocorrências", display: true },
          }}
        />
      </div>
    </>
  );
};

export default GraficosIncidentes;
