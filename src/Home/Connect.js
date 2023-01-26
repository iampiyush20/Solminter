import React from 'react'
import "./Connect.css";

const Connect = () => {
    const list = [
      {
        text: "Phantom",

        logo: "fas fa-wifi",
      },
      {
        text: "Solflare",
        logo: "fas fa-wifi",
      },
      {
        text: "Torus",
        logo: "fas fa-wifi",
      },
      {
        text: "Ledger",
        logo: "fas fa-wifi",
      },
      {
        text: "Solong",
        logo: "fas fa-wifi",
      },
      {
        text: "MathWallet",
        logo: "fas fa-wifi",
      },
      {
        text: "Sollet(Extension)",
        logo: "fas fa-wifi",
      },

      {
        text: "Coin98",
        logo: "fas fa-wifi",
      },
      {
        text: "Bitpie",
        logo: "fas fa-wifi",
      },

      {
        text: "Slope",
        logo: "fas fa-wifi",
      },

      {
        text: "Slope",
        logo: "fas fa-wifi",
      },
      {
        text: "Slope",
        logo: "fas fa-wifi",
      },
      {
        text: "Slope",
        logo: "fas fa-wifi",
      },
      {
        text: "Slope",
        logo: "fas fa-wifi",
      },
    ];
    console.log(list);
        
    
  return (
    <>
      <div className="mainconnect">
        <div className="card">
          <div className="headerCard">
            <h2>Connect to a wallet</h2>
          </div>

          {list.map((a) => (
            <ul className="cardDetail">
              <li>{a.text}</li>
              <i className={a.logo}></i>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Connect