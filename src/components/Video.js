import React from "react";
import ArrowSvg from "./helper/arrow_svg";

function Video(props) {
  return (
    <div className="video" ref={props.videoRef}>
      <div className="video_back">
        <div className="arrow_scroll" data-text="scroll">
          <ArrowSvg size="4vw" icon="arrow-forward" />
          <ArrowSvg size="4vw" icon="arrow-forward" />
          <ArrowSvg size="4vw" icon="arrow-forward" />
        </div>
      </div>
    </div>
  );
}

export default Video;
