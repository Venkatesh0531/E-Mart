import React from "react";
import { speakerData } from "../data/speaker";
import NavBar from "../Components/NavBar";

const SpeakerPage=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {speakerData.map((item)=>{
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

export default SpeakerPage;