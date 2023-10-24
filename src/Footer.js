import React from "react"
const Footer=({length})=>{
  return (
  <footer className="itemlength">{length} {(length===1 || length===0)?"item":"items"}</footer>
  )
}

export default Footer