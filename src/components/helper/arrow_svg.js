import React from "react";
import PropTypes from "prop-types";

class ArrowSvg extends React.Component {
  _mergeStyles(...args) {
    return Object.assign({}, ...args);
  }

  renderGraphic() {
    switch (this.props.icon) {
      case "my-icon":
        return (
          <g>
            <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
          </g>
        );
      case "another-icon":
        return (
          <g>
            <path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
          </g>
        );
      case "arrow-forward":
        return (
          <g>
            <path d="M15 4l-1.41 1.41 5.58 5.59h-17.17v2h17.17l-5.58 5.59 1.41 1.41 8-8z"></path>
          </g>
        );
      default:
        return (
          <g>
            <path d="M15 4l-1.41 1.41 5.58 5.59h-17.17v2h17.17l-5.58 5.59 1.41 1.41 8-8z"></path>
          </g>
        );
      //https://dmfrancisco.github.io/react-icons/
    }
  }

  render() {
    let styles = {
      fill: "none",
      strokeWidth: "0.5",
      verticalAlign: "middle",
      strokeLinejoin: "bevel", //round
      strokeLinecap: "square",
      // strokeDasharray: "1,1",
      width: this.props.size,
      height: this.props.size
    };
    return (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        fit="true"
        style={this._mergeStyles(styles, this.props.style)}
        className="arrow_svg"
      >
        {this.renderGraphic()}
      </svg>
    );
  }
}

ArrowSvg.defaultProps = {
  size: 24
};

ArrowSvg.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object
};

export default ArrowSvg;
