import React, { useState} from "react";
import useSound from 'use-sound';
import boopSfx from './beep-11.mp3';

const Alarm=(prop)=>{
    const {s}=prop
    const [valuet,setValuet]=useState(50)
   
    
    const [playOn] = useSound(
      boopSfx,
      { volume: 0.25 }
    );
    
    // useEffect(()=>{
    //   setInterval(()=>{
    //     (s>=valuet? playOn():stop())
    //   },1000)
    // },[]);
    (s>=valuet && playOn())


      return (
        <div>
          
        
        <input class="alr" type="range" min="0" max="100"  id="myRange" onChange={(event)=>{setValuet(event.target.value)}}/>
        {valuet}
        <h1 id="sg">{valuet}F</h1>
        
       
        </div>


      );
}
export default Alarm;