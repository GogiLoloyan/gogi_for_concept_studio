import React from "react";
import data from '../data';

class Description extends React.Component {
    state = { index: 0 }
    navigation(index) {
        this.setState({ index })
    }
    render() {
        const { index } = this.state;
        const { header_1, header_2, description } = data[index];
        return (
            <>
                <div className="description">
                    <section className={"sec"}>
                        <header>
                            <h6>{header_1}</h6>
                            <h1>{header_2[0]}<br />{header_2[1]}</h1>
                        </header>
                        <article>
                            <p>{description}</p>
                        </article>
                    </section>

                </div>

                <nav className="nav">
                    <ul>
                        <li><span className={`${index === 0 ? "active" : ""}`} onClick={() => this.navigation(0)}>01.</span></li>
                        <li><span className={`${index === 1 ? "active" : ""}`} onClick={() => this.navigation(1)}>02.</span></li>
                        <li><span className={`${index === 2 ? "active" : ""}`} onClick={() => this.navigation(2)}>03.</span></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Description;
