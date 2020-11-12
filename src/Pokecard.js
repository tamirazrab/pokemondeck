import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    let { id, name, type, exp } = this.props;
    let img = `${POKE_API}${id}.png`;
    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img src={img} />
        <div> Type: {type} </div>
        <div> Experience: {exp} </div>
      </div>
    );
  }
}

export default Pokecard;
