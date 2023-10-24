import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div style={{
            backgroundColor: "black",
            opacity: 0.5,
            padding: 20,
            textAlign: "center",
            color: "white",
        }}>
            <h2>TRY GLASSES APP ONLINE</h2>
        </div>
      </div>
    )
  }
}
