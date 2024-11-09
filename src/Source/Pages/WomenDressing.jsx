import React from "react";
import { womanData } from "../data/woman";
import NavBar from "../Components/NavBar";

const WomenDressing=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {womanData.map((item)=>{
                    return(
                        <div>
                            <div className="proImg">
                                <img src={item.image} alt="" />
                            </div>
                            <div style={{paddingLeft:"80px"}}>
                                <b>{item.company}</b><br/>{item.model}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default WomenDressing;