import React from "react";
import { mobileData } from "../data/mobiles";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

const MobilesPage=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {mobileData.map((item)=>{
                    return(
                        <div className="single-pro">
                            <Link className="text-dec" to={`/mobiles/${item.id}`}>
                                <div className="proImg">
                                    <img src={item.image} alt="" />
                                </div>
                                <div style={{paddingLeft:"80px"}}>
                                    <b>{item.company}</b><br/>{item.model}
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MobilesPage;