
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LocalHome = () => {
  const [state, setState] = useState({
    longitude:0,
    latitude: 0,
  });

  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
      
         console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);



  return (
    <div>
      <h1>Geolocation</h1>
      <br />
      <h3> <strong>Latitude :</strong> { state.latitude } </h3>
      <h3> <strong>longitude:</strong> { state.longitude } </h3>
    
<br />
      <Link
      className="link_text"
        to={{
          pathname: "/map",
          state,
        }}
      >
        See my location
      </Link>
    </div>
  );
};

export default LocalHome;