import React from "react";
import { computerData } from "../data/computers";
import NavBar from "../Components/NavBar";

const ComputersPage=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {computerData.map((item)=>{
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

export default ComputersPage;