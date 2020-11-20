import React, {Component} from "react";
import PetCard from "./PetCard";

class Pets extends Component {
  render () {
    const { ownersByPets, owners, pets } = this.props;

    const petCard = Object.keys(pets).map(id => (
      <PetCard
       key={id}
       owners={owners}
       ownersWhoLikedPet = {ownersByPets[id]}
       petInfo={pets[id]}
      />
    ));
    return <ul>{petCard}</ul>;
  }
}

export default Pets;


