import React from "react";
import {Link} from 'react-router-dom'

const NavBar=()=>{
    return(
        <div>
            <div className="navbar1">
            <div className="emart-logo">
                <Link to={'/' } className="text_dec">
                    <h2>E-Mart</h2>
                </Link>
                
            </div>
            <div className="navbar2">
                <div className="search">
                    <input className="search-box" type="text" placeholder="Search"/>
                </div>
                <div className="sign">
                    <p style={{fontSize:"15px"}}>SignIn/SignUp</p>
                </div>
                <div className="cart">
                    <p>Cart</p>
                </div>
            </div>
            </div>
            <div className="navbar3">
                <ul>
                    <Link to={'/mobiles'}><li className="link">Mobiles</li></Link>
                    <Link to={'/computers'}><li className="link">Computers</li></Link>
                    <Link to={'/menfasion'}><li className="link">Men Fasion</li></Link>
                    <Link to={'/womendressing'}><li className="link">Women Dressing</li></Link>
                    <Link to={'/watchpage'}><li className="link">Watch</li></Link>
                    <Link to={'/tv'}><li className="link">Tv</li></Link>
                    <Link to={'/fridge'}><li className="link">Fridge</li></Link>
                    <Link to={'/furniture'}><li className="link">Furniture</li></Link>
                    <Link to={'/kitchen'}><li className="link">Kitchen</li></Link>
                    <Link to={'/speaker'}><li className="link">Speaker</li></Link>
                </ul>
            </div>
        </div>
        




        
    )
}

export default NavBar;