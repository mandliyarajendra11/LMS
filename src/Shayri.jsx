import React from 'react'
import { memo } from 'react'

const Shayri = () => {
  return (
    <section className="shayri">
      {console.log("shari ")}
    <div className="shayri-img"></div>
      <h1 className="shayri-bar">libraries are the wardrobes of literature</h1>
      <h3 className="shayri-bar-2">- raju bhai</h3>
    </section>

  )
}
export default memo(Shayri)