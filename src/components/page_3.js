import React from "react";
import { scrollHorizontally } from "./helper/halper";

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null
    };
  }

  componentDidMount() {
    fetch("./data/page_3/data.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error: error.message }));
     
    this.refs.slider.addEventListener(
      "mousewheel",
      scrollHorizontally.bind(this.refs, -this.refs.slider.lastElementChild.clientWidth)
    );
  }

  render() {
    const { error, data } = this.state;
    return (
      <div className="page_3" id="page_3">
        <div className="back_grid">

          <section className="header">
            <h1>INDUSTRIES<br />we help</h1>
          </section>

          <section className="slide_sec" ref="slider">
            <div className="mouse" ref="mouse">
              <div className="indicate"></div>
            </div>
            {error ||
              data.map((slide, index) => (
                <div className="slide" key={slide.id}>
                  <img src={slide.url} />
                  <h2>{`0${index + 1}`}</h2>
                  <p>{slide.description}</p>
                </div>
              ))}
          </section>

        </div>
      </div>
    );
  }
}

export default Page3;
