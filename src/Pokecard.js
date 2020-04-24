import React, { Component } from "react";
import "./Pokecard.css";
const POKE_API = " https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
  render() {
    let name = this.props.name;
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="Pokecard-data">Type:{this.props.type}</div>
        <div className="Pokecard-data">Exp:{this.props.exp}</div>
      </div>
    );
  }
}
export default Pokecard;
