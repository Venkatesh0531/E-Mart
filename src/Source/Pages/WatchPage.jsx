import React from "react";
import { watchData } from "../data/watch";
import NavBar from "../Components/NavBar";

const WatchPage=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {watchData.map((item)=>{
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

export default WatchPage;