import React from "react";
import {fridgeData} from "../data/fridge"

const Fridge=()=>{
    const firstSixImages = fridgeData.slice(0,6)
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

export default Fridge;