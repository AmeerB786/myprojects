import { useEffect } from "react";
import styles from "../styles/Crypto.module.css";
import axios from 'axios'
import { useState } from "react";

export default function getCryptoData() {

  const [cryptodetails,setCryptodetails]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/getCryptoDetails')
    .then(cryptodetails=>setCryptodetails(cryptodetails.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <section className={styles.section}>
      <h2>Real-time Data for different crypto</h2>
      <div>               
          <table border={1}>
            <tbody>
            <tr>
              <th>Name</th>
              <th>Current Price</th>
              <th>Market Capital</th>
              <th>Total Supply</th>
              <th>Last Updated</th>
            </tr>
            {cryptodetails.map(data => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.current_price}</td>
                <td>{data.market_cap}</td>
                <td>{data.total_supply}</td>
                <td>{data.last_updated}</td>
              </tr>
            ))}
            </tbody>
          </table>
      </div>
    </section>
  );
}

