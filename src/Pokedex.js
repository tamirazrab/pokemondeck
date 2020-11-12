import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title, experience;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
      experience = <p>
        Total Experience : <strong>{this.props.exp}</strong>
      </p>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
      experience =  <p>
        Total Experience : {this.props.exp}
      </p>;
    }
    return (
      <div className="Pokedex">
        <h1>Pokedex</h1>
        {/* no need to add p tag along with experience and title but just added anyway */}
        <p> {experience} </p>
        <p> {title} </p>
        <div className="Pokedex-card">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
