import React from "react"

import { FiPlus } from "react-icons/fi"

import { Map, TileLayer } from "react-leaflet"
import mapMarkerImg from "../../assets/images/mapmarker.svg"

import * as S from "./style";
import "leaflet/dist/leaflet.css"



export const OrphanagesMap = () => (
  <S.Container>
    <S.Sidebar>
      <header>
        <img src={mapMarkerImg} alt="" />

        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>

      <footer>
        <strong>Fortaleza</strong>
        <span>Ceará</span>
      </footer>
    </S.Sidebar>

    <Map
      center={[-3.7570615, -38.5585026]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Open street map version. It doens't require a Private Token */}
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Mpabox version. It's required to create an account and use a Private Token */}
      {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
    </Map>

    <S.LinkAdd to="">
      <FiPlus size={32} color="#fff" />
    </S.LinkAdd>

  </S.Container>
)

export default OrphanagesMap
