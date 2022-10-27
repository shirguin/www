import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import img1 from "./img/1.jpg";


class App extends React.Component {
  text = "Help text"

  render() {
    return (
      <div>
        <Header title="Шапка сайта"/>
        <Header title="Шапка сайта!"/>
        <Header title="Шапка сайта!!!"/>
        <h1>{this.text}</h1>
        <input placeholder={this.text} onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
        <p>{this.text === "Help text" ? "Yes" : "No"}</p>
        <Image image={img1}/>
      </div>
    )
  }

  inputClick() {console.log("Clicked")}
  mouseOver() {console.log("MouseOver")}   
}

export default App