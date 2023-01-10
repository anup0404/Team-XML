import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import "react-circular-progressbar/dist/styles.css";

const Bar1=(props) =>{
      const {s}=props
      
      
    return ( 
        
        <CircularProgressbar 
        // minValue={0}
        maxValue={100}
        value={s}
        text={`${s}%`}
        
        // circleRatio={0.7}
        styles={
          {
            trail:{
                stroke: 'white',
              strokeLineCap: "butt",
              transform: 'rotate(0deg)',
              transformOrigin:"centre centre"
             },
            path: {
              strokeLineCap: "butt",
             transform: 'rotate(0deg)',
             transformOrigin:"centre centre",
             stoke:"#000"
            },
            text: {
              fill:"#ddd",
              fontSize: '16px',
            }
           }
        }
        strokeWidth={10}
        />
    );
  
  }
  
  export default Bar1;