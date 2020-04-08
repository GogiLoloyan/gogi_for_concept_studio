import React from "react"
import data from "./data";

function Description(props) {
    return (
        <div className="p4-description-sec">
            {data.map(item => (
                <section className="sec">
                    <h6>{item.header_1}</h6>
                    <div className="sec_desc">
                        <h1>{item.header_2}</h1>
                        <p>{item.description}</p>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Description;