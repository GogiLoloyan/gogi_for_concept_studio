import React from "react";

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
     
      this.refs.slider.addEventListener("pointermove", ()=>{

      });
  }

  render() {
    const { error, data } = this.state;
    return (
      <section className="page_3" id="page_3" aria-label = "Industries we help">
        <div className="back_grid">

          <header className="header">
            <h1>Industries<br />we help</h1>
          </header>

          <article className="slider" ref="slider">
            {error ||
              data.map((slide, index) => (
                <div className="slide" key={slide.id}>
                  <img src={slide.url} alt={slide.id}/>
                  <h2>{`0${index + 1}`}</h2>
                  <p>{slide.description}</p>
                </div>
              ))}
          </article>

        </div>
      </section>
    );
  }
}

export default Page3;
