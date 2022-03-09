import React from "react"
import "./App.css"
import albums from "./data/albums.js"
import AlbumCard from "./AlbumCard"
import Header from "./Header"

function App() {
  return (
    <div className="App">
      {/* Let's try to move this header tag into a separate component */}
      {/* and pass the header title as a prop */}
      {/* tip:  you don't need curly braces to pass a string as a prop */}
      <header className="header">
        <h1>My Album Collection</h1>
      </header>
      <div className="container">
        <AlbumCard />
      </div>
    </div>
  )
}
export default App
