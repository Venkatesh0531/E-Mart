import React from "react";
import {kitchenData} from "../data/kitchen"

const Kitchen=()=>{
    const firstSixImages = kitchenData.slice(0,6)
    return(
        <>
        <div className="section">

            {firstSixImages.map((item)=>{
                return(
                    <div>
                        <img className="image" src={item.image} alt="" />
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Kitchen;