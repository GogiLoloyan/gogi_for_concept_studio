import React, { Component, createRef as newRef } from "react";
import changePageTop from "../components/page1/changePageTop";


function withNavScroll(Page1) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.listRef = newRef();
      this.pageRef = newRef();
      this.animPlayed = false;
      this.lastTop = 0;
    }

    playAnimPage2 = () => {
      this.anim.setProperty("--play", "running");
      this.animPlayed = true;
    };

    srollTo = i => {
      this.animPlayed || this.playAnimPage2();
      changePageTop(this.pageRef.current.style)
      this.props.scroll(i);
    };

    componentDidMount() {
      const links = this.listRef.current.children;
      links.forEach = Array.prototype.forEach;

      window.addEventListener("load", () => {
        this.anim = document.querySelector(".page-2").style;
        links.forEach((link, i) =>
          link.addEventListener("click", () => this.srollTo(i))
        );
      });
    }

    render() {
      return (
        <Page1
          {...{
            listRef: this.listRef,
            pageRef: this.pageRef,
            ...this.props
          }}
        />
      );
    }
  };
}

export default withNavScroll;