import React from "react";
import { mobileData } from "../data/mobiles";

const Mobiles=()=>{
    const firstSixImages = mobileData.slice(0,6)
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

export default Mobiles;