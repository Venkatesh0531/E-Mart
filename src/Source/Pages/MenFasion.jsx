import React from "react";
import { menData } from "../data/men";
import NavBar from "../Components/NavBar";

const MenFasion=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {menData.map((item)=>{
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

export default MenFasion;