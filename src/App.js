import React from "react";
import Clock from "./Components/DigitalClock";

function App() {
  return(
    <>
      <h1 style={{fontSize:"70px", 
                  margin:"100px",
                  color:"white",
                  marginLeft:"-730px",
                  textAlign: "center", 
                  fontFamily:"serif",
                  }}>Digital Clock</h1>
      <Clock/>
    </>
  )
}
export default App;