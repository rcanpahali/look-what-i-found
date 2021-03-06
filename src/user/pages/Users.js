import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sarı Çizmeli Bullici",
      image: "https://ichef.bbci.co.uk/news/320/cpsprodpb/51F3/production/_106997902_gettyimages-611696954.jpg",
      placeCount: 12
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
