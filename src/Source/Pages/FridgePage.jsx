import React from "react";
import { fridgeData } from "../data/fridge";
import NavBar from "../Components/NavBar";

const FridgePage=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {fridgeData.map((item)=>{
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

export default FridgePage;