import React, {Component} from "react";
import PetsOwnerList from "./PetsOwnerList";

class PetCard extends Component {
    render() {
        const { owners, ownersWhoLikedPet, petInfo } = this.props;

        return (
            <li key={petInfo.id}>
                <h2>{petInfo.name}</h2>
                <h3>Liked by:</h3>
                <PetsOwnerList ownersWhoLikedPet={ownersWhoLikedPet} owners={owners} />
            </li>
        );
    }
}

export default PetCard;


