import React, { Component, createRef as newRef } from "react";

function withNavScroll(Page1) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.listRef = newRef();
      this.pageRef = newRef();
      this.animPlayed = false;
      this.winHeight = window.innerHeight;

      window.addEventListener("resize", this.updatePage);
    }

    updatePage = () => {
      this.winHeight = window.innerHeight;
      switch (this.pageStyle.top) {
        case "": case "0px": break;
        default: this.changePageTop();
      }
    };

    changePageTop = () => {
      this.pageStyle.top = `-${this.winHeight}px`;
    };

    playAnimPage2 = () => {
      this.anim.setProperty("--play", "running");
      this.animPlayed = true;
    };

    srollTo = i => {
      this.animPlayed || this.playAnimPage2();
      this.changePageTop();
      this.props.scroll(i);
    };

    componentDidMount() {
      this.pageStyle = this.pageRef.current.style;
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
