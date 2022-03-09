import React from "react"
import { starRating } from "./utilites.js"

function AlbumCard(props) {
  return (
    <div className="card">
      {/* <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.artist}</h3>
      <p>{starRating(props.rating)}</p>
      <p>{props.rating} /10</p> */}
    </div>
  )
}

export default AlbumCard
