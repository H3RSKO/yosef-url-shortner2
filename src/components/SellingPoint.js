import React from 'react'

export const SellingPoint = ({title, text, icon, marginTop}) => {
  console.log(marginTop)
  return (
    <div style={{width: "22vw", backgroundColor: "white", borderRadius: "2px", padding: "2em", marginTop}}>
      <div style={{backgroundColor: "#3A3054", borderRadius: "50%", height: "5em", width: "5em", marginTop: "-5em", display: "flex", justifyContent: "center", alignItems: "center"}}>
       {icon}
       </div>
      <h3 style={{fontWeight: "bold", fontSize: "22px"}}>{title}</h3>
      <p style={{fontSize: "15px", color: "#9E9AA8"}}>{text}</p>
    </div>
  )
}
