import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (

 <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">
            <a className="navbar-brand" href="#" ><i>perrybates</i></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:'white'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">

                            <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">About me</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Projects</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Resume</a></li>
                            <li className="nav-item active"><a className="nav-link" href="#">Contact</a></li>
                            
                    </ul>
            </div>
     </div>
</nav>
    )
}
export default Navbar