import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let firstDeckHand = [];
    let secondDeckHand = [...this.props.pokemon];
    // const pokemonList = [...this.props.pokemon];
    while (firstDeckHand.length < secondDeckHand.length) {
      let randomPokemon = Math.floor(Math.random() * secondDeckHand.length);
      let selectedRandomPokemon = secondDeckHand.splice(randomPokemon, 1)[0];
      // index at last represents index of object which returned by splice at index 0 it contains object information, in this case data of pokemon

      firstDeckHand.push(selectedRandomPokemon);
    }

    let firstHandExperience = firstDeckHand.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    let secondHandExperience = secondDeckHand.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );

    let firstHandWon = false;
    let secondHandWon = false;
    // if (firstHandExperience > secondHandExperience) {
    //   firstHandWon = true;
    //   secondHandWon = false;
    // } else {
    //   firstHandWon = false;
    //   secondHandWon = true;
    // }

    // let winnerHand = [false, true];
    // firstHandWon = winnerHand[firstHandExperience > secondHandExperience];
    // secondHandWon = winnerHand[secondHandExperience > firstHandExperience];

    firstHandWon = firstHandExperience > secondHandExperience;
    secondHandWon = secondHandExperience > firstHandExperience;

    return (
      <div>
        <Pokedex
          pokemon={firstDeckHand}
          exp={firstHandExperience}
          isWinner={firstHandWon}
        />
        <Pokedex
          pokemon={secondDeckHand}
          exp={secondHandExperience}
          isWinner={secondHandWon}
        />
      </div>
    );
  }
}

export default Pokegame;
