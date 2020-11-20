import React from "react";
import Pets from "./Pets";

const figures = [
    {
      id: 1,
      ownerId: "1",
      favoritePetId: "1"
    },
    {
      id: 2,
      ownerId: "2",
      favoritePetId: "4"
    },
    {
      id: 3,
      ownerId: "4",
      favoritePetId: "5"
    },
    {
      id: 4,
      ownerId: "5",
      favoritePetId: "3"
    },
    {
      id: 5,
      ownerId: "3",
      favoritePetId: "2"
    },
    {
      id: 6,
      ownerId: "6",
      favoritePetId: "6"
    }
  ];
  
  const owners = {
    1: {
      id: 1,
      name: "Alexa Slomski",
      userName: "alexa"
    },
    2: {
      id: 2,
      name: "Jacek Wieczorek",
      userName: "jack"
    },
    3: {
      id: 3,
      name: "Aleksandra Panas",
      userName: "aleksandra"
    },
    4: {
      id: 3,
      name: "John Doe",
      userName: "joea"
    },
    5: {
      id: 5,
      name: "Lauren Johnson",
      userName: "coco"
    },
    6: {
      id: 6,
      name: "Nicholas Lain",
      userName: "rex"
    }
  };
  
  const pets = {
    1: {
      id: 1,
      name: "Dog"
    },
    2: {
      id: 2,
      name: "Rat"
    },
    3: {
      id: 3,
      name: "Chinchilla"
    },
    4: {
       id: 4,
       name: "Chameleon"
      },
    5: {
       id: 5,
       name: "Cat"
      },
    6: {
        id: 6,
        name: "Lizard"
       },
  };


class Display extends React.Component {
    constructor(props) {
        super(props) 
        this.ownersByPets = {};

        figures.forEach(figure => {
            const petId = figure.favoritePetId;

            if(this.ownersByPets[petId]) {
                this.ownersByPets[petId].push(figure.ownerId);
            } else {
                this.ownersByPets[petId] = [figure.ownerId];
            }
        })
    }
    render () {
        return (
            <div>
                <h2>Who liked a certain animal?</h2>
                <Pets 
                   ownersByPets={this.ownersByPets}
                   pets={pets}
                   owners={owners}
                />
            </div>
        )
    }
}

export default Display;