import React,{useEffect, useState} from 'react';
import "./Nav.css"

function Nav(){
    const [show, handleShow]=useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?resize=681,383"
            alt="Netflix Logo"
            />

            <img className="nav_avtar"
            src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg"
            alt="Netflix Avtar"
            />
            
        </div>
    );
}

export default Nav;
