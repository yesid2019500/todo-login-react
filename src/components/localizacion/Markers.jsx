import React from 'react'
import { Marker } from 'react-leaflet'
import {IconLocation} from './IconLocation'



const Markers = ({data}) => {
    const { places} = data

  const markers =  places.map((place,i) => {
        return <Marker key={i} position={place.geometry } icon={ IconLocation } /> 
    })
    
  return (
    markers
  )
}

export default Markers