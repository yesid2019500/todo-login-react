import React from 'react'
import {  MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';
import  data from '../../assets/data.json'
import { useState , useEffect} from 'react';
import { useLocation, useHistory } from 'react-router-dom';


const MapView = () => {

    const [state, setState] = useState({
        currentLocation:{lat:'3.3953696', lng:'-76.7959594'},
        zoom:13
    })

    const location = useLocation()
    const history = useHistory()
  // console.log(location);


useEffect(()=> {

  if (  location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude
      }
      setState({...state, currentLocation} )
      history.replace({pathname:'/map',state:{}})
  }

},[])

    
  return (
    <MapContainer center={ state.currentLocation } zoom={ state.zoom } >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
    <Markers data={data} />
    </MapContainer>
  )
}

export default MapView