import axios from "axios";
import { BASE_URL } from "../Constants/BASE_URL";

export const handleIncident = async (setDataIncidents) => {
    axios
      .get(`${BASE_URL}/Incidents`)
      .then((res) => {
        setDataIncidents(res.data);
      })
      .catch((error) => {
        alert("deu erro");
        console.log(error.response);
      })
  }
  
  export const handleControlers = async (setDataControlers) => {
    axios
      .get(`${BASE_URL}/Controllers`)
      .then((res) => {
        setDataControlers(res.data);
      })
      .catch((error) => {
        alert("deu erro");
        console.log(error.response);
      });
  };
  
  export const chart = (setChartData) => {
    let qntd = [];
    let legenda = [];
    axios
      .get(`${BASE_URL}/Incidents`)
      .then((res) => {
        for (const dataObj of res.data) {
          qntd.push(parseInt(dataObj.category.length));
          console.log(dataObj.category.length)
          legenda.push(dataObj.category);
          console.log(dataObj.category)
          // if(dataObj.category==="CONTROLLER"){
          //   controladorFuncionando = dataObj.category.length
          //   console.log('controlador quantidade', dataObj.category.length)
          // }
          // if(dataObj.category==="ALERT"){
          //   const falhas = dataObj.category.length
          //   console.log('CONTROLADOR EM FALHA', dataObj.category.length)
          // }
          // if(dataObj.category==="ACCIDENT"){
          //   const inter = dataObj.category.length
          //   console.log('INTERMIDENTE', dataObj.category.length)
          // }
        }
        setChartData({
          labels: legenda,
          datasets: [
            {
              data: qntd,
              backgroundColor: ["rgba(100, 192, 192, 0.6)"],
              borderWidth: 3,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(qntd, legenda);
  };
