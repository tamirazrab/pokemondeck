import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';  
  

  // problem with this is that it accepts id's only with 00 or 0 on it

let padZeros = (number) => (number <= 999 ? `00${number}`.slice(-3) : number) ;

// slice(-3) slices last 3 digits, if number is 23 -> 0023 -> 023

class Pokecard extends Component {
  render() {
    let { id, name, type, exp } = this.props;
    let img = `${POKE_API}${padZeros(id)}.png`;
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
