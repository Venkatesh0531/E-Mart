import React from "react";
import {menData} from "../data/men"

const Men=()=>{
    const firstSixImages = menData.slice(0,6)
    return(
        <div className="section">

            {firstSixImages.map((item)=>{
                return(
                    <div>
                        <img className="image" src={item.image} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Men;