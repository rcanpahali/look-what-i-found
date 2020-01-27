import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Razık Can Pahalı",
      image: "https://www.petmd.com/sites/default/files/petmd-street-cat.jpg",
      placeCount: 12
    }
  ];

  //key={user.id}
  //id={user.id}
  //image={user.image}
  //name={user.name}
  //placeCount={user.places}

  return <UsersList items={USERS} />;
};

export default Users;
