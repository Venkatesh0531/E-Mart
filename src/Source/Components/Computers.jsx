import React from "react";
import {computerData} from "../data/computers"

const Computers=()=>{
    const firstSixImages = computerData.slice(0,6)
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

export default Computers;