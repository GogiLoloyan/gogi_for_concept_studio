import React from "react";
import { scrollVertically2 } from "./helper/halper";
import { images, man, images_hover } from "../pictures/list_body_1/images.js";

class Page2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null
    };

    this.man = React.createRef();
    this.man_images = React.createRef();
    this.images = React.createRef();
    this.description = React.createRef();
  }

  componentDidMount() {
    fetch("./data/data_for_page_2.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error: error.message }));

    this.description.current.addEventListener(
      "mousewheel",
      scrollVertically2.bind(this.description.current)
    );
  }

  handleMouseEnter(id) {
    this.man.current.style.opacity = 0.3;
    this.man_images.current.children[id].style.opacity = 1;
  }

  handleMouseLeave(id) {
    this.man.current.style.opacity = 0.9;
    this.man_images.current.children[id].style.opacity = 0;
  }

  render() {
    const { data, error } = this.state;

    return (
      <div className="page_2" id="page_2" ref={this.props.myRef}>
        <div className="back_grid">
          <div className="img-man" ref={this.man_images}>
            <img src={man.url} alt={man.id} ref={this.man} />
            {images_hover.map(img => (
              <img src={img.url} alt={img.id} key={img.id} />
            ))}
          </div>

          <div className="images" ref={this.images}>
            {images.map(img => (
              <img
                src={img.url}
                alt={img.id}
                onMouseEnter={() => this.handleMouseEnter(img.id.slice(-1))}
                onMouseLeave={() => this.handleMouseLeave(img.id.slice(-1))}
                key={img.id}
              />
            ))}
          </div>

          <div className="description" ref={this.description}>
            {error ||
              data.map(sec => (
                <section className={sec.id + " sec"} id={`p_2_${sec.id}`} key={sec.id}>
                  <h1>{sec.header_1}</h1>
                  <h2>
                    {sec.header_2[0]}
                    <br />
                    {sec.header_2[1]}
                  </h2>
                  <p>{sec.description}</p>
                </section>
              ))}
          </div>

          <ul>
            <li>
              <a href="#p_2_sec_1">01.</a>
            </li>
            <li>
              <a href="#p_2_sec_2">02.</a>
            </li>
            <li>
              <a href="#p_2_sec_3">03.</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Page2;
