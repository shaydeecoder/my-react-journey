import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label htmlFor="name">{text}</label>
        <input type="text" name="name" id="name" />
      </div>
    );
  }
}

export default Field;
