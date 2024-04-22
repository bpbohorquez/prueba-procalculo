import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker, Rectangle } from 'react-leaflet';
import "./Mapa.css";


import Card from 'react-bootstrap/Card';

export const Mapa = () => {

  // const [capa, setCapa] = useState();


  // useEffect(() => {
  //   fetch("")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  // }, [])

  const capa = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  return (
    <div id="mapaContenedor">
      <MapContainer id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <Rectangle bounds={capa} />
      </MapContainer>

    </div>
  )

  // <div>
  //   <Card>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Text>
  //         MAPA
  //       </Card.Text>
  //     </Card.Body>
  //   </Card>
  // </div>


}
