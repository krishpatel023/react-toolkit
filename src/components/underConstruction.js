import "../styles/underConstruction.css";
import React from "react";
import image from '../images/under-construction.png'
// import {useNavigate} from 'react-router-dom'

function UnderConstruction() {
  //Use with react router dom
  // const navigate = useNavigate();
	// const goBack = () => {
	// 	navigate(-1);
	// }
    return (
      <div className="under-construction-wrapper">
        <h1>UNDER-CONSTRUCTION</h1>
        <img src={image} alt="" />
        {/* <div className="go-back">
          <button onClick={()=>goBack}>Back</button>
        </div> */}
      </div>
    );
  
}
export default UnderConstruction;