import React from "react"
const Home=({title})=>{
  return (
    <header className="Home">
        <span>{title}</span>
    </header>
  )
}
Home.defaultProps={
  title:"To-do"
}
export default Home