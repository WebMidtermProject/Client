import React from "react";

import "./css/SlideCustomization.css";

const SlideCustomization = () => {
  return (
    <div className="slide-customization">
      <section className="slide-customization__section">
        <h4 className="slide-customization__title question">Your question?</h4>
        <input
          className="slide-customization__input"
          type="text"
          placeholder="Please type here..."
        />
      </section>
      <section className="slide-customization__section">
        <h4 className="slide-customization__title options">Options</h4>
        <input
          className="slide-customization__input options"
          type="text"
          placeholder="Please type here..."
          value="Great"
        />
        <input
          className="slide-customization__input options"
          type="text"
          placeholder="Please type here..."
          value="Bad"
        />
        <input
          className="slide-customization__input options"
          type="text"
          placeholder="Please type here..."
          value="Happy"
        />
        <button> Add option</button>
      </section>
    </div>
  );
};

export default SlideCustomization;
