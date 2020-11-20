import React, { Component } from "react";

class PetsOwnerList extends Component {
    render() {
       const { owners, ownersWhoLikedPet } = this.props;

       if (!ownersWhoLikedPet || ownersWhoLikedPet.length === 0) {
           return <p>None of the current owners liked this pet.</p>;
       }

       const listofItems = ownersWhoLikedPet.map(id => (
           <li key={id}>
               <p>{owners[id].name}</p>
           </li>
       ));
       return <ul>{listofItems}</ul>
    }
}

export default PetsOwnerList;



