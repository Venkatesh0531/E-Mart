import React from "react";
import { kitchenData } from "../data/kitchen";
import NavBar from "../Components/NavBar";

const KitchenPage=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {kitchenData.map((item)=>{
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

export default KitchenPage;