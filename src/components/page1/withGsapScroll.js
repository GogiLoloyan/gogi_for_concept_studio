import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function withGsapScroll(Component) {
  return class extends React.Component {
    componentDidMount() {
      (function initwinScrollGsap() {
        document.querySelectorAll(".page_1 .menu_list li a").forEach(link => {
          link.addEventListener("click", e => {
            e.preventDefault();
            const href = e.target.parentElement.hash;

            gsap.to(window, { duration: 1, scrollTo: href, ease: "expo" });
          });
        });
      })();
    }
    render() {
      return <Component {...this.props} />;
    }
  };
}

export default withGsapScroll;
