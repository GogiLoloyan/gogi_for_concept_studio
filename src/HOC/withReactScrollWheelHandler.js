import React, { Component, createRef as newRef } from "react";

import changePageTop from "../components/page1/changePageTop";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function withReactScrollWheelHandler(Page1) {
  return class extends Component {
    constructor(props) {
      super(props);
      
      this.pageRef = newRef();
      this.index = 0;
      this.flag = true;
    }

    componentDidMount() {
      window.addEventListener("load", () => {
        this.page = this.pageRef.current.style;
        this.videoClass = document.querySelector(".video").classList;
        this.svgClass = document.querySelector(".arrow_scroll").classList;
        this.anim = document.querySelector(".page-2").style;
      })
    }

    // _onWheel = e => {
    //   console.dir(e.target)
    //   const { deltaY } = e;
    //   if(this.flag){
    //     this.flag = false;
    //     deltaY > 0 && this.nextState();
    //     deltaY < 0 && this.prevState();
    //   }
    // }
    
    // nextState = () => {
    //   switch (this.index) {
    //     case 0:
    //       this.videoClass.add("half-page");
    //       this.index = 1;
    //       break;
    //     case 1:
    //       this.videoClass.add("full-page");
    //       this.index = 2;
    //       break;
    //     case 2:
    //       changePageTop(this.page);
    //       this.anim.setProperty("--play", "running");
    //       break;
    //     default:
    //   }
    //   setTimeout(() => this.flag = true, 1000);
    // }

    // prevState = () => {
    //   switch (this.index) {
    //     case 0: 
    //       break;
    //     case 1:
    //       this.videoClass.remove("half-page"); 
    //       this.index = 0;
    //       break;
    //     case 2: 
    //       this.videoClass.remove("full-page"); 
    //       this.index = 1;
    //       break;
    //     default:
    //   }
    //   setTimeout(() => this.flag = true, 1000);
    // }

    // render() {
    //   return (
       
    //       <Page1
    //         {...{
    //           pageRef: this.pageRef,
    //           videoRef: this.videoRef,
    //           onWheel: this._onWheel,
    //           ...this.props
    //         }}
    //       />
       
    //   );
    // }

    /////////////////////////////////

    nextState = () => {
      switch (this.index) {
        case 0: 
          this.videoClass.add("half-page"); 
          this.index = 1; 
          break;
        case 1:
          this.svgClass.add("arrow");
          this.videoClass.add("full-page"); 
          this.index = 2; 
          break;
        case 2: 
          changePageTop(this.page); 
          this.anim.setProperty("--play", "running");
          break;
        default:
      }
    }

    prevState = () => {
      switch (this.index) {
        case 0: 
          break;
        case 1:
          this.videoClass.remove("half-page"); 
          this.index = 0;
          break;
        case 2: 
          this.svgClass.remove("arrow");
          this.videoClass.remove("full-page"); 
          this.index = 1;
          break;
        default:
      }
    }

    render() {
      return (
        <ReactScrollWheelHandler
          upHandler={this.prevState}
          downHandler={this.nextState}
          timeout={400}
        >
          <Page1
            {...{
              pageRef: this.pageRef,
              ...this.props
            }}
          />
        </ReactScrollWheelHandler>
      );
    }
  };
}

export default withReactScrollWheelHandler;
