import React from "react";
import { furnitureData } from "../data/furniture";
import NavBar from "../Components/NavBar";

const FurniturePage=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {furnitureData.map((item)=>{
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

export default FurniturePage;