import React, { Component } from "react";
import { glassArr } from "./data";

export default class State extends Component {
  state = {
    glass: "0",
    selectedGlass: null,
    selectedGlassIndex: null,
  };
  handleChangeGlass = (glass, index) => {
    this.setState({ glass: glass, selectedGlassIndex: index });
  };
  handleChangeDesc = (glass) => {
    this.setState({ selectedGlass : glass });
  };
  renderGlassList = () => {
    return glassArr.map((item,index) => {
      return (
        <div
          style={{
            background: "white",
          }}
          key={item.id}
        >
          <img
            style={{
              margin: 20,
            }}
            onMouseOver={() => this.handleChangeDesc(item)}
            onMouseOut={() => this.handleChangeDesc(null)}
            width={100}
            src={item.url}
            alt=""
          />
        </div>
      );
    });
  };

  render() {
    return (
      <section>
        <div className="image row">
          <img
            id="img0"
            className="modelGlass"
            width={200}
            src={`./img_ex/glassesImage/model.jpg`}
            alt=""
          />
          <img width={200} src={`./img_ex/glassesImage/model.jpg`} alt="" />
        </div>
        <div className="glassList">
          <img
            id="img1"
            className="glassChoose"
            width={120}
            src={`../img_ex/glassesImage/v${this.state.glass}.png`}
            alt=""
          />
          <div>
            {this.state.selectedGlass && (
              <div className="glassDescription" id="desc1">
                <p
                  className={`${
                    this.state.selectedGlassIndex === null ||
                    this.state.selectedGlassIndex ===
                      glassArr.indexOf(this.state.selectedGlass)
                      ? "animate__animated animate__bounce animate__fadeIn"
                      : ""
                  }`}
                >
                  {this.state.selectedGlass.desc}
                </p>
              </div>
            )}
          </div>
          <ul className="glassListItems">
            {this.renderGlassList().map((item, index) => (
              <li key={index}>
                <button
                  onMouseOver={() => {
                    this.handleChangeGlass(index + 1);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
