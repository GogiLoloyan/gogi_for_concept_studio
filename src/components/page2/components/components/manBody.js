import React from "react";

function ManBody(props) {
    const { man, images_hover, bRef, imgsRef } = props;
    return (
        <div className="img-man" ref={imgsRef}>
            <img src={man.url} alt={man.id} ref={bRef} />
            {
                images_hover.map(img => {
                    return <img src={img.url} alt={img.id} key={img.id} />
                })
            }
        </div>
    );
}

export default ManBody;