import React from "react";

function Input() {
  return (
    <div className="footer__input">
      <h1>Sign up for<br />news letter</h1>
      <label htmlFor="email">
        Lorem ipsum dolor sit amet, consetetur sadipscing eitr, sed diam nonumy
        eirmod
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="E-mail address"
        aria-describedby="E-mail address"
      />
      <div className="svg-container">
        <svg viewBox="0 0 951 69">
          <polyline points="0,0 950,0 950,50 934,69 0,69" />
        </svg>
      </div>
    </div>
  );
}

export default Input;
