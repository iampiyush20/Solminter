import React,{useState} from 'react'
import "./Solminter.css";
import Connect from "./Connect.js";
const SolminterBar = () => {
  const [popup, setPopup] = useState(false);
 
  return (
    <>
      <div className="home d-flex ">
        <div className="popupmain">{popup ? <Connect /> : ""}</div>

        <div className="main">
          <section className="upper">
            <nav
              className="navbar navbar-expand d-flex flex-column
      align-item-start"
              id="sidebar"
            >
              <a href="" className="navbar-brand  w-100  text-center">
                <div className="logo">Solminter</div>
              </a>
              <button type="button" onClick={() => setPopup(!popup)}>
                connect
              </button>
              <ul className="navbar-nav d-flex flex-column mt-5 w-100">
                <li className="nav-item w-100 ">
                  <a href="" className="nav-link  pl-4 active">
                    <span className="text-sm"> Token management</span>
                  </a>
                </li>
                <li className="nav-item w-100">
                  <a href="" className="nav-link  pl-4">
                    <span> Apply for IDO</span>
                  </a>
                </li>
                <li className="nav-item w-100">
                  <a href="" className="nav-link  pl-4">
                    <span> NFT</span>
                  </a>
                </li>
                <li className="nav-item w-100">
                  <a href="" className="nav-link  pl-4">
                    <span> Documentation</span>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          <section className="lower w-100 ">
            <div className="connectUs ">
              <p>Connect with us</p>
              <div className="button">
                <a>
                  <i className="fab fa-twitter"></i>
                </a>
                <a>
                  <i className="fas fa-paper-plane"></i>
                </a>
              </div>
            </div>
            <div className="footer">
              <div className="poweredBy">
                <i class="fas fa-file-alt"></i>
                SOLANA
              </div>
              <div className="copyright">
                <i class="fas fa-copyright"></i>
                Solminter 2021
              </div>
            </div>
          </section>
        </div>
        <div className="detailss">Please connect your wallet.</div>
      </div>
    </>
  );
}

export default SolminterBar