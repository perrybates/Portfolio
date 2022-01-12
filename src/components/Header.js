import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wrapper">
             <div className='main-info'>
                <h1>Hi, I'm Perry Bates. I work as a Software Engineer</h1>
                <Typed
                className="typed-text"
                strings ={["Full stack developer", "Mobile development with React Native", "Cloud engineering"]}
                typeSpeed={60}
                backSpeed={60}
                loop
             />
             <a href="#" className="btn-main-offer">View Projects</a>
             </div>
             
        </div>
    )
}

export default Header
