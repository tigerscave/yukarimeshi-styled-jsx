import React from "react"
import AdawarpLogo from "../../assets/adawarp_logo.png"

const NavBar = () => {
  return (
    <div>
      <img src={AdawarpLogo} className="logo-image"/>
      <p>管理者</p>
      <hr />
      <style jsx>{`
        .logo-image {
          width: 3rem;
          height: 3rem;
        }
        `}</style>
    </div>
  )
}

export default NavBar
