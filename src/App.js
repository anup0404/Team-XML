import "react-circular-progressbar/dist/styles.css";
import './App.css';
import Bar from './Bar.js';
import Bar1 from './Bar1';
import React, { useState, useEffect } from "react";
import Alarms from './Alarm.js'
  
function App() {

  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(0);
  useEffect(() => {
    setInterval(() => {
      fetch('https://api.thingspeak.com/channels/1717508/fields/1/last.json')
        .then(response => response.json())
        .then(data => setS1(data.field1))
        
        fetch('https://api.thingspeak.com/channels/1717508/fields/2/last.json')
        .then(response => response.json())
        .then(data => setS2(data.field2));
    }, 1000);
  }, []);
  var v = parseFloat(s1).toFixed(2)
  var v1 = parseFloat(s2).toFixed(2)

 

  return (
    
    <div className="bar">
      <div className="bar1">
      <h1>Temprature</h1>
      <Bar s={v} />
      <p>Select your minimum temprature</p>
      <Alarms s={v} />
      </div>
      <div className="bar2">
      <h1>Humidity</h1>     
      <Bar1 s={v1}/>
      <h1 className="sdf">dfg</h1>
      {/* <p className="sdk">dfg</p> */}
      </div>
      {/* <Bar props={45}/> */}
     
      
     </div>
  );

}

export default App;
