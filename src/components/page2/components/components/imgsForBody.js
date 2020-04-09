import React from "react";

function ImgsForBody(props) {
    const { images, handleMouseEnter, handleMouseLeave } = props;
    return (
        <div className="body-images">
            {images.map(img => (
                <img
                    key={img.id}
                    src={img.url}
                    alt={img.id}
                    onMouseEnter={() => handleMouseEnter(img.id.slice(-1))}
                    onMouseLeave={() => handleMouseLeave(img.id.slice(-1))}
                />
            ))}
        </div>
    )
}

export default ImgsForBody;