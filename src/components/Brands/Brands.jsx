import React from 'react'
import "./Brands.css"
import "../../App.css"
import {acc,kajaria,fixit} from "../../assets/images/export_file"

function Brands() {
  return (
    <div>
        <div className="mainContainer">
            <div className="mainHeading"><h1>The best brands</h1></div>
            <div className="companies">
            <img src={acc} alt="" />  
            <img src={kajaria} alt="" />  
            <img src={fixit} alt="" />  
            </div>

        </div>
    </div>
  )
}

export default Brands