import React from "react";
import { Link } from "react-router-dom";
import FullImage from "../media/PurpleTulips.webp";
import "../styles/Home.css";

function Home() {
   return (
      <div className="home" style={{ backgroundImage: `url(${FullImage})` }}>
         <div className="headerContainer">
            <h1> Eglės gėlės </h1>
            <p> Gėlės visoms progoms</p>
            <Link to="/flower">
               <button> Į krepšelį </button>
            </Link>
         </div>
      </div>
   );
}

export default Home;
