import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import "react-circular-progressbar/dist/styles.css";
// import { easeQuadInOut } from 'd3-ease';


const Bar=(props) =>{
      const {s}=props
      
      
    return (
        // <ProgressProvider valueStart={0} valueEnd={66}>
        <CircularProgressbar
        // minValue={32}
        maxValue={212}
        value={s}
        text={`${s}F`}
        
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
             stoke:"cyan"
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
  
  export default Bar;